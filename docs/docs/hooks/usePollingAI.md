---
sidebar_position: 8
---

# usePollingAI

## 简介

`usePollingAI` 是一个专门为 AI 相关应用设计的轮询 Hook，它为与 AI 服务通信时的常见模式提供了解决方案。这个 Hook 不仅处理定期请求，还管理响应状态、错误处理、重试逻辑以及根据 AI 任务完成状态自动停止轮询。

## 使用场景

- AI 模型训练进度监控
- 长时间运行的 AI 推理任务状态查询
- 大语言模型流式响应获取
- AI 批处理作业的进度追踪
- 自动化 AI 工作流的状态检查
- 需要定期获取 AI 生成结果的应用

## 使用示例

### 基本用法

```jsx
import { useState } from 'react';
import { usePollingAI } from '@lynkit/hooks';

function AITaskMonitor({ taskId }) {
  // 轮询 AI 任务状态
  const { data, loading, error, status } = usePollingAI({
    pollingFunction: () => fetchTaskStatus(taskId),
    interval: 2000,  // 2秒轮询一次
    stopCondition: (response) => response.status === 'completed' || response.status === 'failed',
    maxRetries: 30   // 最多轮询30次（相当于60秒）
  });
  
  if (loading && !data) return <div>Starting AI task monitoring...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>AI Task Status</h2>
      <p>Task ID: {taskId}</p>
      <p>Status: {data?.status || 'Unknown'}</p>
      <p>Progress: {data?.progress || 0}%</p>
      <p>Polling status: {status}</p>
      {data?.result && <div>Result: {data.result}</div>}
    </div>
  );
}

// 模拟 API 请求函数
async function fetchTaskStatus(taskId) {
  const response = await fetch(`/api/ai/tasks/${taskId}`);
  if (!response.ok) throw new Error('Failed to fetch task status');
  return response.json();
}
```

### 处理流式响应

```jsx
import { useState } from 'react';
import { usePollingAI } from '@lynkit/hooks';

function AIStreamingResponse({ promptId }) {
  const [messages, setMessages] = useState([]);
  
  // 轮询获取流式生成的 AI 响应
  const { data, loading, error, status } = usePollingAI({
    pollingFunction: () => fetchStreamProgress(promptId),
    interval: 1000,
    stopCondition: (response) => response.isComplete,
    onSuccess: (response) => {
      // 将新的消息添加到列表中
      if (response.chunks && response.chunks.length > 0) {
        setMessages(prev => [...prev, ...response.chunks]);
      }
    },
    retryOnError: true,
    maxRetries: 60,  // 最多轮询1分钟
  });
  
  return (
    <div>
      <h2>AI Response</h2>
      <div className="message-container" style={{ minHeight: '200px', border: '1px solid #ccc', padding: '10px' }}>
        {messages.length > 0 ? (
          messages.map((chunk, index) => (
            <span key={index}>{chunk}</span>
          ))
        ) : (
          <p>{loading ? 'AI is thinking...' : 'No response yet'}</p>
        )}
      </div>
      
      {error && <p className="error">Error: {error.message}</p>}
      
      <div className="status">
        <p>Status: {status}</p>
        {data?.isComplete && <p>Response complete!</p>}
      </div>
    </div>
  );
}

// 模拟获取流式响应
async function fetchStreamProgress(promptId) {
  const response = await fetch(`/api/ai/stream/${promptId}`);
  if (!response.ok) throw new Error('Failed to fetch stream data');
  return response.json();
  // 返回示例: { chunks: ['Hello', ', how', ' can I', ' help you?'], isComplete: false }
}
```

### 复杂轮询控制

