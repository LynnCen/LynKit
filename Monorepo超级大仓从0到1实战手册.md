# Monorepo 超级大仓从0到1实战手册

> **定位**：通用的 Monorepo 搭建实战指南  
> **核心目标**：深入理解每一步的工作原理与本质  
> **技术栈**：pnpm + Turborepo + TypeScript  
> **目标读者**：需要搭建或迁移到 Monorepo 的团队

---

## 目录

- [第一章：Monorepo 的本质与适用场景](#第一章monorepo-的本质与适用场景)
- [第二章：技术选型的底层逻辑](#第二章技术选型的底层逻辑)
- [第三章：架构设计原则](#第三章架构设计原则)
- [第四章：搭建基础骨架](#第四章搭建基础骨架)
- [第五章：配置 pnpm Workspace](#第五章配置-pnpm-workspace)
- [第六章：配置 Turborepo](#第六章配置-turborepo)
- [第七章：TypeScript 配置体系](#第七章typescript-配置体系)
- [第八章：构建第一个共享包](#第八章构建第一个共享包)
- [第九章：依赖管理系统](#第九章依赖管理系统)
- [第十章：构建性能优化](#第十章构建性能优化)
- [第十一章：架构治理机制](#第十一章架构治理机制)
- [第十二章：CI/CD 集成](#第十二章cicd-集成)

---

## 第一章：Monorepo 的本质与适用场景

### 1.1 什么是 Monorepo

**Monorepo** (Monolithic Repository) 的本质是**用单一代码仓库管理多个相关项目**的软件工程实践。

#### 核心特征

1. **统一的版本控制**：所有代码在同一个 Git 仓库中
2. **共享的工具链**：统一的构建、测试、部署流程
3. **原子化的变更**：跨项目修改可以在一个 commit 中完成
4. **可见的依赖关系**：项目间依赖明确可追踪

#### 与 Polyrepo 的本质区别

```
Polyrepo（多仓库）的问题本质：
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│  项目 A     │      │  项目 B     │      │  共享库 C   │
│  v1.2.0     │─────▶│  v2.1.0     │─────▶│  v0.5.0     │
└─────────────┘      └─────────────┘      └─────────────┘
     │                    │                    │
     └────────────────────┴────────────────────┘
              问题：版本不同步、依赖混乱

Monorepo 的解决方案：
┌────────────────────────────────────────────────────┐
│               单一代码仓库                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ 项目 A   │  │ 项目 B   │  │ 共享库 C │         │
│  │ 统一版本 │──│ 统一版本 │──│ 统一版本 │         │
│  └──────────┘  └──────────┘  └──────────┘         │
└────────────────────────────────────────────────────┘
         本质：依赖关系内聚、版本统一
```

### 1.2 是否需要 Monorepo：评估维度

不需要复杂的评分系统，关注以下**核心矛盾点**：

#### 维度一：代码共享需求

**判断依据**：

- 是否有 5 个以上的通用组件/工具库需要跨项目共享？
- 跨项目修改是否频繁（月均 10 次以上）？
- 是否存在大量重复代码？

**本质**：Monorepo 解决的是**代码复用的成本问题**。如果你的项目间代码重用很少，Monorepo 的价值有限。

#### 维度二：团队协作效率

**判断依据**：

- 是否有多个团队共同维护前端基础设施？
- 是否需要保证多个项目技术栈版本一致？
- 是否希望建立统一的代码规范和质量标准？

**本质**：Monorepo 是一种**组织级的协作模式**，适合需要统一技术栈的中大型团队。

#### 维度三：技术债务

**判断依据**：

- 是否存在严重的依赖版本碎片化问题？
- 构建和部署流程是否过于复杂？
- 是否难以追踪跨项目的影响范围？

**本质**：Monorepo 通过**集中化管理降低复杂度**，但前提是你愿意投入初期搭建成本。

#### 结论

如果以上三个维度中有**两个及以上**的答案是肯定的，那么 Monorepo 适合你的团队。

---

## 第二章：技术选型的底层逻辑

### 2.1 包管理器的选择：为什么是 pnpm

#### npm/yarn 的局限性

传统包管理器采用**扁平化 node_modules** 结构：

```
node_modules/
├── package-a/
├── package-b/
└── package-c/  (被 a 和 b 共同依赖，提升到顶层)
```

**问题本质**：

1. **幽灵依赖（Phantom Dependencies）**：项目可以访问未声明的依赖
2. **磁盘空间浪费**：同一个包的不同版本会被复制多次
3. **安装速度慢**：需要解析复杂的依赖树并复制文件

#### pnpm 的创新：内容寻址存储

pnpm 采用**硬链接 + 符号链接**的方式：

```
全局存储（Content-Addressable Store）
~/.pnpm-store/
└── v3/
    └── files/
        └── 00/
            └── <hash>  ← 包的实际内容

项目 node_modules
node_modules/
├── .pnpm/
│   └── package-a@1.0.0/
│       └── node_modules/
│           └── package-a/  ← 硬链接到全局存储
└── package-a  ← 符号链接到 .pnpm/package-a@1.0.0/node_modules/package-a
```

**工作原理**：

1. **硬链接（Hard Link）**：多个文件路径指向同一个 inode，节省空间
2. **符号链接（Symbolic Link）**：保证 Node.js 的模块解析算法正确工作
3. **依赖隔离**：只有声明的依赖才能被访问，杜绝幽灵依赖

**性能优势**：

- 磁盘空间：节省 60%+（多项目共享同一份依赖）
- 安装速度：快 2-3 倍（只需创建链接，无需复制）
- 严格性：强制显式声明依赖

#### Workspace 支持

pnpm workspace 的核心是**包之间的链接机制**：

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

当你声明 `"@shared/ui": "workspace:*"` 时，pnpm 会：

1. 扫描 workspace 中所有包的 `package.json`
2. 找到匹配的包（如 `packages/ui`）
3. 创建符号链接：`node_modules/@shared/ui` → `../../packages/ui`

**本质**：workspace 是一种**本地依赖解析机制**，让包之间的引用像引用 npm 包一样自然。

### 2.2 构建工具的选择：为什么是 Turborepo

#### Monorepo 构建的挑战

假设有以下依赖关系：

```
app-web → shared-ui → shared-utils
app-mobile → shared-ui → shared-utils
```

**问题**：

1. 构建顺序：必须先构建 utils，再构建 ui，最后构建 app
2. 增量构建：修改 utils 后，需要重新构建 ui 和 app
3. 并行构建：app-web 和 app-mobile 可以并行，但必须等 ui 完成
4. 缓存复用：相同输入应该跳过构建

#### Turborepo 的解决方案

**核心机制 1：任务图（Task Graph）**

Turborepo 会根据依赖关系构建一个 DAG（有向无环图）：

```
┌─────────────┐
│ utils:build │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  ui:build   │
└──────┬──────┘
       │
       ├─────────────┬─────────────┐
       ▼             ▼             ▼
┌──────────┐  ┌──────────┐  ┌──────────┐
│web:build │  │mobile:   │  │admin:    │
│          │  │build     │  │build     │
└──────────┘  └──────────┘  └──────────┘
```

**调度算法**：

1. 拓扑排序确定执行顺序
2. 识别可并行的任务（无依赖关系）
3. 最大化 CPU 利用率

**核心机制 2：缓存系统**

Turborepo 的缓存键计算公式：

```
Cache Key = Hash(
  任务配置（task definition）
  + 输入文件（inputs）
  + 环境变量（env）
  + 上游依赖的输出（upstream outputs）
)
```

**工作流程**：

1. **构建前**：计算当前任务的缓存键
2. **查找缓存**：在本地/远程缓存中查找匹配的输出
3. **缓存命中**：直接恢复输出文件，跳过构建
4. **缓存未命中**：执行构建，保存输出到缓存

**核心机制 3：增量构建**

```bash
# 初次构建
$ turbo run build
• utils:build (3.2s)  # 执行
• ui:build (5.1s)     # 执行
• web:build (8.3s)    # 执行

# 修改 utils 后
$ turbo run build
• utils:build (3.1s)  # 执行（输入变化）
• ui:build (5.0s)     # 执行（上游变化）
• web:build (CACHED)  # 跳过（依赖 ui 的输出未变）
```

**原理**：Turborepo 会检测**传递性依赖**，只重建受影响的部分。

### 2.3 版本管理：为什么是 Changesets

#### Monorepo 版本管理的挑战

**问题场景**：

- 修改了共享库 `@shared/ui`
- 哪些应用受影响？
- 应该发布什么版本？major/minor/patch？
- 如何生成 changelog？

#### Changesets 的解决方案

**核心理念**：**开发者在修改时声明变更意图**

**工作流程**：

```bash
# 1. 开发者修改代码后创建 changeset
$ pnpm changeset

? Which packages would you like to include?
  ✔ @shared/ui

? What kind of change is this?
  ○ major (破坏性变更)
  ● minor (新增功能)
  ○ patch (bug 修复)

? Please enter a summary:
  Added new Button variants: ghost and link

# 2. 生成 .changeset/xxx.md
---
"@shared/ui": minor
---

Added new Button variants: ghost and link
```

**版本更新机制**：

```bash
$ pnpm changeset version
```

Changesets 会：

1. 读取所有 `.changeset/*.md` 文件
2. 根据语义化版本规则更新 `package.json`
3. 更新依赖此包的其他包的依赖版本
4. 生成 `CHANGELOG.md`
5. 删除已消费的 changeset 文件

**本质**：Changesets 是一种**分布式的版本管理协议**，让版本升级可追溯、可预测。

---

## 第三章：架构设计原则

### 3.1 分层架构的本质

Monorepo 不是把所有代码放在一个仓库就完事了，**架构清晰度**比单仓库更重要。

#### 核心原则：单向依赖

```
┌───────────────────────────────────┐
│        应用层 (apps/)              │  ← 业务应用
└───────────────┬───────────────────┘
                ↓ 依赖
┌───────────────────────────────────┐
│        领域层 (domains/)           │  ← 垂直业务逻辑
└───────────────┬───────────────────┘
                ↓ 依赖
┌───────────────────────────────────┐
│        共享层 (shared/)            │  ← 横向通用能力
└───────────────┬───────────────────┘
                ↓ 依赖
┌───────────────────────────────────┐
│        平台层 (platform/)          │  ← 跨切面技术设施
└───────────────────────────────────┘
```

**设计意图**：

- **上层可以依赖下层**：应用可以引用领域、共享、平台
- **下层不能依赖上层**：平台不能引用应用
- **同层避免互相依赖**：两个领域之间不应直接依赖

#### 为什么要分层？

**本质原因**：**降低认知负担**

- 当你修改平台层代码时，你知道**所有上层**都可能受影响
- 当你修改应用层代码时，你知道**只有这个应用**受影响
- 依赖关系单向流动，易于理解和维护

#### 每一层的职责

**应用层（apps/）**：

- **职责**：路由、配置、组装、部署
- **不应该包含**：业务逻辑、通用组件
- **类比**：orchestrator（编排器）

**领域层（domains/）**：

- **职责**：特定业务领域的完整逻辑
- **特点**：垂直切分，高内聚低耦合
- **类比**：DDD 中的 Bounded Context

**共享层（shared/）**：

- **职责**：跨领域的通用代码
- **特点**：无业务语义，纯技术组件
- **类比**：utility library

**平台层（platform/）**：

- **职责**：跨切面的技术能力（认证、监控、配置）
- **特点**：提供基础设施，对业务透明
- **类比**：infrastructure

### 3.2 命名规范的意义

#### Package 命名的信息密度

一个好的包名应该传达：

1. **作用域（scope）**：属于哪一层
2. **领域（domain）**：属于哪个业务域
3. **功能（feature）**：提供什么能力

**推荐规范**：

```
@{layer}/{domain}-{feature}

示例：
@app/web                    ← 应用层
@domain/editor-core         ← 领域层：编辑器核心
@domain/editor-tools        ← 领域层：编辑器工具
@shared/ui                  ← 共享层：UI 组件
@platform/auth              ← 平台层：认证
```

**为什么要这样命名？**

1. **快速定位**：看名字就知道在哪一层
2. **依赖检查**：`@app/*` 不应该被 `@shared/*` 依赖
3. **工具友好**：可以基于命名规则自动生成依赖图

### 3.3 目录结构设计

```
monorepo/
├── apps/                         # 应用层
│   ├── web/                      # Web 应用
│   ├── mobile/                   # 移动应用
│   └── admin/                    # 后台管理
│
├── domains/                      # 领域层
│   ├── user/                     # 用户域
│   │   ├── api/                  # 对外接口
│   │   ├── features/             # 功能模块
│   │   ├── services/             # 领域服务
│   │   └── ui/                   # 领域 UI
│   │
│   └── product/                  # 产品域
│
├── shared/                       # 共享层
│   ├── ui/                       # UI 组件库
│   ├── utils/                    # 工具函数
│   └── hooks/                    # 通用 Hooks
│
├── platform/                     # 平台层
│   ├── config/                   # 配置预设
│   │   ├── eslint-config/
│   │   ├── tsconfig/
│   │   └── vite-config/
│   │
│   ├── monitoring/               # 监控
│   ├── auth/                     # 认证
│   └── storage/                  # 存储
│
├── tooling/                      # 工具链
│   ├── catalog-manager/          # Catalog 管理
│   └── generator/                # 代码生成器
│
├── pnpm-workspace.yaml           # Workspace 配置
├── turbo.json                    # Turbo 配置
├── package.json                  # 根配置
└── tsconfig.base.json            # TS 基础配置
```

**设计意图**：

1. **按职责而非技术栈划分**：不是 `react/`, `vue/` 而是 `domains/`, `shared/`
2. **支持嵌套包**：领域内可以有子包（如 `domains/editor/packages/*`）
3. **工具链独立**：`tooling/` 存放构建工具，与业务代码分离

---

## 第四章：搭建基础骨架

### 4.1 初始化项目的本质

#### 创建项目目录

```bash
mkdir my-monorepo && cd my-monorepo
git init
```

**为什么先初始化 Git？**

- Turborepo 的缓存键依赖 Git 历史
- 很多工具（如 Husky）需要 Git 环境

#### 配置包管理器版本

```bash
echo "packageManager=pnpm@10.24.0" > package.json
corepack enable
corepack prepare pnpm@10.24.0 --activate
```

**核心概念：Corepack**

Corepack 是 Node.js 的内置工具，用于管理包管理器版本。

**工作原理**：

1. 读取 `package.json` 中的 `packageManager` 字段
2. 自动下载并激活指定版本的 pnpm
3. 确保团队成员使用相同版本

**为什么要锁定版本？**

- pnpm 的行为在不同版本间可能有差异
- 避免 "在我机器上能跑" 的问题
- CI/CD 环境可以自动使用正确版本

### 4.2 根 package.json 的设计

```json
{
  "name": "my-monorepo",
  "version": "0.1.0",
  "private": true,

  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint"
  },

  "devDependencies": {
    "turbo": "^2.5.0",
    "@changesets/cli": "^2.29.0",
    "typescript": "^5.8.0"
  },

  "packageManager": "pnpm@10.24.0",

  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=10.0.0"
  }
}
```

**关键字段解析**：

**1. `"private": true`**

- **作用**：防止根目录被发布到 npm
- **原因**：根目录只是容器，不应该是可安装的包

**2. `scripts`**

- **设计原则**：根目录只有编排命令，不包含具体逻辑
- **工作机制**：`turbo run build` 会在所有包中查找 `build` 脚本并执行

**3. `engines`**

- **作用**：限制 Node.js 和 pnpm 版本
- **执行时机**：pnpm install 时会检查版本，不匹配则报错

### 4.3 .npmrc 配置的意义

创建 `.npmrc`：

```ini
# pnpm 存储目录（可选）
store-dir=~/.pnpm-store

# 对等依赖处理
auto-install-peers=true
dedupe-peer-dependents=true

# Hoisting 策略
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*prettier*
public-hoist-pattern[]=*typescript*

# CI 环境
frozen-lockfile=false
```

**关键配置解析**：

**1. Peer Dependencies 处理**

```ini
auto-install-peers=true
dedupe-peer-dependents=true
```

**问题场景**：

- 包 A 声明了 `peerDependencies: { "react": "^18.0.0" }`
- 你的项目安装了 `react@17.0.0`
- 默认情况下 pnpm 会警告但不会自动处理

**配置效果**：

- `auto-install-peers=true`：自动安装缺失的 peer dependencies
- `dedupe-peer-dependents=true`：去重 peer dependencies

**2. Hoisting 策略**

```ini
public-hoist-pattern[]=*eslint*
```

**为什么需要 Hoisting？**

pnpm 默认使用**非扁平化结构**，但某些工具（如 ESLint）期望在根目录的 `node_modules` 中找到插件。

**Hoisting 原理**：

- 将匹配的包提升到 `node_modules/` 根目录
- 通过符号链接指向 `.pnpm/` 中的实际位置

**3. frozen-lockfile**

```ini
frozen-lockfile=false
```

- **开发环境**：`false`，允许自动更新 lockfile
- **CI 环境**：`true`，禁止修改 lockfile（通过环境变量覆盖）

---

## 第五章：配置 pnpm Workspace

### 5.1 pnpm-workspace.yaml 的工作原理

创建 `pnpm-workspace.yaml`：

```yaml
packages:
  - 'apps/*'
  - 'domains/*'
  - 'domains/*/packages/*'
  - 'shared/*'
  - 'platform/*'
  - 'tooling/*'

  # 排除
  - '!**/__tests__/**'
  - '!**/.temp/**'
```

**核心机制：包发现**

当你运行 `pnpm install` 时，pnpm 会：

1. **扫描文件系统**：根据 glob 模式匹配目录
2. **读取 package.json**：提取包名和版本
3. **构建 workspace 映射表**：
   ```
   @app/web → apps/web
   @shared/ui → shared/ui
   @domain/editor-core → domains/editor/packages/core
   ```
4. **解析依赖**：当遇到 `workspace:*` 协议时，从映射表中查找

**支持嵌套包的原因**：

```yaml
packages:
  - 'domains/*'
  - 'domains/*/packages/*'
```

这允许领域内部有子包：

```
domains/
└── editor/
    ├── package.json           # @domain/editor
    └── packages/
        ├── core/              # @domain/editor-core
        ├── tools/             # @domain/editor-tools
        └── plugins/           # @domain/editor-plugins
```

**设计意图**：

- **垂直切分**：大型领域可以拆分成多个子包
- **独立版本**：子包可以独立发布
- **依赖管理**：子包之间可以使用 workspace 协议

### 5.2 workspace 协议的本质

#### 版本声明方式

```json
{
  "dependencies": {
    "@shared/ui": "workspace:*",
    "@shared/utils": "workspace:^",
    "@shared/hooks": "workspace:~",
    "@platform/auth": "workspace:1.2.0"
  }
}
```

**版本符号含义**：

| 符号    | 含义       | 发布时转换   |
| ------- | ---------- | ------------ |
| `*`     | 任意版本   | 当前精确版本 |
| `^`     | 兼容版本   | `^x.y.z`     |
| `~`     | patch 版本 | `~x.y.z`     |
| `x.y.z` | 精确版本   | `x.y.z`      |

**关键机制：发布时转换**

开发时：

```json
{
  "dependencies": {
    "@shared/ui": "workspace:^"
  }
}
```

发布到 npm 后：

```json
{
  "dependencies": {
    "@shared/ui": "^1.2.3"  ← 自动转换为真实版本
  }
}
```

**为什么要这样设计？**

1. **开发期**：使用本地链接，修改立即生效
2. **发布期**：转换为语义化版本，确保用户能从 npm 安装

---

## 第六章：配置 Turborepo

### 6.1 turbo.json 的核心概念

创建 `turbo.json`：

```json
{
  "$schema": "https://turbo.build/schema.json",

  "globalEnv": ["NODE_ENV"],

  "globalPassThroughEnv": ["CI", "DEBUG"],

  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"],
      "inputs": ["src/**", "package.json", "tsconfig.json", "vite.config.*"]
    },

    "dev": {
      "cache": false,
      "persistent": true
    },

    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"],
      "inputs": ["src/**", "tests/**", "**/*.test.*"]
    }
  }
}
```

### 6.2 任务依赖（dependsOn）

#### ^build 的含义

```json
{
  "build": {
    "dependsOn": ["^build"]
  }
}
```

**符号解析**：

- `^build`：上游依赖的 `build` 任务（topological dependency）
- `build`：当前包的 `build` 任务（internal dependency）

**工作原理**：

假设依赖关系：

```
@app/web (依赖) → @shared/ui (依赖) → @shared/utils
```

执行 `turbo run build` 时：

1. **构建依赖图**：

   ```
   @shared/utils:build
         ↓
   @shared/ui:build
         ↓
   @app/web:build
   ```

2. **拓扑排序**：确定执行顺序
3. **并行执行**：无依赖关系的任务并行

#### 内部依赖

```json
{
  "deploy": {
    "dependsOn": ["build", "test"]
  }
}
```

**含义**：`deploy` 任务必须等待**同一个包**的 `build` 和 `test` 完成。

### 6.3 缓存配置（outputs & inputs）

#### outputs：声明输出产物

```json
{
  "build": {
    "outputs": ["dist/**", ".next/**", "build/**"]
  }
}
```

**工作原理**：

1. **构建前**：计算缓存键
2. **构建后**：将 `outputs` 中的文件/目录打包成 tar.gz
3. **缓存命中时**：解压到对应位置

**为什么要声明 outputs？**

- Turborepo 只缓存声明的文件
- 未声明的文件不会被恢复

#### inputs：声明输入依赖

```json
{
  "build": {
    "inputs": ["src/**", "package.json", "tsconfig.json", "!src/**/*.test.*"]
  }
}
```

**缓存键计算原理**：

```
Cache Key = Hash(
  inputs 中所有文件的内容
  + 任务配置（task definition）
  + 环境变量（env）
  + 上游 outputs 的哈希
)
```

**精确定义 inputs 的重要性**：

❌ **不好的配置**：

```json
{
  "inputs": ["**"] // 包含所有文件
}
```

结果：修改 README.md 也会导致缓存失效

✅ **好的配置**：

```json
{
  "inputs": ["src/**", "package.json", "tsconfig.json", "!**/*.test.*", "!**/*.md"]
}
```

结果：只有影响构建的文件变化才失效缓存

### 6.4 环境变量策略

#### globalEnv vs globalPassThroughEnv

```json
{
  "globalEnv": ["NODE_ENV"],
  "globalPassThroughEnv": ["CI", "DEBUG"]
}
```

**区别**：

| 配置                   | 影响缓存 | 传递给任务 | 用途               |
| ---------------------- | -------- | ---------- | ------------------ |
| `globalEnv`            | ✅ 是    | ✅ 是      | 影响构建结果的变量 |
| `globalPassThroughEnv` | ❌ 否    | ✅ 是      | 不影响构建的变量   |

**为什么要区分？**

```bash
# 场景 1：改变 DEBUG 模式
DEBUG=1 turbo run build
```

- 如果 `DEBUG` 在 `globalEnv` 中 → 缓存失效 ❌
- 如果 `DEBUG` 在 `globalPassThroughEnv` 中 → 缓存命中 ✅

**设计原则**：

- `globalEnv`：只包含真正影响构建产物的变量（如 `NODE_ENV`）
- `globalPassThroughEnv`：包含调试、日志级别等变量

---

## 第七章：TypeScript 配置体系

### 7.1 tsconfig 的继承机制

TypeScript 支持配置文件继承：

```
tsconfig.base.json           # 基础配置
       ↑
       ├── packages/ui/tsconfig.json
       ├── packages/utils/tsconfig.json
       └── apps/web/tsconfig.json
```

**创建基础配置** (`tsconfig.base.json`):

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**包级配置继承**：

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

**继承的本质**：

- 子配置会**合并**父配置的字段
- 同名字段会**覆盖**父配置

### 7.2 TypeScript Project References

#### 什么是 Project References

**问题场景**：

```
@app/web 依赖 @shared/ui
```

传统方式：

1. 先编译 `@shared/ui` → 生成 `dist/`
2. 再编译 `@app/web`，引用 `@shared/ui/dist`

**问题**：

- 类型信息来自 `.d.ts` 文件，不是源码
- 无法跳转到源码
- 无法实现增量编译

#### Project References 的解决方案

**启用机制**：

`shared/ui/tsconfig.json`：

```json
{
  "compilerOptions": {
    "composite": true, // 启用项目引用
    "declaration": true, // 生成 .d.ts
    "declarationMap": true // 生成 .d.ts.map（支持跳转到源码）
  }
}
```

`apps/web/tsconfig.json`：

```json
{
  "references": [{ "path": "../../shared/ui" }]
}
```

**工作原理**：

1. **TypeScript 构建模式**：

   ```bash
   tsc --build apps/web
   ```

2. **依赖解析**：
   - TypeScript 读取 `references` 字段
   - 检查被引用项目是否已构建
   - 如果未构建或过期，先构建依赖

3. **增量编译**：
   - TypeScript 生成 `.tsbuildinfo` 文件记录编译状态
   - 下次构建时只编译变化的部分

**优势**：

- 支持 Go to Definition 跳转到源码
- 增量编译，构建速度更快
- 强制依赖顺序，避免循环引用

### 7.3 共享 tsconfig 预设

创建 `platform/config/tsconfig/package.json`：

```json
{
  "name": "@internal/tsconfig",
  "version": "0.0.0",
  "private": true,
  "files": ["base.json", "react.json", "vue.json", "node.json"]
}
```

**预设配置** (`platform/config/tsconfig/react.json`):

```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["DOM", "DOM.Iterable", "ES2020"]
  }
}
```

**使用预设**：

```json
{
  "extends": "@internal/tsconfig/react.json"
}
```

**设计意图**：

- 统一配置：所有 React 项目使用相同配置
- 易于维护：修改一处，全局生效
- 类型安全：配置本身也有类型检查（通过 `$schema`）

---

## 第八章：构建第一个共享包

### 8.1 包的基本结构

创建 `shared/ui/` 目录：

```
shared/ui/
├── src/
│   ├── components/
│   │   └── Button.tsx
│   └── index.ts
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

### 8.2 package.json 的关键字段

```json
{
  "name": "@shared/ui",
  "version": "0.1.0",
  "private": true,
  "type": "module",

  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",

  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./button": {
      "import": "./dist/button.js",
      "types": "./dist/button.d.ts"
    }
  },

  "files": ["dist"],

  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  }
}
```

**关键字段解析**：

#### 1. type: "module"

- **含义**：此包是 ES Module
- **效果**：`.js` 文件被视为 ESM，`.cjs` 被视为 CommonJS

#### 2. exports 字段

**新的模块导出标准**（Node.js 12.7+）：

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js", // ESM 入口
      "require": "./dist/index.cjs", // CJS 入口
      "types": "./dist/index.d.ts" // 类型入口
    },
    "./button": {
      "import": "./dist/button.js"
    }
  }
}
```

**工作原理**：

```typescript
// 用户代码
import { Button } from '@shared/ui'; // 使用 "." 入口
import { Button } from '@shared/ui/button'; // 使用 "./button" 入口
```

Node.js 的解析逻辑：

1. 检测用户环境（ESM 还是 CJS）
2. 查找对应的 `import` 或 `require` 字段
3. 加载对应的文件

**为什么要支持多个导出？**

- 按需加载：用户可以只导入 `button`，不加载整个库
- Tree-shaking：构建工具可以更好地优化

#### 3. files 字段

```json
{
  "files": ["dist"]
}
```

**作用**：

- 指定发布到 npm 时包含的文件
- 默认会排除 `src/`, `tests/` 等开发文件

### 8.3 构建配置：tsup

创建 `tsup.config.ts`：

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    button: 'src/components/Button.tsx',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
```

**配置解析**：

#### entry：多入口配置

```typescript
{
  entry: {
    index: 'src/index.ts',
    button: 'src/components/Button.tsx'
  }
}
```

**输出**：

```
dist/
├── index.js
├── index.cjs
├── index.d.ts
├── button.js
├── button.cjs
└── button.d.ts
```

#### format：输出格式

```typescript
{
  format: ['cjs', 'esm'];
}
```

**为什么要同时输出 CJS 和 ESM？**

- **ESM**：现代构建工具（Vite、Rollup）首选
- **CJS**：Node.js 和老工具（Webpack 4）兼容

#### dts：生成类型文件

```typescript
{
  dts: true;
}
```

**工作原理**：

- tsup 内部调用 TypeScript 编译器
- 生成 `.d.ts` 文件
- 保留源码的类型信息

#### external：外部依赖

```typescript
{
  external: ['react', 'react-dom'];
}
```

**含义**：

- 不将 `react` 打包到产物中
- 期望用户自己安装 `react`

**对应 package.json**：

```json
{
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

### 8.4 示例组件

`src/components/Button.tsx`：

```tsx
import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

`src/index.ts`：

```typescript
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';
```

### 8.5 在应用中使用

**1. 添加依赖**：

`apps/web/package.json`：

```json
{
  "dependencies": {
    "@shared/ui": "workspace:*"
  }
}
```

**2. 安装依赖**：

```bash
pnpm install
```

pnpm 会创建符号链接：

```
apps/web/node_modules/@shared/ui → ../../../shared/ui
```

**3. 使用组件**：

```tsx
import { Button } from '@shared/ui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

### 8.6 构建流程

```bash
# 从根目录执行
pnpm turbo run build
```

**Turborepo 的执行流程**：

1. **扫描 workspace**：找到所有包
2. **构建依赖图**：
   ```
   @shared/ui:build
         ↓
   @app/web:build
   ```
3. **执行任务**：
   - 先执行 `@shared/ui:build`（因为 `dependsOn: ["^build"]`）
   - 再执行 `@app/web:build`
4. **缓存结果**：保存 `dist/` 到缓存

---

## 第九章：依赖管理系统

### 9.1 Catalog 的本质

#### 问题场景

随着包数量增加，依赖版本开始碎片化：

```bash
# 查看 vue 的版本
$ pnpm list vue -r

@app/web: vue 3.4.14
@app/mobile: vue 3.4.15
@shared/ui: vue 3.4.14
@shared/hooks: vue 3.4.13
```

**问题**：

- 版本不一致可能导致类型冲突
- 手动同步版本耗时且容易出错
- 无法快速升级所有包的依赖

#### Catalog 的解决方案

**核心理念**：**集中化的版本声明**

编辑 `pnpm-workspace.yaml`：

```yaml
packages:
  - 'apps/*'
  - 'shared/*'

catalog:
  vue: ^3.4.14
  react: ^19.0.0
  typescript: ^5.8.0
  vite: ^5.4.0
  lodash-es: ^4.17.21
```

**工作原理**：

1. **集中声明**：在 workspace 配置中定义版本
2. **引用语法**：包使用 `catalog:` 协议
3. **版本分发**：pnpm 自动使用 catalog 中的版本

### 9.2 迁移到 Catalog

#### 修改子包配置

**修改前**：

```json
{
  "dependencies": {
    "vue": "^3.4.14",
    "axios": "^1.6.0"
  }
}
```

**修改后**：

```json
{
  "dependencies": {
    "vue": "catalog:",
    "axios": "catalog:"
  }
}
```

#### 批量迁移脚本

创建 `tooling/catalog-manager/` 工具：

**核心算法**：

```typescript
// 收集所有依赖及其版本
interface DependencyInfo {
  versions: Map<string, number>; // 版本 → 使用次数
  packages: Set<string>; // 使用此依赖的包
}

async function collectDependencies() {
  const allDeps = new Map<string, DependencyInfo>();

  // 1. 扫描所有 package.json
  const packagePaths = await glob('**/package.json', {
    ignore: ['**/node_modules/**'],
  });

  // 2. 收集依赖信息
  for (const pkgPath of packagePaths) {
    const pkg = JSON.parse(await readFile(pkgPath, 'utf-8'));

    for (const [name, version] of Object.entries(pkg.dependencies || {})) {
      // 跳过 workspace: 和 catalog: 协议
      if (version.startsWith('workspace:') || version.startsWith('catalog:')) {
        continue;
      }

      if (!allDeps.has(name)) {
        allDeps.set(name, {
          versions: new Map(),
          packages: new Set(),
        });
      }

      const depInfo = allDeps.get(name)!;
      const count = depInfo.versions.get(version) || 0;
      depInfo.versions.set(version, count + 1);
      depInfo.packages.add(pkg.name);
    }
  }

  // 3. 生成 catalog
  const catalog: Record<string, string> = {};

  for (const [name, depInfo] of allDeps) {
    const versions = Array.from(depInfo.versions.entries());

    if (versions.length === 1) {
      // 单一版本
      catalog[name] = versions[0][0];
    } else {
      // 版本冲突：选择最高版本
      const sorted = versions.sort((a, b) =>
        semver.compare(extractVersion(b[0]), extractVersion(a[0])),
      );
      catalog[name] = sorted[0][0];

      console.warn(`⚠️  ${name} 存在版本冲突:`);
      versions.forEach(([v, count]) => {
        console.warn(`   ${v}: ${count} 个包`);
      });
    }
  }

  return catalog;
}
```

**执行流程**：

```bash
# 1. 收集现有依赖
$ pnpm catalog:collect

⚠️  vue 存在版本冲突:
   ^3.4.15: 2 个包
   ^3.4.14: 5 个包
   ^3.4.13: 1 个包

✓ 已收集 45 个依赖到 catalog

# 2. 分发到各个包
$ pnpm catalog:distribute

✓ 更新 apps/web/package.json
✓ 更新 apps/mobile/package.json
✓ 更新 shared/ui/package.json
```

### 9.3 多版本支持：catalogs

#### 场景：Vue 2 和 Vue 3 共存

某些情况下，需要在同一个 Monorepo 中支持不同版本的依赖：

- 老项目使用 Vue 2，新项目使用 Vue 3
- 需要渐进式迁移，不能一次性升级

**解决方案：catalogs（多 catalog）**

```yaml
# pnpm-workspace.yaml
catalog:
  # 默认版本（主流技术栈）
  vue: ^3.4.14
  '@vitejs/plugin-vue': ^5.0.0
  vue-router: ^4.3.0

# 多版本 catalog
catalogs:
  # Vue 2 技术栈
  vue2:
    vue: ^2.7.14
    '@vitejs/plugin-vue2': ^2.3.0
    vue-router: ^3.6.5
    vuex: ^3.6.2

  # React 17 技术栈（兼容老项目）
  react17:
    react: ^17.0.2
    react-dom: ^17.0.2
    '@types/react': ^17.0.0
```

#### 如何使用不同的 catalog

**默认 catalog**：

```json
{
  "dependencies": {
    "vue": "catalog:"
  }
}
```

**使用特定 catalog**：

```json
{
  "dependencies": {
    "vue": "catalog:vue2"
  }
}
```

**工作原理**：

1. pnpm 解析 `catalog:vue2` 时：
2. 在 `catalogs.vue2` 中查找 `vue` 字段
3. 找到版本 `^2.7.14`
4. 安装对应版本

#### 版本隔离的本质

```
项目 A (Vue 3)             项目 B (Vue 2)
    ↓                           ↓
  catalog:                  catalog:vue2
    ↓                           ↓
  ^3.4.14                     ^2.7.14
    ↓                           ↓
node_modules/.pnpm/
├── vue@3.4.14/
└── vue@2.7.14/
```

**关键点**：

- 不同版本的包会被安装到不同的路径
- 符号链接确保每个项目使用正确的版本
- 类型系统也会正确识别版本

### 9.4 Overrides：强制版本覆盖

#### 问题场景

第三方包的子依赖版本有安全漏洞：

```
你的项目
  └── some-lib@1.0.0
        └── axios@0.21.0  ← 有安全漏洞
```

你无法直接控制 `some-lib` 的依赖版本。

#### pnpm Overrides

编辑根 `package.json`：

```json
{
  "pnpm": {
    "overrides": {
      // 1. 强制所有 axios 使用 1.7.0
      "axios": "1.7.0",

      // 2. 强制特定范围的版本升级
      "axios@<1.6.0": "1.7.0",

      // 3. 使用 catalog 中的版本
      "lodash": "$lodash",

      // 4. 针对特定包的子依赖
      "some-lib>axios": "1.7.0"
    }
  }
}
```

**工作原理**：

1. pnpm 构建依赖树时
2. 检查 `overrides` 配置
3. 匹配的依赖会被替换为指定版本
4. 即使 `some-lib` 声明了 `axios@0.21.0`，实际安装的是 `1.7.0`

**应用场景**：

- 安全漏洞修复
- 统一依赖版本
- 修复兼容性问题

---

## 第十章：构建性能优化

### 10.1 缓存命中率优化

#### 问题诊断

```bash
# 查看缓存统计
$ turbo run build --summarize

Build Summary:
  Tasks: 12
  Cache Hit: 3  ← 命中率只有 25%
  Cache Miss: 9
```

**低命中率的常见原因**：

1. inputs 定义不精确
2. 环境变量污染
3. lockfile 未纳入 inputs
4. 时间戳、随机数导致输出不一致

#### 优化策略 1：精确定义 inputs

**不好的配置**：

```json
{
  "build": {
    "inputs": ["**"] // 包含所有文件
  }
}
```

**问题**：

- 修改 README.md → 缓存失效
- 修改测试文件 → 缓存失效
- 修改配置注释 → 缓存失效

**优化后的配置**：

```json
{
  "build": {
    "inputs": [
      // ✓ 包含：影响构建结果的文件
      "src/**",
      "public/**",
      "package.json",
      "tsconfig.json",
      "vite.config.*",
      "pnpm-lock.yaml",

      // ✗ 排除：不影响构建的文件
      "!src/**/*.test.*",
      "!src/**/*.spec.*",
      "!src/**/__tests__/**",
      "!src/**/__mocks__/**",
      "!**/*.md",
      "!.vscode/**"
    ]
  }
}
```

**原理**：

- Turborepo 计算 inputs 文件的哈希值
- 只有相关文件变化才会导致缓存失效
- 文档、测试文件的修改不会影响生产构建

#### 优化策略 2：环境变量策略

**问题场景**：

```bash
# 开发者 A
$ DEBUG=1 turbo run build  # Cache Miss

# 开发者 B
$ DEBUG=0 turbo run build  # Cache Miss（应该命中！）
```

**原因分析**：

```json
{
  "build": {
    "env": ["NODE_ENV", "DEBUG", "USER", "HOME"]
  }
}
```

- `DEBUG` 变化导致缓存键不同
- 但 `DEBUG` 不影响构建产物

**优化配置**：

```json
{
  "globalEnv": [
    "NODE_ENV" // 只包含真正影响构建的变量
  ],

  "globalPassThroughEnv": ["CI", "CI_*", "DEBUG", "VERBOSE"],

  "tasks": {
    "build": {
      "env": [
        "VITE_API_URL", // 会被注入到构建产物
        "VITE_APP_VERSION" // 会影响版本号
      ],
      "passThroughEnv": [
        "DEBUG" // 传递给进程，但不影响缓存
      ]
    }
  }
}
```

**区别**：

| 配置             | 影响缓存 | 传递给进程 | 用途               |
| ---------------- | -------- | ---------- | ------------------ |
| `env`            | ✅ 是    | ✅ 是      | 影响构建产物的变量 |
| `passThroughEnv` | ❌ 否    | ✅ 是      | 调试、日志变量     |

### 10.2 远程缓存

#### 为什么需要远程缓存

**场景**：

- 开发者 A 构建了某个包
- 开发者 B 拉取代码后，需要重新构建相同的内容
- CI 环境每次都从零开始构建

**本质问题**：**缓存无法跨机器共享**

#### 远程缓存的工作原理

```
开发者 A                        远程缓存服务器                    开发者 B
   |                                  |                            |
   | 1. 构建项目                       |                            |
   |--------------------------------->|                            |
   | 2. 上传缓存（cache key + tar）    |                            |
   |                                  |                            |
   |                                  | 3. 存储缓存                |
   |                                  |                            |
   |                                  |<---------------------------|
   |                                  | 4. 查询缓存（cache key）   |
   |                                  |                            |
   |                                  |--------------------------->|
   |                                  | 5. 返回缓存                |
   |                                  |                            |
   |                                  | 6. 直接恢复，跳过构建      |
```

**缓存键计算**（保证一致性）：

```
Cache Key = Hash(
  任务配置（来自 turbo.json）
  + 输入文件内容（来自 Git）
  + 环境变量
  + 上游依赖的输出哈希
)
```

**关键**：只要代码和配置相同，所有机器计算出的缓存键都相同。

#### 配置远程缓存

**方案 1：使用 Vercel（最简单）**

```bash
# 1. 登录 Vercel
$ npx turbo login

# 2. 链接项目
$ npx turbo link
```

**方案 2：自建缓存服务器（基于 S3/OSS）**

创建简单的缓存服务：

```typescript
// tooling/cache-server/src/server.ts
import { createServer } from 'http';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({ region: 'us-east-1' });
const BUCKET = 'my-turbo-cache';

const server = createServer(async (req, res) => {
  const url = new URL(req.url!, `http://${req.headers.host}`);

  // GET /v1/artifacts/:hash - 下载缓存
  if (req.method === 'GET' && url.pathname.startsWith('/v1/artifacts/')) {
    const cacheKey = url.pathname.split('/').pop()!;

    try {
      const response = await s3.send(
        new GetObjectCommand({
          Bucket: BUCKET,
          Key: cacheKey,
        }),
      );

      res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
      response.Body?.pipe(res);
    } catch (error) {
      res.writeHead(404);
      res.end();
    }
  }

  // PUT /v1/artifacts/:hash - 上传缓存
  else if (req.method === 'PUT' && url.pathname.startsWith('/v1/artifacts/')) {
    const cacheKey = url.pathname.split('/').pop()!;
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', async () => {
      const body = Buffer.concat(chunks);

      await s3.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: cacheKey,
          Body: body,
        }),
      );

      res.writeHead(200);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
```

**配置 Turborepo**：

```bash
# 环境变量
export TURBO_API="http://localhost:3000"
export TURBO_TOKEN="your-secret-token"
export TURBO_TEAM="your-team-id"
```

`turbo.json`：

```json
{
  "remoteCache": {
    "enabled": true,
    "signature": false
  }
}
```

**使用效果**：

```bash
# 开发者 A
$ turbo run build
• @shared/ui:build (5.2s)  # 执行构建，上传缓存

# 开发者 B（10分钟后）
$ turbo run build
• @shared/ui:build (CACHED)  # 从远程缓存恢复
```

### 10.3 并行度优化

Turborepo 默认并行执行无依赖的任务，但可以调整并发数：

```bash
# 使用所有 CPU 核心
$ turbo run build --concurrency 100%

# 限制并发数（避免 OOM）
$ turbo run build --concurrency 4

# 串行执行
$ turbo run build --concurrency 1
```

**何时限制并发**：

- CI 环境资源有限
- 构建任务内存占用大
- 避免磁盘 I/O 竞争

---

## 第十一章：架构治理机制

### 11.1 Turborepo Boundaries

#### 为什么需要边界约束

**问题场景**：

```
@shared/ui 依赖 @domain/editor  ← 错误！共享层不应该依赖领域层
@domain/user 依赖 @domain/order ← 错误！领域之间不应该直接依赖
@platform/auth 依赖 @app/web    ← 错误！平台层不应该依赖应用层
```

**本质问题**：**依赖方向混乱导致架构腐化**

#### Boundaries 的解决方案

**核心理念**：**用标签（tags）标记包的层级，用规则（rules）约束依赖方向**

**步骤 1：为包添加标签**

`apps/web/turbo.json`：

```json
{
  "tags": ["app", "app:web"]
}
```

`domains/user/turbo.json`：

```json
{
  "tags": ["domain", "domain:user"]
}
```

`shared/ui/turbo.json`：

```json
{
  "tags": ["shared", "ui"]
}
```

`platform/auth/turbo.json`：

```json
{
  "tags": ["platform"]
}
```

**步骤 2：定义边界规则**

根 `turbo.json`：

```json
{
  "boundaries": {
    "tags": {
      // 应用层规则
      "app": {
        "dependencies": {
          "deny": ["app"] // 应用之间不能互相依赖
        }
      },

      // 领域层规则
      "domain": {
        "dependencies": {
          "deny": ["app", "domain"] // 不能依赖应用、不能互相依赖
        }
      },

      // 共享层规则
      "shared": {
        "dependencies": {
          "allow": ["shared", "platform"], // 只能依赖共享层和平台层
          "deny": ["domain", "app"]
        }
      },

      // 平台层规则
      "platform": {
        "dependencies": {
          "deny": ["app", "domain", "shared"] // 最底层,不依赖任何业务代码
        }
      }
    }
  }
}
```

**步骤 3：检查违规**

```bash
$ turbo boundaries

❌ Boundary violations detected:

  @shared/ui depends on @domain/editor
    - @shared/ui has tag "shared"
    - @domain/editor has tag "domain"
    - Rule: "shared" cannot depend on "domain"

  Location: shared/ui/package.json:15
```

**工作原理**：

1. Turborepo 扫描所有包的 `package.json`
2. 提取依赖关系
3. 根据标签和规则检查
4. 报告违规情况

#### 在 CI 中强制执行

`.gitlab-ci.yml`：

```yaml
lint-architecture:
  script:
    - pnpm turbo boundaries
    - if [ $? -ne 0 ]; then
      echo "Architecture boundary violations detected!"
      exit 1
      fi
```

**效果**：

- PR 中的违规依赖会被自动拒绝
- 强制团队遵守架构规则

### 11.2 代码生成器

#### 为什么需要生成器

**问题**：

- 手动创建包，步骤繁琐
- 容易遗漏配置文件
- 命名规范不统一

**解决方案**：**自动化包创建流程**

#### 实现包生成器

**创建模板**（`tooling/generator/templates/package/`）：

`package.json.hbs`：

```json
{
  "name": "{{scope}}/{{name}}",
  "version": "0.1.0",
  "private": true,
  "type": "module",

  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",

  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },

  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "vitest",
    "lint": "eslint src"
  },

  "devDependencies": {
    "@internal/tsconfig": "workspace:*",
    "@internal/eslint-config": "workspace:*",
    "tsup": "catalog:",
    "typescript": "catalog:",
    "vitest": "catalog:"
  }
}
```

`tsconfig.json.hbs`：

```json
{
  "extends": "@internal/tsconfig/base.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

**生成器脚本**（`tooling/generator/src/create-package.ts`）：

```typescript
import { mkdir, writeFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import Handlebars from 'handlebars';
import { join } from 'path';
import prompts from 'prompts';

async function createPackage() {
  // 1. 交互式输入
  const answers = await prompts([
    {
      type: 'select',
      name: 'layer',
      message: '选择层级',
      choices: [
        { title: 'App（应用层）', value: 'apps' },
        { title: 'Domain（领域层）', value: 'domains' },
        { title: 'Shared（共享层）', value: 'shared' },
        { title: 'Platform（平台层）', value: 'platform' },
      ],
    },
    {
      type: 'text',
      name: 'name',
      message: '包名（如: ui-components）',
    },
    {
      type: 'select',
      name: 'buildTool',
      message: '构建工具',
      choices: [
        { title: 'tsup（推荐）', value: 'tsup' },
        { title: 'vite', value: 'vite' },
        { title: 'rollup', value: 'rollup' },
      ],
    },
  ]);

  // 2. 生成 scope
  const scopeMap = {
    apps: '@app',
    domains: '@domain',
    shared: '@shared',
    platform: '@platform',
  };
  const scope = scopeMap[answers.layer as keyof typeof scopeMap];

  // 3. 创建目录
  const packagePath = join(answers.layer, answers.name);
  await mkdir(join(packagePath, 'src'), { recursive: true });

  // 4. 生成 package.json
  const pkgTemplate = await readFile(
    'tooling/generator/templates/package/package.json.hbs',
    'utf-8',
  );
  const compiledPkg = Handlebars.compile(pkgTemplate);
  const packageJson = compiledPkg({
    scope,
    name: answers.name,
    buildTool: answers.buildTool,
  });

  await writeFile(join(packagePath, 'package.json'), packageJson);

  // 5. 生成 tsconfig.json
  const tsconfigTemplate = await readFile(
    'tooling/generator/templates/package/tsconfig.json.hbs',
    'utf-8',
  );
  await writeFile(join(packagePath, 'tsconfig.json'), tsconfigTemplate);

  // 6. 生成入口文件
  await writeFile(join(packagePath, 'src/index.ts'), `// ${scope}/${answers.name}\nexport {}\n`);

  // 7. 生成 turbo.json（添加标签）
  const layerTag = answers.layer.replace(/s$/, ''); // apps → app
  await writeFile(
    join(packagePath, 'turbo.json'),
    JSON.stringify(
      {
        tags: [layerTag, `${layerTag}:${answers.name}`],
      },
      null,
      2,
    ),
  );

  console.log(`✓ Created ${scope}/${answers.name} at ${packagePath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. cd ${packagePath}`);
  console.log(`  2. pnpm install`);
  console.log(`  3. pnpm dev`);
}

createPackage();
```

**使用**：

```bash
# 添加到根 package.json
{
  "scripts": {
    "create:package": "tsx tooling/generator/src/create-package.ts"
  }
}

# 创建新包
$ pnpm create:package

? 选择层级 › Shared（共享层）
? 包名 › hooks
? 构建工具 › tsup（推荐）

✓ Created @shared/hooks at shared/hooks

Next steps:
  1. cd shared/hooks
  2. pnpm install
  3. pnpm dev
```

---

## 第十二章：CI/CD 集成

### 12.1 CI 环境的特殊性

#### 与本地开发的区别

| 维度     | 本地开发       | CI 环境             |
| -------- | -------------- | ------------------- |
| 缓存     | 持久化本地磁盘 | 跨 Job 需要缓存机制 |
| 依赖安装 | 增量安装       | 每次全新安装        |
| 构建     | 可能跳过测试   | 必须全流程          |
| 并发     | CPU 核心数     | 需要限制资源使用    |

#### CI 优化目标

1. **加快安装速度**：缓存 pnpm store
2. **加快构建速度**：缓存 Turbo 输出
3. **节省资源**：只构建受影响的包
4. **提前失败**：先执行快速检查（lint）

### 12.2 GitHub Actions 配置

**完整配置**（`.github/workflows/ci.yml`）：

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  PNPM_VERSION: '10.24.0'
  NODE_VERSION: '20'

jobs:
  # Job 1: 安装依赖
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Turbo 需要完整 Git 历史

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}

      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      # 缓存 pnpm store
      - name: Get pnpm store directory
        id: pnpm-cache
        run: echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - name: Setup pnpm cache
        uses: actions/cache@v3
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      # 缓存 node_modules（供后续 Job 使用）
      - name: Cache node_modules
        uses: actions/cache/save@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

  # Job 2: Lint（快速失败）
  lint:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Restore node_modules
        uses: actions/cache/restore@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

      - name: Lint
        run: pnpm turbo run lint

  # Job 3: Type Check
  type-check:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Restore node_modules
        uses: actions/cache/restore@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

      - name: Type check
        run: pnpm turbo run type-check

  # Job 4: Test（并行执行）
  test:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Restore node_modules
        uses: actions/cache/restore@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

      # 缓存 Turbo 输出
      - name: Setup Turbo cache
        uses: actions/cache@v3
        with:
          path: .turbo
          key: ${{ runner.os }}-turbo-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-turbo-

      - name: Run tests
        run: pnpm turbo run test --output-logs=new-only

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  # Job 5: Build（必须等待所有检查通过）
  build:
    needs: [lint, type-check, test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Restore node_modules
        uses: actions/cache/restore@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

      - name: Setup Turbo cache
        uses: actions/cache@v3
        with:
          path: .turbo
          key: ${{ runner.os }}-turbo-${{ github.sha }}
          restore-keys: |
            ${{ runner.os }}-turbo-

      - name: Build
        run: pnpm turbo run build --output-logs=new-only

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: |
            apps/*/dist
            packages/*/dist
          retention-days: 7

  # Job 6: Architecture Check
  architecture:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - uses: pnpm/action-setup@v2
        with:
          version: ${{ env.PNPM_VERSION }}

      - name: Restore node_modules
        uses: actions/cache/restore@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node_modules-${{ hashFiles('**/pnpm-lock.yaml') }}

      - name: Check boundaries
        run: pnpm turbo boundaries
```

**关键优化点**：

1. **并行执行**：`lint`, `type-check`, `test`, `architecture` 并行
2. **Turbo 缓存**：跨 Job 共享构建缓存
3. **pnpm 缓存**：缓存全局 store
4. **提前失败**：先执行快速检查

### 12.3 GitLab CI 配置

```yaml
variables:
  PNPM_VERSION: '10.24.0'
  NODE_VERSION: '20'
  PNPM_CACHE_FOLDER: .pnpm-store

stages:
  - install
  - check
  - test
  - build
  - deploy

cache:
  key:
    files:
      - pnpm-lock.yaml
  paths:
    - .pnpm-store
    - node_modules
    - .turbo

# 安装依赖
install:
  stage: install
  image: node:${NODE_VERSION}
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm config set store-dir .pnpm-store
    - pnpm install --frozen-lockfile
  artifacts:
    paths:
      - node_modules
      - .pnpm-store
    expire_in: 1 day

# 代码检查
lint:
  stage: check
  image: node:${NODE_VERSION}
  needs: [install]
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm turbo run lint

type-check:
  stage: check
  image: node:${NODE_VERSION}
  needs: [install]
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm turbo run type-check

architecture:
  stage: check
  image: node:${NODE_VERSION}
  needs: [install]
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm turbo boundaries

# 测试
test:
  stage: test
  image: node:${NODE_VERSION}
  needs: [install]
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm turbo run test --output-logs=new-only
  coverage: '/All files[^|]*\|[^|]*\s+([\d\.]+)/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

# 构建
build:
  stage: build
  image: node:${NODE_VERSION}
  needs: [lint, type-check, architecture, test]
  before_script:
    - corepack enable
    - corepack prepare pnpm@${PNPM_VERSION} --activate
  script:
    - pnpm turbo run build --output-logs=new-only
  artifacts:
    paths:
      - apps/*/dist
      - packages/*/dist
    expire_in: 1 week

# 部署到测试环境
deploy-staging:
  stage: deploy
  needs: [build]
  only:
    - develop
  script:
    - echo "Deploy to staging"
    # 部署逻辑

# 部署到生产环境
deploy-production:
  stage: deploy
  needs: [build]
  only:
    - main
  when: manual # 需要手动触发
  script:
    - echo "Deploy to production"
    # 部署逻辑
```

### 12.4 Changesets 自动化

#### 在 CI 中自动发布

`.github/workflows/release.yml`：

```yaml
name: Release

on:
  push:
    branches:
      - main

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'

      - uses: pnpm/action-setup@v2
        with:
          version: '10.24.0'

      - run: pnpm install --frozen-lockfile

      - name: Create Release Pull Request or Publish
        uses: changesets/action@v1
        with:
          publish: pnpm release
          version: pnpm changeset version
          commit: 'chore: release packages'
          title: 'chore: release packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

**工作流程**：

1. 开发者合并 PR 到 `main`
2. CI 检测到 `.changeset/` 中有未消费的 changesets
3. 自动创建一个 "Release PR"
4. Release PR 包含：
   - 更新后的版本号
   - 生成的 CHANGELOG.md
5. 团队 Review 后合并
6. CI 自动发布到 npm

---

## 总结

### 核心要点回顾

#### 1. Monorepo 的本质

不是简单地把代码放在一个仓库，而是：

- **统一的依赖管理**：避免版本碎片化
- **清晰的架构边界**：分层设计+依赖约束
- **高效的构建系统**：增量构建+缓存复用
- **自动化的治理**：工具强制规范

#### 2. 技术选型的逻辑

- **pnpm**：内容寻址存储 → 节省空间+严格依赖
- **Turborepo**：任务图调度 → 增量构建+并行执行
- **Catalog**：集中版本管理 → 统一升级+冲突检测
- **Boundaries**：标签+规则 → 架构约束+自动检查

#### 3. 从 0 到 1 的路径

1. **评估需求** → 确认 Monorepo 适合团队
2. **选择技术栈** → pnpm + Turbo + TypeScript
3. **设计架构** → 分层+命名规范+目录结构
4. **搭建骨架** → Workspace + Turbo + 工具链
5. **迁移首包** → 共享包 + 应用
6. **依赖管理** → Catalog + Overrides
7. **性能优化** → inputs 精确化 + 远程缓存
8. **架构治理** → Boundaries + 生成器
9. **CI/CD** → 缓存策略 + 并行执行

### 实施建议

#### 渐进式迁移

不要一次性迁移所有项目：

1. **Phase 1**：搭建基础设施，迁移工具库
2. **Phase 2**：迁移一个小型应用，验证流程
3. **Phase 3**：逐步迁移其他应用
4. **Phase 4**：优化性能，完善治理

#### 常见陷阱

❌ **过度设计**：不要一开始就搞复杂的目录结构  
✅ 从简单开始，根据需求演进

❌ **忽略 inputs**：导致缓存命中率低  
✅ 精确定义 inputs，排除无关文件

❌ **缺乏约束**：依赖关系混乱  
✅ 使用 Boundaries 强制架构规则

❌ **没有文档**：团队不知道如何使用  
✅ 编写清晰的贡献指南和最佳实践

### 下一步

- **TypeScript Project References**：提升类型检查性能
- **E2E 测试集成**：Playwright/Cypress
- **性能监控**：追踪构建时间趋势
- **RFC 流程**：重大变更的讨论机制
- **Micro Frontends**：应用层的模块化

---

**本手册基于真实项目经验总结，持续更新。**
