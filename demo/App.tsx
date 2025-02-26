import React, { useState } from 'react'
// 引入需要调试的组件
import { Button } from '../packages/ui/src'
import { IconHome } from '../packages/icons/src'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="demo-container">
      <h1>组件预览</h1>

      <section>
        <h2>UI 组件</h2>
        <Button onClick={() => alert('clicked')}>点击我</Button>
      </section>

      <section>
        <h2>Hook 演示</h2>
        <div>
          <p>Count: {count}</p>
          <Button onClick={increment}>+</Button>
          <Button onClick={decrement}>-</Button>
        </div>
      </section>

      <section>
        <h2>API 调用</h2>
        <Button onClick={() => {}}>调用 API</Button>
      </section>
    </div>
  )
}

export default App
