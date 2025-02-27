import React, { FC, useState } from 'react'
// 引入需要调试的组件
import { Button } from '../packages/ui/src'
import { IconHome } from '../packages/icons/src'
import Input from '../packages/ui/src/Input'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="demo-container">
      <h1>组件预览</h1>
    </div>
  )
}

const Test: FC<{ name: string }> = ({ name }) => {
  return <div>Test{name}</div>
}

export default App
