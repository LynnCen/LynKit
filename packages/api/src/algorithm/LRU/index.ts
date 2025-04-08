// src/core/cache/LRUCache.ts

/**
 * LRU缓存节点类
 * 实现双向链表节点
 */
export default class LRUNode<T> {
  constructor(
    public key: string,      // 缓存键
    public value: T,         // 缓存值
    public prev: LRUNode<T> | null = null,  // 前驱节点
    public next: LRUNode<T> | null = null   // 后继节点
  ) { }
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
