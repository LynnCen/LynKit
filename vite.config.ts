
import { defineConfig } from 'vite';
import alias from './alias';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import commonjs from 'vite-plugin-commonjs';
export default defineConfig({
  server: {
    // 在 Vite 中配置服务器的 host 为 0.0.0.0 是为了使开发服务器能够绑定到所有可用的网络接口。这种配置可以让其他设备通过网络访问你的开发服务器。
    // 0.0.0.0: 这是一个特殊的 IP 地址，表示所有 IPv4 地址。如果将服务器绑定到 0.0.0.0，意味着服务器将监听本机上的所有网络接口，包括本地环回接口、以太网接口、Wi-Fi 接口等
    // 典型用途
    //局域网访问: 当你的开发机器和其他设备（如手机、平板或其他电脑）在同一局域网内时，设置 host: '0.0.0.0' 能让这些设备访问本机的开发服务器。这对于在不同设备上测试响应式设计或多设备兼容性非常有用。
    // 多设备调试: 通过绑定到 0.0.0.0，你可以使用本机的局域网 IP 地址，例如 192.168.1.10: 3000 来访问开发服务器。这对于需要在同一网络下的多个设备上同时调试和测试应用程序时非常方便。
    host: '0.0.0.0',
    port: 3001,

  },

  resolve: {
    // 路径简化 将 ../../components/Button 简化为 @/components/Button
    alias
  },
  plugins: [
    babel({
      babelConfig: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        babelrc: false,
        configFile: false,
        plugins: ['babel-plugin-transform-jsx-condition'],
        exclude: ['node_modules/**'],
      },
      filter: /\.tsx?$/,
    }),
    react(),
    commonjs()
  ]

})