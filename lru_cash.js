class LRUCache {
    constructor(limit = 5) {
      this.cache = new Map();
      this.limit = limit;
    }

    get(key) {
      if (!this.cache.has(key)) return -1;
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }

    put(key, value) {
      if (this.cache.has(key)) this.cache.delete(key);
      else if (this.cache.size === this.limit) this.cache.delete(this.first());
      this.cache.set(key, value);
    }

    first() {
      return this.cache.keys().next().value;
    }
  }