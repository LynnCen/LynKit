/**
 * Icon Transform Script
 *
 * 将 CLI 生成的原始图标组件转换为标准化格式：
 * - 添加 forwardRef
 * - 统一使用 IconProps 类型
 * - 颜色使用 currentColor（static 图标除外）
 * - 尺寸支持 size prop
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = join(__dirname, '../src/icons');

// 保留原色的图标（static 结尾通常是彩色图标）
const PRESERVE_COLORS_PATTERN = /static\.tsx$/i;

function shouldPreserveColor(filename) {
  return PRESERVE_COLORS_PATTERN.test(filename);
}

async function transformIcon(filepath, filename) {
  let content = await readFile(filepath, 'utf-8');

  const preserveColor = shouldPreserveColor(filename);

  // 1. 提取组件名
  const componentNameMatch = content.match(/export const (Icon\w+)/);
  if (!componentNameMatch) return null;
  const componentName = componentNameMatch[1];

  // 2. 替换硬编码颜色（非 static 图标）
  if (!preserveColor) {
    content = content.replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill={color}');
  }

  // 3. 替换 import
  content = content.replace(
    "import React from 'react'",
    `import { forwardRef } from 'react';
import type { IconProps } from '../types';`
  );

  // 4. 移除独立 interface 定义
  content = content.replace(
    /export interface \w+Props extends React\.SVGProps<SVGSVGElement> \{\}\n\n/,
    ''
  );

  // 5. 替换组件定义 - 处理不同格式（单行和多行）
  const newDef = `const ${componentName} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  } = props;

  return (`;

  // 单行格式: export const Iconxxx = React.memo((props: IconxxxProps) => {
  const singleLinePattern = new RegExp(
    `export const ${componentName} = React\\.memo\\(\\(props: ${componentName}Props\\) => \\{\\n  return \\(`
  );
  content = content.replace(singleLinePattern, newDef);

  // 多行格式: export const Iconxxx = React.memo(\n  (props: IconxxxProps) => {
  const multiLinePattern = new RegExp(
    `export const ${componentName} = React\\.memo\\(\\n\\s+\\(props: ${componentName}Props\\) => \\{\\n\\s+return \\(`
  );
  content = content.replace(multiLinePattern, newDef);

  // 6. 替换 svg 标签属性
  content = content.replace(
    /<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+width="24"\s+height="24"/g,
    '<svg\n      ref={ref}\n      xmlns="http://www.w3.org/2000/svg"\n      width={size}\n      height={size}'
  );

  // 7. 替换 props 透传
  content = content.replace(
    /fill="none"\s+\{\.\.\.props\}/g,
    'fill="none"\n      style={style}\n      className={className}\n      {...rest}'
  );

  // 8. 修正闭包格式 - React.memo 结尾
  content = content.replace(/\)\n\}\)/, ');\n})');

  return content;
}

async function main() {
  console.log('🔄 Transforming icons...\n');

  const files = await readdir(ICONS_DIR);
  const iconFiles = files.filter(
    (f) => f.endsWith('.tsx') && f.startsWith('Icon')
  );

  let transformed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of iconFiles) {
    const filepath = join(ICONS_DIR, file);

    try {
      const original = await readFile(filepath, 'utf-8');

      // 跳过已转换的文件
      if (original.includes("from '../types'")) {
        skipped++;
        continue;
      }

      const result = await transformIcon(filepath, file);
      if (result) {
        await writeFile(filepath, result);
        transformed++;
        if (transformed % 100 === 0) {
          console.log(`   Transformed ${transformed} icons...`);
        }
      } else {
        console.warn(`⚠️  Could not parse: ${file}`);
        errors++;
      }
    } catch (error) {
      console.error(`❌ Error transforming ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Transformed: ${transformed}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   📁 Total: ${iconFiles.length}`);
}

main().catch(console.error);
