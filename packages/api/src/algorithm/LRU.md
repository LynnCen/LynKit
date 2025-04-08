# LRU 缓存机制深度解析



## 核心概念
**LRU（Least Recently Used）** 是一种基于访问时效性的缓存淘汰策略，其核心思想是"最近被访问的数据更有可能被再次使用"。在前端性能优化中，LRU 常被用于管理内存缓存、API 响应缓存等场景，通过空间换时间的方式提升应用性能。

## 设计规范
实现一个生产级 LRU 缓存需要满足以下要求：

| 功能要求                | 技术指标                     |
|-----------------------|---------------------------|
| 容量限制               | 固定长度缓存池               |
| 数据获取               | `get(key)` → 值/-1         |
| 数据更新               | `put(key, value)`          |
| 淘汰机制               | 自动淘汰最久未访问条目         |
| 时间复杂度             | O(1) 复杂度操作             |

## 实现原理
### 数据结构选择
采用 **哈希表 + 双向链表** 的复合结构：
- **哈希表**：提供 O(1) 的键值查询能力
- **双向链表**：维护访问时序，头部是最新访问节点，尾部是最久未访问节点

### 具体实现

```ts
// src/core/cache/LRUCache.ts

/**
 * LRU缓存节点类
 * 实现双向链表节点
 */
class LRUNode<T> {
  constructor(
    public key: string,      // 缓存键
    public value: T,         // 缓存值
    public prev: LRUNode<T> | null = null,  // 前驱节点
    public next: LRUNode<T> | null = null   // 后继节点
  ) {}
}

/**
 * LRU (Least Recently Used) 缓存实现
 * 使用双向链表 + HashMap实现
 * 
 * @example
 * // 创建容量为2的缓存
 * const cache = new LRUCache<string>(2);
 * 
 * // 添加缓存项
 * cache.put("1", "one");   // 缓存: ["1"]
 * cache.put("2", "two");   // 缓存: ["2", "1"]
 * cache.put("3", "three"); // 缓存: ["3", "2"], "1"被移除
 * 
 * // 获取缓存项
 * cache.get("2");          // 返回: "two", 缓存: ["2", "3"]
 * cache.get("1");          // 返回: undefined (已被移除)
 */
export class LRUCache<T> {
  // 使用Map存储key到节点的映射
  private cache: Map<string, LRUNode<T>>;
  // 双向链表的头节点(哨兵节点)
  private head: LRUNode<T>;
  // 双向链表的尾节点(哨兵节点)
  private tail: LRUNode<T>;
  
  /**
   * 构造函数
   * @param capacity 缓存容量
   */
  constructor(private capacity: number) {
    this.cache = new Map();
    // 创建头尾哨兵节点
    this.head = new LRUNode<T>("head", null as any);
    this.tail = new LRUNode<T>("tail", null as any);
    // 初始化双向链表
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 获取缓存项
   * 如果项存在，将其移动到链表头部(最近使用)
   * 
   * @param key 缓存键
   * @returns 缓存值或undefined(不存在时)
   * 
   * @example
   * const cache = new LRUCache<string>(2);
   * cache.put("1", "one");
   * cache.put("2", "two");
   * cache.get("1"); // 返回 "one", 并将"1"移到最前
   */
  get(key: string): T | undefined {
    const node = this.cache.get(key);
    if (node) {
      // 移动到头部(标记为最近使用)
      this.removeNode(node);
      this.addToFront(node);
      return node.value;
    }
    return undefined;
  }

  /**
   * 添加或更新缓存项
   * 如果键已存在，更新值并移动到头部
   * 如果键不存在，添加新节点到头部
   * 如果超出容量，移除最久未使用的节点(尾部)
   * 
   * @param key 缓存键
   * @param value 缓存值
   * 
   * @example
   * const cache = new LRUCache<string>(2);
   * cache.put("1", "one");   // 缓存: ["1"]
   * cache.put("2", "two");   // 缓存: ["2", "1"]
   * cache.put("1", "ONE");   // 缓存: ["1", "2"], 更新"1"的值
   * cache.put("3", "three"); // 缓存: ["3", "1"], "2"被移除
   */
  put(key: string, value: T): void {
    const existingNode = this.cache.get(key);
    if (existingNode) {
      // 更新已存在节点
      existingNode.value = value;
      this.removeNode(existingNode);
      this.addToFront(existingNode);
    } else {
      // 添加新节点
      const newNode = new LRUNode(key, value);
      
      // 如果达到容量上限，删除最久未使用的节点(尾部)
      if (this.cache.size >= this.capacity) {
        const lastNode = this.tail.prev!;
        this.removeNode(lastNode);
        this.cache.delete(lastNode.key);
      }
      
      // 添加新节点到缓存和链表头部
      this.cache.set(key, newNode);
      this.addToFront(newNode);
    }
  }

  /**
   * 从双向链表中移除节点
   * @param node 要移除的节点
   * 
   * @private
   */
  private removeNode(node: LRUNode<T>): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  /**
   * 将节点添加到链表头部
   * @param node 要添加的节点
   * 
   * @private
   */
  private addToFront(node: LRUNode<T>): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  /**
   * 获取当前缓存大小
   * @returns 当前缓存项数量
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * 清空缓存
   */
  clear(): void {
    this.cache.clear();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 检查键是否存在
   * @param key 缓存键
   * @returns 是否存在
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }
}

```

