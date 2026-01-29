/**
 * LRU 缓存节点
 */
class LRUNode<T> {
  constructor(
    public key: string,
    public value: T,
    public prev: LRUNode<T> | null = null,
    public next: LRUNode<T> | null = null
  ) {}
}

/**
 * LRU (Least Recently Used) 缓存
 *
 * 使用双向链表 + HashMap 实现 O(1) 的读写操作
 *
 * @example
 * ```ts
 * const cache = new LRUCache<string>(3);
 *
 * cache.set('a', 'A');
 * cache.set('b', 'B');
 * cache.set('c', 'C');
 *
 * cache.get('a');        // 'A'，a 移到最前
 * cache.set('d', 'D');   // 淘汰 b（最久未使用）
 *
 * cache.has('b');        // false
 * cache.size;            // 3
 * ```
 */
export class LRUCache<T> {
  private cache: Map<string, LRUNode<T>>;
  private head: LRUNode<T>;
  private tail: LRUNode<T>;
  private readonly maxSize: number;

  /**
   * 创建 LRU 缓存
   * @param capacity - 缓存容量
   */
  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Capacity must be greater than 0');
    }
    this.maxSize = capacity;
    this.cache = new Map();
    this.head = new LRUNode<T>('__head__', null as T);
    this.tail = new LRUNode<T>('__tail__', null as T);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * 获取缓存值
   * @param key - 缓存键
   * @returns 缓存值，不存在返回 undefined
   */
  get(key: string): T | undefined {
    const node = this.cache.get(key);
    if (node) {
      this.moveToFront(node);
      return node.value;
    }
    return undefined;
  }

  /**
   * 设置缓存
   * @param key - 缓存键
   * @param value - 缓存值
   */
  set(key: string, value: T): void {
    const existing = this.cache.get(key);
    if (existing) {
      existing.value = value;
      this.moveToFront(existing);
    } else {
      const node = new LRUNode(key, value);
      this.cache.set(key, node);
      this.addToFront(node);

      if (this.cache.size > this.maxSize) {
        this.removeLast();
      }
    }
  }

  /**
   * 检查键是否存在
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * 删除缓存项
   */
  delete(key: string): boolean {
    const node = this.cache.get(key);
    if (node) {
      this.removeNode(node);
      this.cache.delete(key);
      return true;
    }
    return false;
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
   * 当前缓存大小
   */
  get size(): number {
    return this.cache.size;
  }

  /**
   * 缓存容量
   */
  get capacity(): number {
    return this.maxSize;
  }

  /**
   * 获取所有键（按最近使用排序）
   */
  keys(): string[] {
    const keys: string[] = [];
    let node = this.head.next;
    while (node && node !== this.tail) {
      keys.push(node.key);
      node = node.next;
    }
    return keys;
  }

  private moveToFront(node: LRUNode<T>): void {
    this.removeNode(node);
    this.addToFront(node);
  }

  private addToFront(node: LRUNode<T>): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: LRUNode<T>): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private removeLast(): void {
    const last = this.tail.prev!;
    this.removeNode(last);
    this.cache.delete(last.key);
  }
}

export default LRUCache;
