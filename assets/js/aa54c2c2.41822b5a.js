"use strict";(self.webpackChunk_lynkit_docs=self.webpackChunk_lynkit_docs||[]).push([[670],{6039:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>d});var t=r(8225);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}},9843:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/algorithm/exponentialBackoff","title":"\u6307\u6570\u9000\u907f\u7b97\u6cd5","description":"\u7b80\u4ecb","source":"@site/docs/api/algorithm/exponentialBackoff.md","sourceDirName":"api/algorithm","slug":"/api/algorithm/exponentialBackoff","permalink":"/LynKit/docs/api/algorithm/exponentialBackoff","draft":false,"unlisted":false,"editUrl":"https://github.com/your-org/lynkit/edit/main/docs/docs/api/algorithm/exponentialBackoff.md","tags":[],"version":"current","lastUpdatedBy":"caizhongling","lastUpdatedAt":1744362076000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"api","previous":{"title":"LRU \u7f13\u5b58","permalink":"/LynKit/docs/api/algorithm/LRU"},"next":{"title":"throttle","permalink":"/LynKit/docs/api/throttle"}}');var s=r(7557),i=r(6039);const l={sidebar_position:2},d="\u6307\u6570\u9000\u907f\u7b97\u6cd5",c={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6",id:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6",level:3},{value:"\u5728 React \u4e2d\u4f7f\u7528",id:"\u5728-react-\u4e2d\u4f7f\u7528",level:3},{value:"API \u5c5e\u6027",id:"api-\u5c5e\u6027",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u6307\u6570\u9000\u907f\u7b97\u6cd5",children:"\u6307\u6570\u9000\u907f\u7b97\u6cd5"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u6570\u9000\u907f\uff08Exponential Backoff\uff09\u662f\u4e00\u79cd\u91cd\u8bd5\u7b56\u7565\uff0c\u5f53\u64cd\u4f5c\u5931\u8d25\u65f6\uff0c\u4f1a\u6309\u7167\u6307\u6570\u589e\u957f\u7684\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u91cd\u8bd5\u3002\u6bcf\u6b21\u91cd\u8bd5\u5931\u8d25\u540e\uff0c\u7b49\u5f85\u65f6\u95f4\u4f1a\u6309\u7167\u6307\u6570\u51fd\u6570\u589e\u957f\uff08\u901a\u5e38\u662f\u4ee5 2 \u4e3a\u5e95\u6570\uff09\uff0c\u76f4\u5230\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u6216\u6700\u5927\u7b49\u5f85\u65f6\u95f4\u3002\u8fd9\u79cd\u7b56\u7565\u53ef\u4ee5\u51cf\u8f7b\u670d\u52a1\u5668\u8d1f\u8f7d\uff0c\u907f\u514d\u77ed\u65f6\u95f4\u5185\u5927\u91cf\u91cd\u8bd5\u8bf7\u6c42\u5bfc\u81f4\u7684\u7cfb\u7edf\u5d29\u6e83\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u6570\u9000\u907f\u7b97\u6cd5\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7f51\u7edc\u8bf7\u6c42\u91cd\u8bd5"}),"\uff1a\u5f53 API \u8bf7\u6c42\u5931\u8d25\u65f6\uff0c\u4f7f\u7528\u6307\u6570\u9000\u907f\u7b56\u7565\u8fdb\u884c\u91cd\u8bd5"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u8d44\u6e90\u7ade\u4e89"}),"\uff1a\u591a\u4e2a\u5ba2\u6237\u7aef\u7ade\u4e89\u540c\u4e00\u8d44\u6e90\u65f6\uff0c\u4f7f\u7528\u6307\u6570\u9000\u907f\u907f\u514d\u51b2\u7a81"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u9650\u6d41\u5904\u7406"}),"\uff1a\u5f53\u9047\u5230\u670d\u52a1\u9650\u6d41\u65f6\uff0c\u4f7f\u7528\u6307\u6570\u9000\u907f\u7b49\u5f85\u5408\u9002\u7684\u65f6\u95f4\u540e\u518d\u8bf7\u6c42"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5206\u5e03\u5f0f\u7cfb\u7edf"}),"\uff1a\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u5904\u7406\u4e34\u65f6\u6545\u969c\u548c\u7f51\u7edc\u6296\u52a8"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6d88\u606f\u961f\u5217\u91cd\u8bd5"}),"\uff1a\u5904\u7406\u6d88\u606f\u961f\u5217\u4e2d\u7684\u5931\u8d25\u6d88\u606f"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import { exponentialBackoff } from '@lynkit/api';\n\n// \u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    if (!response.ok) throw new Error('API request failed');\n    return await response.json();\n  } catch (error) {\n    console.error('Fetch error:', error);\n    throw error; // \u91cd\u65b0\u629b\u51fa\u9519\u8bef\u4ee5\u89e6\u53d1\u91cd\u8bd5\n  }\n}\n\n// \u4f7f\u7528\u6307\u6570\u9000\u907f\u7b56\u7565\u6267\u884c\u64cd\u4f5c\nexponentialBackoff(fetchData, {\n  maxRetries: 5,\n  initialDelay: 1000,\n  maxDelay: 30000,\n  factor: 2,\n  onRetry: (error, attempt) => {\n    console.log(`Retry attempt ${attempt} after error: ${error.message}`);\n  }\n})\n  .then(data => {\n    console.log('Data fetched successfully:', data);\n  })\n  .catch(error => {\n    console.error('All retries failed:', error);\n  });\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6",children:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import { exponentialBackoff } from '@lynkit/api';\n\n// \u5e26\u6709\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6\u7684\u8bf7\u6c42\nasync function fetchUserData(userId) {\n  const response = await fetch(`https://api.example.com/users/${userId}`);\n  \n  // \u8fd4\u56de\u54cd\u5e94\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u629b\u51fa\u9519\u8bef\n  return response;\n}\n\nexponentialBackoff(\n  () => fetchUserData('user123'),\n  {\n    maxRetries: 3,\n    initialDelay: 2000,\n    // \u81ea\u5b9a\u4e49\u91cd\u8bd5\u6761\u4ef6\n    shouldRetry: async (response) => {\n      // \u53ea\u6709\u5728\u670d\u52a1\u5668\u9519\u8bef (5xx) \u6216\u9650\u6d41 (429) \u65f6\u624d\u91cd\u8bd5\n      if (!response.ok) {\n        const status = response.status;\n        return status === 429 || (status >= 500 && status < 600);\n      }\n      return false; // \u5176\u4ed6\u60c5\u51b5\u4e0d\u91cd\u8bd5\n    },\n    // \u81ea\u5b9a\u4e49\u9000\u907f\u8ba1\u7b97\n    backoffCalculator: (attempt, initialDelay, factor) => {\n      // \u6dfb\u52a0\u4e00\u4e9b\u968f\u673a\u5ef6\u8fdf\uff0c\u907f\u514d\u591a\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u91cd\u8bd5\n      const jitter = Math.random() * 1000;\n      return initialDelay * Math.pow(factor, attempt) + jitter;\n    }\n  }\n)\n  .then(async (response) => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw new Error(`API error: ${response.status}`);\n    }\n  })\n  .then(data => {\n    console.log('User data:', data);\n  })\n  .catch(error => {\n    console.error('Failed to fetch user data:', error);\n  });\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5728-react-\u4e2d\u4f7f\u7528",children:"\u5728 React \u4e2d\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"import React, { useState, useEffect } from 'react';\nimport { exponentialBackoff } from '@lynkit/api';\n\nfunction DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let mounted = true;\n    \n    const fetchWithRetry = async () => {\n      try {\n        setLoading(true);\n        setError(null);\n        \n        const result = await exponentialBackoff(\n          async () => {\n            const response = await fetch(url);\n            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);\n            return response.json();\n          },\n          {\n            maxRetries: 3,\n            initialDelay: 1000,\n            onRetry: (error, attempt) => {\n              console.log(`Retrying ${url} (attempt ${attempt}): ${error.message}`);\n            }\n          }\n        );\n        \n        if (mounted) {\n          setData(result);\n        }\n      } catch (error) {\n        if (mounted) {\n          setError(error.message);\n        }\n      } finally {\n        if (mounted) {\n          setLoading(false);\n        }\n      }\n    };\n\n    fetchWithRetry();\n    \n    return () => {\n      mounted = false;\n    };\n  }, [url]);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n  if (!data) return <div>No data</div>;\n\n  return (\n    <div>\n      <h2>Data Loaded</h2>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"api-\u5c5e\u6027",children:"API \u5c5e\u6027"}),"\n",(0,s.jsx)(e.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"exponentialBackoff(operation, options)\n"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570"}),(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"operation"})}),(0,s.jsx)(e.td,{children:"Function"}),(0,s.jsx)(e.td,{children:"\u5fc5\u586b"}),(0,s.jsx)(e.td,{children:"\u9700\u8981\u6267\u884c\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u5fc5\u987b\u8fd4\u56de Promise"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"options"})}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u914d\u7f6e\u9009\u9879"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u9009\u9879"}),(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"maxRetries"})}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"initialDelay"})}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"1000"}),(0,s.jsx)(e.td,{children:"\u521d\u59cb\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"maxDelay"})}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"30000"}),(0,s.jsx)(e.td,{children:"\u6700\u5927\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"factor"})}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"\u9000\u907f\u56e0\u5b50\uff0c\u51b3\u5b9a\u7b49\u5f85\u65f6\u95f4\u7684\u589e\u957f\u901f\u7387"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"onRetry"})}),(0,s.jsx)(e.td,{children:"Function"}),(0,s.jsx)(e.td,{children:"null"}),(0,s.jsx)(e.td,{children:"\u6bcf\u6b21\u91cd\u8bd5\u524d\u8c03\u7528\u7684\u51fd\u6570\uff0c\u63a5\u6536\u9519\u8bef\u548c\u5f53\u524d\u5c1d\u8bd5\u6b21\u6570\u4f5c\u4e3a\u53c2\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"shouldRetry"})}),(0,s.jsx)(e.td,{children:"Function"}),(0,s.jsx)(e.td,{children:"(error) => true"}),(0,s.jsx)(e.td,{children:"\u51b3\u5b9a\u662f\u5426\u5e94\u8be5\u91cd\u8bd5\u7684\u51fd\u6570\uff0c\u63a5\u6536\u9519\u8bef\u6216\u64cd\u4f5c\u7ed3\u679c\u4f5c\u4e3a\u53c2\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"backoffCalculator"})}),(0,s.jsx)(e.td,{children:"Function"}),(0,s.jsx)(e.td,{children:"\u5185\u90e8\u5b9e\u73b0"}),(0,s.jsx)(e.td,{children:"\u81ea\u5b9a\u4e49\u8ba1\u7b97\u9000\u907f\u65f6\u95f4\u7684\u51fd\u6570"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Promise<any>"})}),(0,s.jsx)(e.td,{children:"\u8fd4\u56de\u64cd\u4f5c\u6210\u529f\u540e\u7684\u7ed3\u679c\uff0c\u5982\u679c\u6240\u6709\u91cd\u8bd5\u90fd\u5931\u8d25\uff0c\u5219\u62d2\u7edd Promise"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5e42\u7b49\u6027\u64cd\u4f5c"}),"\uff1a\u786e\u4fdd\u91cd\u8bd5\u7684\u64cd\u4f5c\u662f\u5e42\u7b49\u7684\uff0c\u5373\u591a\u6b21\u6267\u884c\u4e0d\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\u3002\u4f8b\u5982\uff0cPOST \u8bf7\u6c42\u53ef\u80fd\u4e0d\u9002\u5408\u7b80\u5355\u5730\u91cd\u8bd5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8d85\u65f6\u5904\u7406"}),"\uff1a\u8003\u8651\u6dfb\u52a0\u64cd\u4f5c\u8d85\u65f6\uff0c\u9632\u6b62\u5355\u6b21\u64cd\u4f5c\u8017\u65f6\u8fc7\u957f\u3002\u53ef\u4ee5\u7ed3\u5408 ",(0,s.jsx)(e.code,{children:"Promise.race()"})," \u548c\u8d85\u65f6 Promise \u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6c38\u4e45\u6027\u9519\u8bef"}),"\uff1a\u533a\u5206\u4e34\u65f6\u9519\u8bef\u548c\u6c38\u4e45\u6027\u9519\u8bef\uff0c\u5bf9\u4e8e\u6c38\u4e45\u6027\u9519\u8bef\uff08\u5982\u8ba4\u8bc1\u5931\u8d25\u3001\u8d44\u6e90\u4e0d\u5b58\u5728\uff09\u5e94\u8be5\u7acb\u5373\u5931\u8d25\u800c\u4e0d\u662f\u91cd\u8bd5\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5e76\u53d1\u63a7\u5236"}),"\uff1a\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u9000\u907f\u7b56\u7565\u53ef\u80fd\u9700\u8981\u8003\u8651\u66f4\u590d\u6742\u7684\u56e0\u7d20\uff0c\u5982\u5168\u5c40\u91cd\u8bd5\u914d\u989d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u65e5\u5fd7\u548c\u76d1\u63a7"}),"\uff1a\u8bb0\u5f55\u91cd\u8bd5\u6b21\u6570\u548c\u9519\u8bef\u4fe1\u606f\uff0c\u4ee5\u4fbf\u76d1\u63a7\u7cfb\u7edf\u5065\u5eb7\u72b6\u51b5\u548c\u8bc6\u522b\u6f5c\u5728\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5185\u5b58\u6cc4\u6f0f"}),"\uff1a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u91cd\u8bd5\u64cd\u4f5c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ed\u5305\u4e2d\u7684\u53d8\u91cf\u65e0\u6cd5\u88ab\u5783\u573e\u56de\u6536\uff0c\u6ce8\u610f\u5185\u5b58\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7528\u6237\u4f53\u9a8c"}),"\uff1a\u5bf9\u4e8e\u7528\u6237\u53ef\u89c1\u7684\u64cd\u4f5c\uff0c\u8003\u8651\u63d0\u4f9b\u9002\u5f53\u7684\u53cd\u9988\uff0c\u5982\u663e\u793a\u91cd\u8bd5\u8fdb\u5ea6\u6216\u5141\u8bb8\u7528\u6237\u53d6\u6d88\u91cd\u8bd5\u3002"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}}}]);