### 测试用例

```ts
// 使用示例:
function example() {
  // 创建容量为2的缓存
  const cache = new LRUCache<string>(2);

  // 添加缓存项
  cache.put("1", "one");   // 缓存: ["1"]
  cache.put("2", "two");   // 缓存: ["2", "1"]
  
  // 访问已存在的项
  console.log(cache.get("1")); // 输出: "one", 缓存: ["1", "2"]
  
  // 添加新项，导致淘汰最久未使用的项
  cache.put("3", "three"); // 缓存: ["3", "1"], "2"被淘汰
  
  // 验证淘汰
  console.log(cache.get("2")); // 输出: undefined
  
  // 更新已存在的项
  cache.put("1", "ONE");   // 缓存: ["1", "3"], 更新值
  
  // 检查缓存状态
  console.log(cache.has("1")); // 输出: true
  console.log(cache.size());   // 输出: 2
  
  // 清空缓存
  cache.clear();
  console.log(cache.size());   // 输出: 0
}
```



## 应用场景全景

### 前端工程领域
1. **API 响应缓存**
   - 缓存高频接口数据（如用户信息、配置数据）
   - 典型实现：Axios 拦截器 + LRU 缓存策略
   - 优势：减少网络请求，提升首屏加载速度

2. **资源文件缓存**
   - 管理图片/字体等静态资源缓存
   - 示例：Next.js 图片组件的内存缓存策略
   - 淘汰策略：当内存占用超过阈值时淘汰最久未用资源

3. **框架级缓存**
   - Vue 的 keep-alive 组件缓存
   - React Query 的查询结果缓存
   - 实现特点：组件树级别的缓存生命周期管理

4. **构建工具优化**
   - Webpack 的模块缓存（5.x+ 的 filesystem cache）
   - Babel 的编译结果缓存
   - 效果：提升二次构建速度 40%+

### 操作系统领域
1. **虚拟内存管理**
   - 页面置换算法（Page Replacement）
   - 典型场景：物理内存不足时置换最久未访问的页面
   - 实现变种：Clock 算法（近似 LRU）

2. 文件系统缓存
   - Linux 的 Page Cache 管理
   - Windows 的 Standby List 缓存
   - 淘汰策略：当内存压力增大时优先释放冷数据

3. 进程调度优化
   - 缓存最近使用的进程上下文信息
   - 快速恢复高频访问进程状态

### 计算机体系结构
1. **CPU 缓存层级**
   - L1/L2 缓存行替换策略
   - 现代处理器常用：伪 LRU（PLRU）
   - 性能影响：缓存命中率直接影响 IPC

2. **TLB 快表管理**
   - 地址转换缓存（Translation Lookaside Buffer）
   - 淘汰策略：维护最近使用的页表项

3. **存储控制器缓存**
   - 磁盘读写缓存管理
   - RAID 控制器的缓存算法
   - 关键指标：提升 IOPS 20-30%

### 数据库系统
1. **InnoDB Buffer Pool**
   - 管理数据页的内存缓存
   - 配置参数：innodb_buffer_pool_size
   - 监控指标：Buffer Pool Hit Rate

2. **查询结果缓存**
   - MySQL Query Cache
   - Redis 的键淘汰策略
   - 注意事项：数据一致性维护

## 横向对比
| 领域       | 实现特点             | 典型容量  | 性能指标         |
| ---------- | -------------------- | --------- | ---------------- |
| 前端缓存   | 内存级轻量实现       | 10-1000项 | 命中率 >85%      |
| 操作系统   | 硬件辅助的近似实现   | 4KB/page  | 纳秒级访问       |
| CPU架构    | 电路级并行实现       | 64B/line  | 时钟周期级别处理 |
| 数据库系统 | 持久化兼容的混合策略 | GB-TB级   | 微秒级响应       |

## 工程实践建议
1. **容量规划**
   - 前端：根据设备内存按层级划分（移动端 50-100，PC端 200-500）
   - 服务端：不超过 JVM 堆内存 30%（Java）或进程内存 50%（Node.js）

2. **监控指标**
  
   ```ts
   interface CacheMetrics {
     hitRate: number;      // 缓存命中率
     avgAccessTime: number; // 平均访问耗时
     evictionCount: number; // 淘汰次数
     memoryUsage: number;   // 内存占用
   }
   ```

