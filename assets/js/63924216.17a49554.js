"use strict";(self.webpackChunk_lynkit_docs=self.webpackChunk_lynkit_docs||[]).push([[328],{6039:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var d=s(8225);const l={},c=d.createContext(l);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),d.createElement(c.Provider,{value:n},e.children)}},6552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"api/debounce","title":"debounce","description":"\u7b80\u4ecb","source":"@site/docs/api/debounce.md","sourceDirName":"api","slug":"/api/debounce","permalink":"/LynKit/docs/api/debounce","draft":false,"unlisted":false,"editUrl":"https://github.com/your-org/lynkit/edit/main/docs/docs/api/debounce.md","tags":[],"version":"current","lastUpdatedBy":"caizhongling","lastUpdatedAt":1744362056000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"api","previous":{"title":"throttle","permalink":"/LynKit/docs/api/throttle"}}');var l=s(7557),c=s(6039);const i={sidebar_position:1},r="debounce",t={},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u5728 React \u4e2d\u4f7f\u7528",id:"\u5728-react-\u4e2d\u4f7f\u7528",level:3},{value:"\u5e26\u53d6\u6d88\u529f\u80fd",id:"\u5e26\u53d6\u6d88\u529f\u80fd",level:3},{value:"API \u5c5e\u6027",id:"api-\u5c5e\u6027",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"debounce",children:"debounce"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"debounce"})," \u662f\u4e00\u4e2a\u9632\u6296\u51fd\u6570\uff0c\u7528\u4e8e\u9650\u5236\u51fd\u6570\u7684\u6267\u884c\u9891\u7387\u3002\u5f53\u4e8b\u4ef6\u9891\u7e41\u89e6\u53d1\u65f6\uff0c\u9632\u6296\u51fd\u6570\u4f1a\u5728\u6700\u540e\u4e00\u6b21\u4e8b\u4ef6\u89e6\u53d1\u540e\u7684\u6307\u5b9a\u65f6\u95f4\u540e\u624d\u6267\u884c\u56de\u8c03\u51fd\u6570\uff0c\u5ffd\u7565\u524d\u9762\u7684\u6240\u6709\u8c03\u7528\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,l.jsx)(n.p,{children:"\u9632\u6296\u51fd\u6570\u5e38\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u641c\u7d22\u6846\u8f93\u5165"}),"\uff1a\u7528\u6237\u8f93\u5165\u65f6\uff0c\u7b49\u7528\u6237\u505c\u6b62\u8f93\u5165\u540e\u518d\u53d1\u9001\u8bf7\u6c42"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7a97\u53e3\u8c03\u6574"}),"\uff1a\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6539\u53d8\u65f6\uff0c\u7b49\u8c03\u6574\u5b8c\u6210\u540e\u518d\u6267\u884c\u56de\u8c03"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6309\u94ae\u63d0\u4ea4"}),"\uff1a\u9632\u6b62\u7528\u6237\u591a\u6b21\u70b9\u51fb\u63d0\u4ea4\u6309\u94ae"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6eda\u52a8\u4e8b\u4ef6"}),"\uff1a\u4f18\u5316\u6eda\u52a8\u65f6\u7684\u6027\u80fd"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8868\u5355\u9a8c\u8bc1"}),"\uff1a\u7528\u6237\u8f93\u5165\u540e\u5ef6\u8fdf\u9a8c\u8bc1"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { debounce } from '@lynkit/api';\n\n// \u57fa\u7840\u9632\u6296\u51fd\u6570\nconst handleSearch = debounce((searchTerm) => {\n  console.log(`\u641c\u7d22\uff1a${searchTerm}`);\n  // \u53d1\u9001 API \u8bf7\u6c42\n}, 300);\n\n// \u5728\u8f93\u5165\u6846\u4e2d\u4f7f\u7528\nsearchInput.addEventListener('input', (e) => {\n  handleSearch(e.target.value);\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5728-react-\u4e2d\u4f7f\u7528",children:"\u5728 React \u4e2d\u4f7f\u7528"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"import React, { useState, useCallback } from 'react';\nimport { debounce } from '@lynkit/api';\n\nfunction SearchBar() {\n  const [results, setResults] = useState([]);\n  \n  // \u4f7f\u7528 useCallback \u786e\u4fdd\u9632\u6296\u51fd\u6570\u4e0d\u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u91cd\u65b0\u521b\u5efa\n  const debouncedSearch = useCallback(\n    debounce(async (term) => {\n      const data = await fetchSearchResults(term);\n      setResults(data);\n    }, 300),\n    []\n  );\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        onChange={(e) => debouncedSearch(e.target.value)} \n        placeholder=\"\u641c\u7d22...\" \n      />\n      {/* \u663e\u793a\u7ed3\u679c */}\n    </div>\n  );\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5e26\u53d6\u6d88\u529f\u80fd",children:"\u5e26\u53d6\u6d88\u529f\u80fd"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { debounce } from '@lynkit/api';\n\nconst debouncedFn = debounce(() => {\n  console.log('\u6267\u884c\u64cd\u4f5c');\n}, 300);\n\n// \u89e6\u53d1\u64cd\u4f5c\nbutton.addEventListener('click', debouncedFn);\n\n// \u5728\u9002\u5f53\u7684\u65f6\u5019\u53d6\u6d88\ncancelButton.addEventListener('click', () => {\n  debouncedFn.cancel();\n});\n"})}),"\n",(0,l.jsx)(n.h2,{id:"api-\u5c5e\u6027",children:"API \u5c5e\u6027"}),"\n",(0,l.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53c2\u6570"}),(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,l.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"func"})}),(0,l.jsx)(n.td,{children:"Function"}),(0,l.jsx)(n.td,{children:"\u5fc5\u586b"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u9632\u6296\u7684\u51fd\u6570"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"wait"})}),(0,l.jsx)(n.td,{children:"number"}),(0,l.jsx)(n.td,{children:"\u5fc5\u586b"}),(0,l.jsx)(n.td,{children:"\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"immediate"})}),(0,l.jsx)(n.td,{children:"boolean"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"\u662f\u5426\u5728\u89e6\u53d1\u4e8b\u4ef6\u540e\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u4e4b\u540e\u7684\u4e8b\u4ef6\u5219\u5728\u7b49\u5f85\u65f6\u95f4\u7ed3\u675f\u540e\u624d\u6267\u884c"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Function"}),(0,l.jsx)(n.td,{children:"\u5305\u88c5\u540e\u7684\u9632\u6296\u51fd\u6570\uff0c\u5177\u6709\u4e0e\u539f\u51fd\u6570\u76f8\u540c\u7684\u53c2\u6570"})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u65b9\u6cd5\u540d"}),(0,l.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"cancel()"})}),(0,l.jsx)(n.td,{children:"\u53d6\u6d88\u5ef6\u8fdf\u7684\u51fd\u6570\u8c03\u7528"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"flush()"})}),(0,l.jsx)(n.td,{children:"\u7acb\u5373\u6267\u884c\u5ef6\u8fdf\u7684\u51fd\u6570\u8c03\u7528"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u95ed\u5305\u4e0e\u5185\u5b58"}),"\uff1a\u9632\u6296\u51fd\u6570\u4f1a\u521b\u5efa\u95ed\u5305\uff0c\u957f\u65f6\u95f4\u6301\u6709\u5bf9\u5916\u90e8\u53d8\u91cf\u7684\u5f15\u7528\uff0c\u53ef\u80fd\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"this \u6307\u5411"}),"\uff1a\u5728\u4f7f\u7528\u9632\u6296\u51fd\u6570\u65f6\uff0c\u9700\u8981\u6ce8\u610f ",(0,l.jsx)(n.code,{children:"this"})," \u7684\u7ed1\u5b9a\u95ee\u9898\u3002\u5728\u7c7b\u65b9\u6cd5\u6216\u7ec4\u4ef6\u65b9\u6cd5\u4e2d\u4f7f\u7528\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u7ed1\u5b9a ",(0,l.jsx)(n.code,{children:"this"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"React \u4e2d\u7684\u4f7f\u7528"}),"\uff1a\u5728 React \u7ec4\u4ef6\u4e2d\uff0c\u5efa\u8bae\u7ed3\u5408 ",(0,l.jsx)(n.code,{children:"useCallback"})," \u4f7f\u7528\u9632\u6296\u51fd\u6570\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u521b\u5efa\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\u503c\u5904\u7406"}),"\uff1a\u9632\u6296\u51fd\u6570\u4f1a\u5ef6\u8fdf\u6267\u884c\uff0c\u56e0\u6b64\u4e0d\u80fd\u76f4\u63a5\u83b7\u53d6\u539f\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\u5982\u679c\u9700\u8981\u5904\u7406\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u6216 Promise\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u5408\u9002\u7684\u5ef6\u8fdf\u65f6\u95f4"}),"\uff1a\u6839\u636e\u4e0d\u540c\u573a\u666f\u9009\u62e9\u5408\u9002\u7684\u5ef6\u8fdf\u65f6\u95f4\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u641c\u7d22\u6846\u8f93\u5165\uff1a300-500ms"}),"\n",(0,l.jsx)(n.li,{children:"\u7a97\u53e3\u8c03\u6574\uff1a100-200ms"}),"\n",(0,l.jsx)(n.li,{children:"\u6309\u94ae\u70b9\u51fb\uff1a200-300ms"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);