```jsx
import { useState, useCallback } from 'react';
import { usePollingAI } from '@lynkit/hooks';

function AIModelTraining() {
  const [modelId, setModelId] = useState(null);
  const [trainingParams, setTrainingParams] = useState({
    epochs: 10,
    batchSize: 32,
    learningRate: 0.001
  });
  
  // 启动训练任务
  const startTraining = async () => {
    try {
      const response = await fetch('/api/ai/train', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trainingParams)
      });
      const data = await response.json();
      setModelId(data.modelId);
    } catch (error) {
      console.error('Failed to start training:', error);
    }
  };
  
  // 检查训练状态的函数
  const checkTrainingStatus = useCallback(async () => {
    if (!modelId) return null;
    const response = await fetch(`/api/ai/train/${modelId}/status`);
    if (!response.ok) throw new Error('Failed to fetch training status');
    return response.json();
  }, [modelId]);
  
  // 使用 usePollingAI 监控训练进度
  const { 
    data: trainingStatus, 
    loading, 
    error, 
    status,
    startPolling,
    stopPolling,
    resetPolling
  } = usePollingAI({
    pollingFunction: checkTrainingStatus,
    interval: 5000,  // 5秒轮询一次
    stopCondition: (data) => data?.status === 'completed' || data?.status === 'failed',
    maxRetries: 100,  // 最多轮询500秒
    startImmediately: false,  // 不自动开始轮询，等待手动触发
    retryOnError: true,
    onSuccess: (data) => {
      console.log('Training progress update:', data);
    },
    onComplete: (finalData) => {
      console.log('Training completed with result:', finalData);
    }
  });
  
  // 当 modelId 变化且有效时自动开始轮询
  useEffect(() => {
    if (modelId) {
      startPolling();
    } else {
      stopPolling();
      resetPolling();
    }
  }, [modelId, startPolling, stopPolling, resetPolling]);
  
  return (
    <div>
      <h2>AI Model Training</h2>
      
      <div className="training-params">
        <h3>Training Parameters</h3>
        <div>
          <label>
            Epochs:
            <input 
              type="number" 
              value={trainingParams.epochs}
              onChange={(e) => setTrainingParams(prev => ({ ...prev, epochs: Number(e.target.value) }))}
              min="1"
            />
          </label>
        </div>
        <div>
          <label>
            Batch Size:
            <input 
              type="number" 
              value={trainingParams.batchSize}
              onChange={(e) => setTrainingParams(prev => ({ ...prev, batchSize: Number(e.target.value) }))}
              min="1"
            />
          </label>
        </div>
        <div>
          <label>
            Learning Rate:
            <input 
              type="number" 
              value={trainingParams.learningRate}
              onChange={(e) => setTrainingParams(prev => ({ ...prev, learningRate: Number(e.target.value) }))}
              step="0.001"
              min="0.0001"
            />
          </label>
        </div>
      </div>
      
      <div className="actions">
        <button onClick={startTraining} disabled={loading || modelId}>
          Start Training
        </button>
        <button onClick={stopPolling} disabled={!loading || !modelId}>
          Stop Monitoring
        </button>
        <button onClick={startPolling} disabled={loading || !modelId}>
          Resume Monitoring
        </button>
      </div>
      
      <div className="training-status">
        <h3>Training Status</h3>
        {!modelId && <p>No active training session</p>}
        {loading && <p>Monitoring training progress...</p>}
        {error && <p className="error">Error: {error.message}</p>}
        
        {trainingStatus && (
          <div>
            <p>Model ID: {modelId}</p>
            <p>Status: {trainingStatus.status}</p>
            <p>Progress: {trainingStatus.progress}%</p>
            <p>Current Epoch: {trainingStatus.currentEpoch} / {trainingStatus.totalEpochs}</p>
            <p>Loss: {trainingStatus.loss}</p>
            <p>Accuracy: {trainingStatus.accuracy}</p>
            <p>Polling Status: {status}</p>
            
            {trainingStatus.status === 'completed' && (
              <div className="training-complete">
                <h4>Training Complete!</h4>
                <p>Final Accuracy: {trainingStatus.accuracy}</p>
                <p>Training Time: {trainingStatus.trainingTime} seconds</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

## API 属性

### 参数

```jsx
const {
  data,
  loading,
  error,
  status,
  startPolling,
  stopPolling,
  resetPolling,
  retryCount
} = usePollingAI(options);
```

#### options 配置对象

| 选项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `pollingFunction` | Function | 必填 | 要定期执行的异步函数，返回 Promise |
| `interval` | number | 3000 | 轮询间隔时间（毫秒） |
| `startImmediately` | boolean | true | 是否在 Hook 挂载后立即开始轮询 |
| `stopCondition` | Function | null | 判断何时停止轮询的函数，接收轮询响应作为参数 |
| `maxRetries` | number | 10 | 最大轮询次数，达到后停止 |
| `retryOnError` | boolean | false | 发生错误时是否继续轮询 |
| `onSuccess` | Function | null | 每次成功轮询后调用的回调函数 |
| `onError` | Function | null | 轮询发生错误时调用的回调函数 |
| `onComplete` | Function | null | 轮询完成时调用的回调函数（停止条件满足或达到最大重试次数） |

### 返回值

| 返回值 | 类型 | 描述 |
| --- | --- | --- |
| `data` | any | 最近一次成功轮询的数据 |
| `loading` | boolean | 轮询是否正在进行中 |
| `error` | Error \| null | 最近一次轮询的错误，如果有的话 |
| `status` | string | 轮询状态：'idle'、'polling'、'completed'、'stopped'、'failed' |
| `startPolling` | Function | 开始或恢复轮询的函数 |
| `stopPolling` | Function | 暂停轮询的函数 |
| `resetPolling` | Function | 重置轮询状态的函数 |
| `retryCount` | number | 当前已进行的轮询次数 |

## 注意事项

1. **轮询间隔**：设置合适的轮询间隔时间，避免对 API 服务造成过大压力。对于 AI 服务，通常推荐至少 1-5 秒的间隔。

2. **停止条件**：定义明确的停止条件，避免不必要的轮询浪费资源。

3. **错误处理**：根据 AI 服务的特性，决定是否在出错时继续轮询。某些临时错误可能只需重试即可解决。

4. **组件卸载**：Hook 会在组件卸载时自动清除轮询，防止内存泄漏。

5. **轮询状态管理**：使用返回的状态控制函数（`startPolling`、`stopPolling`、`resetPolling`）来根据业务需求控制轮询行为。

6. **并发限制**：注意 AI 服务可能有 API 请求频率限制，调整轮询间隔以符合这些限制。

7. **响应式轮询间隔**：对于长时间运行的 AI 任务，可以考虑实现响应式轮询间隔，刚开始间隔短，随着时间推移逐渐增加间隔。 