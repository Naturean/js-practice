/**
 * 手写实现 EventBus
 */

class EventBus {
  constructor() {
    // ...
  }

  on(name, callback) {
    // ...
  }

  off(name, callback) {
    // ...
  }

  emit(name, ...args) {
    // ...
  }

  once(name, callback) {
    // ...
  }
}

//参考实现（回传id实现）
class EventBus {
  constructor() {
    this.events = {};
    this.callbackId = 0;
  }

  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = {};
    }
    const id = this.callbackId++;
    this.events[name][id] = callback;
    return id;
  }

  off(name, id) {
    delete this.events[name][id];
    if (Object.keys(this.events[name]).length === 0) {
      delete this.events[name];
    }
  }

  emit(name, ...args) {
    const eventObj = this.events[name];
    for (const id in eventObj) {
      eventObj[id](...args);
    }
  }

  once(name, callback) {
    const id = this.on(name, (...args) => {
      callback(...args);
      this.off(name, id);
    });
  }
}

// 或者不传id，按函数引用来识别回调
class EventBus {
  constructor() {
    this.events = {};
  }

  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }

  off(name, callback) {
    const eventList = this.events[name];
    if (eventList) {
      this.events[name] = eventList.filter((cb) => cb !== callback);
      if (this.events[name].length === 0) {
        delete this.events[name];
      }
    }
  }

  emit(name, ...args) {
    const eventList = this.events[name];
    if (eventList) {
      eventList.forEach((callback) => callback(...args));
    }
  }

  once(name, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(name, onceCallback);
    };
    this.on(name, onceCallback);
  }
}
