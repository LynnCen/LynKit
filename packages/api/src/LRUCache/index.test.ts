import { describe, it, expect } from 'vitest';
import { LRUCache } from '.';

describe('LRUCache', () => {
  it('should store and retrieve values', () => {
    const cache = new LRUCache<string>(3);
    cache.set('a', 'A');
    cache.set('b', 'B');

    expect(cache.get('a')).toBe('A');
    expect(cache.get('b')).toBe('B');
  });

  it('should return undefined for missing keys', () => {
    const cache = new LRUCache<string>(3);
    expect(cache.get('missing')).toBeUndefined();
  });

  it('should evict least recently used item when full', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');
    cache.set('b', 'B');
    cache.set('c', 'C');

    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe('B');
    expect(cache.get('c')).toBe('C');
  });

  it('should update access order on get', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');
    cache.set('b', 'B');
    cache.get('a'); // a is now most recently used
    cache.set('c', 'C'); // b should be evicted

    expect(cache.get('a')).toBe('A');
    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('c')).toBe('C');
  });

  it('should update existing keys', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');
    cache.set('a', 'AA');

    expect(cache.get('a')).toBe('AA');
    expect(cache.size).toBe(1);
  });

  it('should support has()', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');

    expect(cache.has('a')).toBe(true);
    expect(cache.has('b')).toBe(false);
  });

  it('should support delete()', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');
    cache.delete('a');

    expect(cache.get('a')).toBeUndefined();
    expect(cache.size).toBe(0);
  });

  it('should support clear()', () => {
    const cache = new LRUCache<string>(2);
    cache.set('a', 'A');
    cache.set('b', 'B');
    cache.clear();

    expect(cache.size).toBe(0);
    expect(cache.get('a')).toBeUndefined();
  });

  it('should return keys in order', () => {
    const cache = new LRUCache<string>(3);
    cache.set('a', 'A');
    cache.set('b', 'B');
    cache.set('c', 'C');
    cache.get('a');

    expect(cache.keys()).toEqual(['a', 'c', 'b']);
  });

  it('should throw for invalid capacity', () => {
    expect(() => new LRUCache(0)).toThrow();
    expect(() => new LRUCache(-1)).toThrow();
  });
});
