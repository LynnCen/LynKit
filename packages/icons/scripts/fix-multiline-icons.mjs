/**
 * Fix multiline icon components that weren't properly transformed
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = join(__dirname, '../src/icons');

async function fixIcon(filepath, filename) {
  let content = await readFile(filepath, 'utf-8');

  // 检查是否是需要修复的文件（已有新 import 但还在使用 React.memo）
  if (!content.includes('React.memo')) {
    return null;
  }

  // 提取组件名
  const componentNameMatch = content.match(/export const (Icon\w+) = React\.memo/);
  if (!componentNameMatch) return null;
  const componentName = componentNameMatch[1];

  console.log(`   Fixing: ${componentName}`);

  // 多行格式修复
  const multiLinePattern = new RegExp(
    `export const ${componentName} = React\\.memo\\(\\n\\s+\\(props: ${componentName}Props\\) => \\{\\n\\s+return \\(`,
    'g'
  );

  const newDef = `const ${componentName} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  } = props;

  return (`;

  content = content.replace(multiLinePattern, newDef);

  // 移除残留的 interface 定义（如果还有的话）
  content = content.replace(
    /export interface \w+Props extends React\.SVGProps<SVGSVGElement> \{\}\n\n/g,
    ''
  );

  // 修复 svg 标签（多行格式可能缩进不同）
  content = content.replace(
    /<svg\n\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\n\s+width="24"\n\s+height="24"/g,
    '<svg\n      ref={ref}\n      xmlns="http://www.w3.org/2000/svg"\n      width={size}\n      height={size}'
  );

  // 确保有 ref 属性
  if (!content.includes('ref={ref}')) {
    content = content.replace(
      /<svg\n\s+xmlns/g,
      '<svg\n      ref={ref}\n      xmlns'
    );
  }

  // 修复 props 透传（可能是 {...props} 而不是 {...rest}）
  content = content.replace(/\{\.\.\.props\}/g, '{...rest}');

  // 添加 style 和 className（如果缺失）
  if (!content.includes('style={style}')) {
    content = content.replace(
      /fill="none"\n(\s+)>/,
      'fill="none"\n$1      style={style}\n$1      className={className}\n$1>'
    );
  }

  return content;
}

async function main() {
  console.log('🔧 Fixing multiline icon components...\n');

  const files = await readdir(ICONS_DIR);
  const iconFiles = files.filter(
    (f) => f.endsWith('.tsx') && f.startsWith('Icon')
  );

  let fixed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of iconFiles) {
    const filepath = join(ICONS_DIR, file);

    try {
      const result = await fixIcon(filepath, file);
      if (result) {
        await writeFile(filepath, result);
        fixed++;
      } else {
        skipped++;
      }
    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Fixed: ${fixed}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
}

main().catch(console.error);
