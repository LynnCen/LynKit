"use strict";(self.webpackChunk_lynkit_docs=self.webpackChunk_lynkit_docs||[]).push([[184],{6039:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var t=s(8225);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}},7940:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"hooks/usePollingAI","title":"usePollingAI","description":"\u7b80\u4ecb","source":"@site/docs/hooks/usePollingAI.md","sourceDirName":"hooks","slug":"/hooks/usePollingAI","permalink":"/docs/hooks/usePollingAI","draft":false,"unlisted":false,"editUrl":"https://github.com/your-org/lynkit/edit/main/docs/docs/hooks/usePollingAI.md","tags":[],"version":"current","lastUpdatedBy":"caizhongling","lastUpdatedAt":1744362130000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"hooks","previous":{"title":"useInterval","permalink":"/docs/hooks/useInterval"}}');var r=s(7557),i=s(6039);const l={sidebar_position:8},d="usePollingAI",o={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u5904\u7406\u6d41\u5f0f\u54cd\u5e94",id:"\u5904\u7406\u6d41\u5f0f\u54cd\u5e94",level:3},{value:"\u590d\u6742\u8f6e\u8be2\u63a7\u5236",id:"\u590d\u6742\u8f6e\u8be2\u63a7\u5236",level:3},{value:"API \u5c5e\u6027",id:"api-\u5c5e\u6027",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"options \u914d\u7f6e\u5bf9\u8c61",id:"options-\u914d\u7f6e\u5bf9\u8c61",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"usepollingai",children:"usePollingAI"})}),"\n",(0,r.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"usePollingAI"})," \u662f\u4e00\u4e2a\u4e13\u95e8\u4e3a AI \u76f8\u5173\u5e94\u7528\u8bbe\u8ba1\u7684\u8f6e\u8be2 Hook\uff0c\u5b83\u4e3a\u4e0e AI \u670d\u52a1\u901a\u4fe1\u65f6\u7684\u5e38\u89c1\u6a21\u5f0f\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\u3002\u8fd9\u4e2a Hook \u4e0d\u4ec5\u5904\u7406\u5b9a\u671f\u8bf7\u6c42\uff0c\u8fd8\u7ba1\u7406\u54cd\u5e94\u72b6\u6001\u3001\u9519\u8bef\u5904\u7406\u3001\u91cd\u8bd5\u903b\u8f91\u4ee5\u53ca\u6839\u636e AI \u4efb\u52a1\u5b8c\u6210\u72b6\u6001\u81ea\u52a8\u505c\u6b62\u8f6e\u8be2\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"AI \u6a21\u578b\u8bad\u7ec3\u8fdb\u5ea6\u76d1\u63a7"}),"\n",(0,r.jsx)(e.li,{children:"\u957f\u65f6\u95f4\u8fd0\u884c\u7684 AI \u63a8\u7406\u4efb\u52a1\u72b6\u6001\u67e5\u8be2"}),"\n",(0,r.jsx)(e.li,{children:"\u5927\u8bed\u8a00\u6a21\u578b\u6d41\u5f0f\u54cd\u5e94\u83b7\u53d6"}),"\n",(0,r.jsx)(e.li,{children:"AI \u6279\u5904\u7406\u4f5c\u4e1a\u7684\u8fdb\u5ea6\u8ffd\u8e2a"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u5316 AI \u5de5\u4f5c\u6d41\u7684\u72b6\u6001\u68c0\u67e5"}),"\n",(0,r.jsx)(e.li,{children:"\u9700\u8981\u5b9a\u671f\u83b7\u53d6 AI \u751f\u6210\u7ed3\u679c\u7684\u5e94\u7528"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { usePollingAI } from '@lynkit/hooks';\n\nfunction AITaskMonitor({ taskId }) {\n  // \u8f6e\u8be2 AI \u4efb\u52a1\u72b6\u6001\n  const { data, loading, error, status } = usePollingAI({\n    pollingFunction: () => fetchTaskStatus(taskId),\n    interval: 2000,  // 2\u79d2\u8f6e\u8be2\u4e00\u6b21\n    stopCondition: (response) => response.status === 'completed' || response.status === 'failed',\n    maxRetries: 30   // \u6700\u591a\u8f6e\u8be230\u6b21\uff08\u76f8\u5f53\u4e8e60\u79d2\uff09\n  });\n  \n  if (loading && !data) return <div>Starting AI task monitoring...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n  \n  return (\n    <div>\n      <h2>AI Task Status</h2>\n      <p>Task ID: {taskId}</p>\n      <p>Status: {data?.status || 'Unknown'}</p>\n      <p>Progress: {data?.progress || 0}%</p>\n      <p>Polling status: {status}</p>\n      {data?.result && <div>Result: {data.result}</div>}\n    </div>\n  );\n}\n\n// \u6a21\u62df API \u8bf7\u6c42\u51fd\u6570\nasync function fetchTaskStatus(taskId) {\n  const response = await fetch(`/api/ai/tasks/${taskId}`);\n  if (!response.ok) throw new Error('Failed to fetch task status');\n  return response.json();\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u5904\u7406\u6d41\u5f0f\u54cd\u5e94",children:"\u5904\u7406\u6d41\u5f0f\u54cd\u5e94"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { usePollingAI } from '@lynkit/hooks';\n\nfunction AIStreamingResponse({ promptId }) {\n  const [messages, setMessages] = useState([]);\n  \n  // \u8f6e\u8be2\u83b7\u53d6\u6d41\u5f0f\u751f\u6210\u7684 AI \u54cd\u5e94\n  const { data, loading, error, status } = usePollingAI({\n    pollingFunction: () => fetchStreamProgress(promptId),\n    interval: 1000,\n    stopCondition: (response) => response.isComplete,\n    onSuccess: (response) => {\n      // \u5c06\u65b0\u7684\u6d88\u606f\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\n      if (response.chunks && response.chunks.length > 0) {\n        setMessages(prev => [...prev, ...response.chunks]);\n      }\n    },\n    retryOnError: true,\n    maxRetries: 60,  // \u6700\u591a\u8f6e\u8be21\u5206\u949f\n  });\n  \n  return (\n    <div>\n      <h2>AI Response</h2>\n      <div className=\"message-container\" style={{ minHeight: '200px', border: '1px solid #ccc', padding: '10px' }}>\n        {messages.length > 0 ? (\n          messages.map((chunk, index) => (\n            <span key={index}>{chunk}</span>\n          ))\n        ) : (\n          <p>{loading ? 'AI is thinking...' : 'No response yet'}</p>\n        )}\n      </div>\n      \n      {error && <p className=\"error\">Error: {error.message}</p>}\n      \n      <div className=\"status\">\n        <p>Status: {status}</p>\n        {data?.isComplete && <p>Response complete!</p>}\n      </div>\n    </div>\n  );\n}\n\n// \u6a21\u62df\u83b7\u53d6\u6d41\u5f0f\u54cd\u5e94\nasync function fetchStreamProgress(promptId) {\n  const response = await fetch(`/api/ai/stream/${promptId}`);\n  if (!response.ok) throw new Error('Failed to fetch stream data');\n  return response.json();\n  // \u8fd4\u56de\u793a\u4f8b: { chunks: ['Hello', ', how', ' can I', ' help you?'], isComplete: false }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u590d\u6742\u8f6e\u8be2\u63a7\u5236",children:"\u590d\u6742\u8f6e\u8be2\u63a7\u5236"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { useState, useCallback } from 'react';\nimport { usePollingAI } from '@lynkit/hooks';\n\nfunction AIModelTraining() {\n  const [modelId, setModelId] = useState(null);\n  const [trainingParams, setTrainingParams] = useState({\n    epochs: 10,\n    batchSize: 32,\n    learningRate: 0.001\n  });\n  \n  // \u542f\u52a8\u8bad\u7ec3\u4efb\u52a1\n  const startTraining = async () => {\n    try {\n      const response = await fetch('/api/ai/train', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(trainingParams)\n      });\n      const data = await response.json();\n      setModelId(data.modelId);\n    } catch (error) {\n      console.error('Failed to start training:', error);\n    }\n  };\n  \n  // \u68c0\u67e5\u8bad\u7ec3\u72b6\u6001\u7684\u51fd\u6570\n  const checkTrainingStatus = useCallback(async () => {\n    if (!modelId) return null;\n    const response = await fetch(`/api/ai/train/${modelId}/status`);\n    if (!response.ok) throw new Error('Failed to fetch training status');\n    return response.json();\n  }, [modelId]);\n  \n  // \u4f7f\u7528 usePollingAI \u76d1\u63a7\u8bad\u7ec3\u8fdb\u5ea6\n  const { \n    data: trainingStatus, \n    loading, \n    error, \n    status,\n    startPolling,\n    stopPolling,\n    resetPolling\n  } = usePollingAI({\n    pollingFunction: checkTrainingStatus,\n    interval: 5000,  // 5\u79d2\u8f6e\u8be2\u4e00\u6b21\n    stopCondition: (data) => data?.status === 'completed' || data?.status === 'failed',\n    maxRetries: 100,  // \u6700\u591a\u8f6e\u8be2500\u79d2\n    startImmediately: false,  // \u4e0d\u81ea\u52a8\u5f00\u59cb\u8f6e\u8be2\uff0c\u7b49\u5f85\u624b\u52a8\u89e6\u53d1\n    retryOnError: true,\n    onSuccess: (data) => {\n      console.log('Training progress update:', data);\n    },\n    onComplete: (finalData) => {\n      console.log('Training completed with result:', finalData);\n    }\n  });\n  \n  // \u5f53 modelId \u53d8\u5316\u4e14\u6709\u6548\u65f6\u81ea\u52a8\u5f00\u59cb\u8f6e\u8be2\n  useEffect(() => {\n    if (modelId) {\n      startPolling();\n    } else {\n      stopPolling();\n      resetPolling();\n    }\n  }, [modelId, startPolling, stopPolling, resetPolling]);\n  \n  return (\n    <div>\n      <h2>AI Model Training</h2>\n      \n      <div className=\"training-params\">\n        <h3>Training Parameters</h3>\n        <div>\n          <label>\n            Epochs:\n            <input \n              type=\"number\" \n              value={trainingParams.epochs}\n              onChange={(e) => setTrainingParams(prev => ({ ...prev, epochs: Number(e.target.value) }))}\n              min=\"1\"\n            />\n          </label>\n        </div>\n        <div>\n          <label>\n            Batch Size:\n            <input \n              type=\"number\" \n              value={trainingParams.batchSize}\n              onChange={(e) => setTrainingParams(prev => ({ ...prev, batchSize: Number(e.target.value) }))}\n              min=\"1\"\n            />\n          </label>\n        </div>\n        <div>\n          <label>\n            Learning Rate:\n            <input \n              type=\"number\" \n              value={trainingParams.learningRate}\n              onChange={(e) => setTrainingParams(prev => ({ ...prev, learningRate: Number(e.target.value) }))}\n              step=\"0.001\"\n              min=\"0.0001\"\n            />\n          </label>\n        </div>\n      </div>\n      \n      <div className=\"actions\">\n        <button onClick={startTraining} disabled={loading || modelId}>\n          Start Training\n        </button>\n        <button onClick={stopPolling} disabled={!loading || !modelId}>\n          Stop Monitoring\n        </button>\n        <button onClick={startPolling} disabled={loading || !modelId}>\n          Resume Monitoring\n        </button>\n      </div>\n      \n      <div className=\"training-status\">\n        <h3>Training Status</h3>\n        {!modelId && <p>No active training session</p>}\n        {loading && <p>Monitoring training progress...</p>}\n        {error && <p className=\"error\">Error: {error.message}</p>}\n        \n        {trainingStatus && (\n          <div>\n            <p>Model ID: {modelId}</p>\n            <p>Status: {trainingStatus.status}</p>\n            <p>Progress: {trainingStatus.progress}%</p>\n            <p>Current Epoch: {trainingStatus.currentEpoch} / {trainingStatus.totalEpochs}</p>\n            <p>Loss: {trainingStatus.loss}</p>\n            <p>Accuracy: {trainingStatus.accuracy}</p>\n            <p>Polling Status: {status}</p>\n            \n            {trainingStatus.status === 'completed' && (\n              <div className=\"training-complete\">\n                <h4>Training Complete!</h4>\n                <p>Final Accuracy: {trainingStatus.accuracy}</p>\n                <p>Training Time: {trainingStatus.trainingTime} seconds</p>\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"api-\u5c5e\u6027",children:"API \u5c5e\u6027"}),"\n",(0,r.jsx)(e.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"const {\n  data,\n  loading,\n  error,\n  status,\n  startPolling,\n  stopPolling,\n  resetPolling,\n  retryCount\n} = usePollingAI(options);\n"})}),"\n",(0,r.jsx)(e.h4,{id:"options-\u914d\u7f6e\u5bf9\u8c61",children:"options \u914d\u7f6e\u5bf9\u8c61"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u9009\u9879"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"pollingFunction"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"\u5fc5\u586b"}),(0,r.jsx)(e.td,{children:"\u8981\u5b9a\u671f\u6267\u884c\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u8fd4\u56de Promise"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"interval"})}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"3000"}),(0,r.jsx)(e.td,{children:"\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\uff08\u6beb\u79d2\uff09"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"startImmediately"})}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"\u662f\u5426\u5728 Hook \u6302\u8f7d\u540e\u7acb\u5373\u5f00\u59cb\u8f6e\u8be2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"stopCondition"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"\u5224\u65ad\u4f55\u65f6\u505c\u6b62\u8f6e\u8be2\u7684\u51fd\u6570\uff0c\u63a5\u6536\u8f6e\u8be2\u54cd\u5e94\u4f5c\u4e3a\u53c2\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"maxRetries"})}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"10"}),(0,r.jsx)(e.td,{children:"\u6700\u5927\u8f6e\u8be2\u6b21\u6570\uff0c\u8fbe\u5230\u540e\u505c\u6b62"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"retryOnError"})}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"\u53d1\u751f\u9519\u8bef\u65f6\u662f\u5426\u7ee7\u7eed\u8f6e\u8be2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"onSuccess"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"\u6bcf\u6b21\u6210\u529f\u8f6e\u8be2\u540e\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"onError"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"\u8f6e\u8be2\u53d1\u751f\u9519\u8bef\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"onComplete"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"\u8f6e\u8be2\u5b8c\u6210\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\uff08\u505c\u6b62\u6761\u4ef6\u6ee1\u8db3\u6216\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff09"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"data"})}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"\u6700\u8fd1\u4e00\u6b21\u6210\u529f\u8f6e\u8be2\u7684\u6570\u636e"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"loading"})}),(0,r.jsx)(e.td,{children:"boolean"}),(0,r.jsx)(e.td,{children:"\u8f6e\u8be2\u662f\u5426\u6b63\u5728\u8fdb\u884c\u4e2d"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"error"})}),(0,r.jsx)(e.td,{children:"Error | null"}),(0,r.jsx)(e.td,{children:"\u6700\u8fd1\u4e00\u6b21\u8f6e\u8be2\u7684\u9519\u8bef\uff0c\u5982\u679c\u6709\u7684\u8bdd"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"status"})}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{children:"\u8f6e\u8be2\u72b6\u6001\uff1a'idle'\u3001'polling'\u3001'completed'\u3001'stopped'\u3001'failed'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"startPolling"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"\u5f00\u59cb\u6216\u6062\u590d\u8f6e\u8be2\u7684\u51fd\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"stopPolling"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"\u6682\u505c\u8f6e\u8be2\u7684\u51fd\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"resetPolling"})}),(0,r.jsx)(e.td,{children:"Function"}),(0,r.jsx)(e.td,{children:"\u91cd\u7f6e\u8f6e\u8be2\u72b6\u6001\u7684\u51fd\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"retryCount"})}),(0,r.jsx)(e.td,{children:"number"}),(0,r.jsx)(e.td,{children:"\u5f53\u524d\u5df2\u8fdb\u884c\u7684\u8f6e\u8be2\u6b21\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8f6e\u8be2\u95f4\u9694"}),"\uff1a\u8bbe\u7f6e\u5408\u9002\u7684\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\uff0c\u907f\u514d\u5bf9 API \u670d\u52a1\u9020\u6210\u8fc7\u5927\u538b\u529b\u3002\u5bf9\u4e8e AI \u670d\u52a1\uff0c\u901a\u5e38\u63a8\u8350\u81f3\u5c11 1-5 \u79d2\u7684\u95f4\u9694\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u505c\u6b62\u6761\u4ef6"}),"\uff1a\u5b9a\u4e49\u660e\u786e\u7684\u505c\u6b62\u6761\u4ef6\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8f6e\u8be2\u6d6a\u8d39\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u9519\u8bef\u5904\u7406"}),"\uff1a\u6839\u636e AI \u670d\u52a1\u7684\u7279\u6027\uff0c\u51b3\u5b9a\u662f\u5426\u5728\u51fa\u9519\u65f6\u7ee7\u7eed\u8f6e\u8be2\u3002\u67d0\u4e9b\u4e34\u65f6\u9519\u8bef\u53ef\u80fd\u53ea\u9700\u91cd\u8bd5\u5373\u53ef\u89e3\u51b3\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7ec4\u4ef6\u5378\u8f7d"}),"\uff1aHook \u4f1a\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u81ea\u52a8\u6e05\u9664\u8f6e\u8be2\uff0c\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8f6e\u8be2\u72b6\u6001\u7ba1\u7406"}),"\uff1a\u4f7f\u7528\u8fd4\u56de\u7684\u72b6\u6001\u63a7\u5236\u51fd\u6570\uff08",(0,r.jsx)(e.code,{children:"startPolling"}),"\u3001",(0,r.jsx)(e.code,{children:"stopPolling"}),"\u3001",(0,r.jsx)(e.code,{children:"resetPolling"}),"\uff09\u6765\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u63a7\u5236\u8f6e\u8be2\u884c\u4e3a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5e76\u53d1\u9650\u5236"}),"\uff1a\u6ce8\u610f AI \u670d\u52a1\u53ef\u80fd\u6709 API \u8bf7\u6c42\u9891\u7387\u9650\u5236\uff0c\u8c03\u6574\u8f6e\u8be2\u95f4\u9694\u4ee5\u7b26\u5408\u8fd9\u4e9b\u9650\u5236\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u54cd\u5e94\u5f0f\u8f6e\u8be2\u95f4\u9694"}),"\uff1a\u5bf9\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684 AI \u4efb\u52a1\uff0c\u53ef\u4ee5\u8003\u8651\u5b9e\u73b0\u54cd\u5e94\u5f0f\u8f6e\u8be2\u95f4\u9694\uff0c\u521a\u5f00\u59cb\u95f4\u9694\u77ed\uff0c\u968f\u7740\u65f6\u95f4\u63a8\u79fb\u9010\u6e10\u589e\u52a0\u95f4\u9694\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}}}]);