# LynKit

A modern React component library designed for building elegant and efficient user interfaces. It provides rich UI components, practical Hooks, API utilities, and an icon system to help developers quickly build professional applications.

## Features

- 🎨 **Beautiful Design** - Following modern design principles, components are both aesthetic and user-friendly
- 📦 **Ready to Use** - No complex configuration required, works right out of the box
- 🛠️ **Highly Customizable** - Supports theme customization, style overrides, and feature extensions
- 📝 **Comprehensive Documentation** - Complete documentation with example code
- 🔧 **TypeScript Support** - Full type definitions for excellent developer experience
- 🧩 **Modular Architecture** - Import only what you need to reduce bundle size
- 🔄 **Actively Maintained** - Regular updates to ensure compatibility and security

## Tech Stack

LynKit is built with:

- **React** - Leveraging the latest React features including Hooks and Context
- **TypeScript** - Complete type definitions for enhanced code quality
- **Vite** - Fast build tooling for development and production
- **Turborepo** - Efficient monorepo management

## Installation

```bash
# Using npm
npm install @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api

# Using yarn
yarn add @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api

# Using pnpm
pnpm add @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api
```

You can also install individual packages:

```bash
npm install @lynkit/ui     # UI components only
npm install @lynkit/hooks  # React hooks only
npm install @lynkit/api    # API utilities only
npm install @lynkit/icons  # Icons only
```

## Quick Start

### Basic Example

```jsx
import { Button } from '@lynkit/ui';
import { useSetState } from '@lynkit/hooks';
import { Iconhome } from '@lynkit/icons';

function App() {
  const [state, setState] = useSetState({
    count: 0,
    loading: false,
  });

  const handleClick = () => {
    setState({ loading: true });

    setTimeout(() => {
      setState({
        count: state.count + 1,
        loading: false,
      });
    }, 1000);
  };

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <Button type="primary" loading={state.loading} onClick={handleClick}>
        <Iconhome /> Increment
      </Button>
    </div>
  );
}
```

### Modular Usage

LynKit uses modular design - import only what you need:

```jsx
// Import specific components
import { Button, Input } from '@lynkit/ui';
import { useSetState, useInterval } from '@lynkit/hooks';
import { debounce, throttle } from '@lynkit/api';
import { Iconhome, Iconsearch } from '@lynkit/icons';
```

## Packages

| Package                           | Description            | Version                                            |
| --------------------------------- | ---------------------- | -------------------------------------------------- |
| [@lynkit/ui](./packages/ui)       | React UI Components    | ![npm](https://img.shields.io/npm/v/@lynkit/ui)    |
| [@lynkit/hooks](./packages/hooks) | React Hooks Collection | ![npm](https://img.shields.io/npm/v/@lynkit/hooks) |
| [@lynkit/api](./packages/api)     | API Utilities          | ![npm](https://img.shields.io/npm/v/@lynkit/api)   |
| [@lynkit/icons](./packages/icons) | 1000+ SVG Icons        | ![npm](https://img.shields.io/npm/v/@lynkit/icons) |

## Requirements

- React >= 16.8.0 (Hooks support required)
- Node.js >= 18

## Browser Support

LynKit supports all modern browsers:

| Browser    | Version |
| ---------- | ------- |
| Edge       | >= 91   |
| Firefox    | >= 78   |
| Chrome     | >= 90   |
| Safari     | >= 14   |
| iOS Safari | >= 14.4 |

## 📚 Documentation

| Resource                                         | Description                             |
| ------------------------------------------------ | --------------------------------------- |
| [Online Docs](https://lynncen.github.io/LynKit/) | Complete API documentation and examples |
| [Architecture Guide](./docs/ARCHITECTURE.md)     | Monorepo architecture and configuration |
| [Monorepo Tutorial](./docs/MONOREPO_TUTORIAL.md) | Deep dive into monorepo concepts        |

### Package Documentation

| Package       | Links                                                                                 |
| ------------- | ------------------------------------------------------------------------------------- |
| @lynkit/ui    | [README](./packages/ui/README.md) · [Development Guide](./packages/ui/DEVELOPMENT.md) |
| @lynkit/hooks | [README](./packages/hooks/README.md)                                                  |
| @lynkit/api   | [README](./packages/api/README.md)                                                    |
| @lynkit/icons | [README](./packages/icons/README.md)                                                  |

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/LynnCen/LynKit/blob/main/CONTRIBUTING.md) for details.

## License

LynKit is [MIT licensed](https://github.com/LynnCen/LynKit/blob/main/LICENSE).
