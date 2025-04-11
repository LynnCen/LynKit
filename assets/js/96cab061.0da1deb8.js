"use strict";(self.webpackChunk_lynkit_docs=self.webpackChunk_lynkit_docs||[]).push([[355],{4460:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"hooks/useIsFirstRender","title":"useIsFirstRender","description":"\u7b80\u4ecb","source":"@site/docs/hooks/useIsFirstRender.md","sourceDirName":"hooks","slug":"/hooks/useIsFirstRender","permalink":"/LynKit/docs/hooks/useIsFirstRender","draft":false,"unlisted":false,"editUrl":"https://github.com/your-org/lynkit/edit/main/docs/docs/hooks/useIsFirstRender.md","tags":[],"version":"current","lastUpdatedBy":"caizhongling","lastUpdatedAt":1744362130000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"hooks","previous":{"title":"usePrevious","permalink":"/LynKit/docs/hooks/usePrevious"},"next":{"title":"useInterval","permalink":"/LynKit/docs/hooks/useInterval"}}');var t=s(7557),i=s(6039);const o={sidebar_position:6},d="useIsFirstRender",l={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\u7684\u526f\u4f5c\u7528",id:"\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\u7684\u526f\u4f5c\u7528",level:3},{value:"\u4e0e\u81ea\u5b9a\u4e49 Hook \u7ed3\u5408\u4f7f\u7528",id:"\u4e0e\u81ea\u5b9a\u4e49-hook-\u7ed3\u5408\u4f7f\u7528",level:3},{value:"API \u5c5e\u6027",id:"api-\u5c5e\u6027",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"useisfirstrender",children:"useIsFirstRender"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useIsFirstRender"})," \u662f\u4e00\u4e2a\u7b80\u5355\u800c\u5b9e\u7528\u7684\u81ea\u5b9a\u4e49 Hook\uff0c\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u662f\u5426\u662f\u7ec4\u4ef6\u7684\u9996\u6b21\u6e32\u67d3\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5728\u7ec4\u4ef6\u7684\u7b2c\u4e00\u6b21\u6e32\u67d3\u4e2d\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"true"}),"\uff0c\u4e4b\u540e\u7684\u6240\u6709\u6e32\u67d3\u4e2d\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u6267\u884c\u7279\u5b9a\u903b\u8f91\uff0c\u540e\u7eed\u6e32\u67d3\u65f6\u907f\u514d\u6267\u884c"}),"\n",(0,t.jsx)(n.li,{children:"\u533a\u5206\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u548c\u66f4\u65b0\u9636\u6bb5"}),"\n",(0,t.jsx)(n.li,{children:"\u4f18\u5316\u6027\u80fd\uff0c\u907f\u514d\u5728\u6bcf\u6b21\u66f4\u65b0\u65f6\u6267\u884c\u6602\u8d35\u7684\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u73b0\u53ea\u5728\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u663e\u793a\u7684\u5f15\u5bfc\u6216\u63d0\u793a"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0e\u5176\u4ed6 Hook \u7ed3\u5408\u4f7f\u7528\uff0c\u4e3a\u5b83\u4eec\u63d0\u4f9b\u6e32\u67d3\u4e0a\u4e0b\u6587"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { useIsFirstRender } from '@lynkit/hooks';\n\nfunction ComponentWithInitialEffect() {\n  const isFirstRender = useIsFirstRender();\n  const [count, setCount] = useState(0);\n  \n  console.log(`Is first render: ${isFirstRender}`);\n  \n  // \u9996\u6b21\u6e32\u67d3\u65f6\u6267\u884c\u4e00\u4e9b\u7279\u5b9a\u903b\u8f91\n  if (isFirstRender) {\n    console.log('This is the first render of the component');\n    // \u521d\u59cb\u5316\u903b\u8f91\uff0c\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\n  }\n  \n  return (\n    <div>\n      <p>Check console to see render information</p>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\u7684\u526f\u4f5c\u7528",children:"\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\u7684\u526f\u4f5c\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react';\nimport { useIsFirstRender } from '@lynkit/hooks';\n\nfunction DataSyncComponent({ id }) {\n  const [data, setData] = useState(null);\n  const isFirstRender = useIsFirstRender();\n  \n  // \u5f53 id \u6539\u53d8\u65f6\u540c\u6b65\u6570\u636e\uff0c\u4f46\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\n  useEffect(() => {\n    if (isFirstRender) {\n      // \u9996\u6b21\u6e32\u67d3\u65f6\u6267\u884c\u521d\u59cb\u5316\u903b\u8f91\n      console.log('Initializing component with id:', id);\n      fetchInitialData(id).then(setData);\n    } else {\n      // \u540e\u7eed\u6e32\u67d3\u65f6\uff0c\u5f53 id \u53d8\u5316\u65f6\u540c\u6b65\u6570\u636e\n      console.log('Id changed, syncing data for new id:', id);\n      synchronizeData(id).then(setData);\n    }\n  }, [id, isFirstRender]);\n  \n  return (\n    <div>\n      <p>Current ID: {id}</p>\n      <p>Data: {data ? JSON.stringify(data) : 'Loading...'}</p>\n    </div>\n  );\n}\n\n// \u6a21\u62df\u51fd\u6570\nfunction fetchInitialData(id) {\n  return Promise.resolve({ id, status: 'initial' });\n}\n\nfunction synchronizeData(id) {\n  return Promise.resolve({ id, status: 'synced' });\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0e\u81ea\u5b9a\u4e49-hook-\u7ed3\u5408\u4f7f\u7528",children:"\u4e0e\u81ea\u5b9a\u4e49 Hook \u7ed3\u5408\u4f7f\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useState } from 'react';\nimport { useIsFirstRender, useUpdateEffect } from '@lynkit/hooks';\n\nfunction Forms() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: '',\n    message: ''\n  });\n  \n  const isFirstRender = useIsFirstRender();\n  \n  // \u8868\u5355\u9a8c\u8bc1\uff0c\u8df3\u8fc7\u9996\u6b21\u6e32\u67d3\n  useUpdateEffect(() => {\n    // \u8fd9\u662f\u4f7f\u7528 useUpdateEffect \u7684\u53e6\u4e00\u79cd\u66ff\u4ee3\u65b9\u5f0f\n    validateForm(formData);\n  }, [formData]);\n  \n  // \u6216\u8005\u4f7f\u7528 isFirstRender \u624b\u52a8\u63a7\u5236\n  const [errors, setErrors] = useState({});\n  \n  useEffect(() => {\n    if (!isFirstRender) {\n      const validationErrors = validateForm(formData);\n      setErrors(validationErrors);\n    }\n  }, [formData, isFirstRender]);\n  \n  const validateForm = (data) => {\n    const errors = {};\n    if (!data.name) errors.name = 'Name is required';\n    if (!data.email) errors.email = 'Email is required';\n    // \u66f4\u591a\u9a8c\u8bc1\u903b\u8f91...\n    return errors;\n  };\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n  };\n  \n  return (\n    <div>\n      <div>\n        <label>Name:</label>\n        <input \n          type=\"text\" \n          name=\"name\" \n          value={formData.name} \n          onChange={handleChange} \n        />\n        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}\n      </div>\n      \n      <div>\n        <label>Email:</label>\n        <input \n          type=\"email\" \n          name=\"email\" \n          value={formData.email} \n          onChange={handleChange} \n        />\n        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}\n      </div>\n      \n      <div>\n        <label>Message:</label>\n        <textarea \n          name=\"message\" \n          value={formData.message} \n          onChange={handleChange} \n        />\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api-\u5c5e\u6027",children:"API \u5c5e\u6027"}),"\n",(0,t.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const isFirstRender = useIsFirstRender();\n"})}),"\n",(0,t.jsx)(n.p,{children:"useIsFirstRender \u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isFirstRender"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"\u5982\u679c\u662f\u7ec4\u4ef6\u7684\u9996\u6b21\u6e32\u67d3\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u72b6\u6001\u4fdd\u5b58"}),"\uff1a\u8be5 Hook \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"useRef"})," \u5185\u90e8\u4fdd\u5b58\u6e32\u67d3\u72b6\u6001\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4e0e useEffect \u7684\u533a\u522b"}),"\uff1a\u4e0e ",(0,t.jsx)(n.code,{children:"useEffect"})," \u4f9d\u8d56\u6570\u7ec4\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0d\u540c\uff0c",(0,t.jsx)(n.code,{children:"useIsFirstRender"})," \u4f7f\u60a8\u80fd\u591f\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u4e3b\u4f53\u4e2d\u8bbf\u95ee\u6b64\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6761\u4ef6\u6e32\u67d3"}),"\uff1a\u53ef\u4ee5\u7528\u4e8e\u6761\u4ef6\u6e32\u67d3\u903b\u8f91\uff0c\u4f46\u5e94\u907f\u514d\u5728\u6e32\u67d3\u51fd\u6570\u4e2d\u8fc7\u5ea6\u4f9d\u8d56\u6b64\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u7ec4\u4ef6\u91cd\u6302\u8f7d"}),"\uff1a\u5982\u679c\u7ec4\u4ef6\u88ab\u5378\u8f7d\u7136\u540e\u91cd\u65b0\u6302\u8f7d\uff0c",(0,t.jsx)(n.code,{children:"useIsFirstRender"})," \u4f1a\u91cd\u65b0\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"true"}),"\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Hook \u89c4\u5219"}),"\uff1a\u9075\u5faa React Hooks \u7684\u4f7f\u7528\u89c4\u5219\uff0c\u4e0d\u8981\u5728\u5faa\u73af\u3001\u6761\u4ef6\u8bed\u53e5\u6216\u5d4c\u5957\u51fd\u6570\u4e2d\u8c03\u7528\u6b64 Hook\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4e0e\u5176\u4ed6\u6e32\u67d3\u5224\u65ad Hook \u7684\u7ed3\u5408"}),"\uff1a\u53ef\u4ee5\u4e0e ",(0,t.jsx)(n.code,{children:"useUpdateEffect"})," \u7b49 Hook \u7ed3\u5408\u4f7f\u7528\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u6e32\u67d3\u63a7\u5236\u903b\u8f91\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6039:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(8225);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);