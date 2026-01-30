# LynKit 发布指南

本文档详细说明如何将 LynKit 的各个包发布到 npm。

## 目录

- [前置准备](#前置准备)
- [版本管理](#版本管理)
- [发布流程](#发布流程)
- [常见问题](#常见问题)
- [快速参考](#快速参考)

---

## 前置准备

### 1. npm 账户设置

#### 登录 npm

```bash
npm login
```

按提示输入用户名、密码和邮箱。登录成功后验证：

```bash
npm whoami
# 应返回你的用户名
```

#### 设置双因素认证 (2FA)

npm 要求发布 scoped 包时使用 2FA。设置步骤：

1. 访问 https://www.npmjs.com/settings/YOUR_USERNAME/tfa
2. 点击 **Enable 2FA**
3. 选择 **Authenticator App**
4. 使用 Authenticator App 扫描二维码
5. 输入 6 位验证码完成设置
6. **保存 Recovery Codes**（重要！）

> **提示**：如果使用 Microsoft Authenticator，选择 **Other** → **Scan QR code**

### 2. npm 组织

LynKit 使用 `@lynkit` scope 发布包。确保你是 [lynkit 组织](https://www.npmjs.com/org/lynkit) 的成员。

### 3. 包配置检查

每个要发布的包的 `package.json` 必须包含：

```json
{
  "name": "@lynkit/包名",
  "version": "x.x.x",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

> **注意**：不要在子包中设置 `"private": true`

---

## 版本管理

LynKit 使用 [Changesets](https://github.com/changesets/changesets) 管理版本。

### 1. 添加变更记录

当你完成一个功能或修复后：

```bash
pnpm changeset
```

交互式选择：

- 选择受影响的包（空格选择，回车确认）
- 选择版本类型：
  - `patch` - 修复 bug (0.0.x)
  - `minor` - 新功能，向后兼容 (0.x.0)
  - `major` - 破坏性变更 (x.0.0)
- 填写变更描述

这会在 `.changeset/` 目录生成一个 markdown 文件。

### 2. 查看待发布状态

```bash
pnpm changeset status
```

### 3. 更新版本号

```bash
pnpm changeset version
```

这会：

- 更新所有相关包的 `package.json` 版本号
- 更新 `CHANGELOG.md`
- 删除已处理的 changeset 文件

### 4. 提交版本变更

```bash
git add .
git commit -m "chore: version packages"
git push
```

---

## 发布流程

### 标准发布

```bash
pnpm changeset publish --otp=<验证码>
```

**OTP 格式**：
| 类型 | 格式 | 示例 |
|------|------|------|
| Authenticator App | 6 位数字 | `385721` |
| Recovery Code | 64 位十六进制 | `a43931c298e19acb...` |

### 发布后操作

```bash
# 推送 Git Tags
git push --follow-tags
```

### 验证发布结果

```bash
# 查看包信息
npm view @lynkit/api
npm view @lynkit/hooks
npm view @lynkit/ui
npm view @lynkit/icons

# 或查看所有版本
npm view @lynkit/api versions
```

---

## 常见问题

### E403 Forbidden - 需要 2FA

**错误信息**：

```
E403 403 Forbidden - Two-factor authentication required
```

**解决方案**：

```bash
pnpm changeset publish --otp=<验证码>
```

### E404 Not Found - Token 过期

**错误信息**：

```
E404 Not Found - PUT https://registry.npmjs.org/@lynkit%2fxxx
npm notice Access token expired or revoked
```

**解决方案**：

```bash
npm login  # 重新登录
pnpm changeset publish --otp=<验证码>
```

### EPRIVATE - 包标记为私有

**错误信息**：

```
npm ERR! code EPRIVATE
npm ERR! This package has been marked as private
```

**解决方案**：
删除对应 `package.json` 中的 `"private": true` 字段。

### ERR_PNPM_OUTDATED_LOCKFILE

**错误信息**：

```
ERR_PNPM_OUTDATED_LOCKFILE Cannot install with "frozen-lockfile"
```

**解决方案**：

```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "chore: update lockfile"
```

### 单个包发布失败

如果批量发布时某个包失败，可以单独发布：

```bash
cd packages/包名
npm publish --access public --otp=<验证码>
```

---

## 快速参考

### 完整发布流程

```bash
# 1. 确保代码已提交
git status

# 2. 添加变更记录
pnpm changeset

# 3. 更新版本号
pnpm changeset version

# 4. 提交版本变更
git add .
git commit -m "chore: version packages"

# 5. 构建所有包
pnpm build

# 6. 发布到 npm
pnpm changeset publish --otp=<验证码>

# 7. 推送 tags
git push --follow-tags
```

### 常用命令速查

| 命令                               | 说明             |
| ---------------------------------- | ---------------- |
| `npm login`                        | 登录 npm         |
| `npm whoami`                       | 查看当前登录用户 |
| `pnpm changeset`                   | 添加变更记录     |
| `pnpm changeset status`            | 查看待发布状态   |
| `pnpm changeset version`           | 更新版本号       |
| `pnpm changeset publish --otp=xxx` | 发布到 npm       |
| `npm view @lynkit/xxx`             | 查看包信息       |
| `npm view @lynkit/xxx versions`    | 查看所有版本     |

### 版本号规范

遵循 [Semantic Versioning](https://semver.org/)：

- **major** (x.0.0) - 不兼容的 API 变更
- **minor** (0.x.0) - 向后兼容的功能新增
- **patch** (0.0.x) - 向后兼容的问题修复

---

## 相关链接

- [npm 官网](https://www.npmjs.com/)
- [Changesets 文档](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
- [LynKit 文档](https://lynncen.github.io/LynKit/)
