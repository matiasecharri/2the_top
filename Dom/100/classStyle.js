class Counter {
  constructor(initialState = 0) {
    this.state = initialState;
  }

  increment() {
    return this.state++;
  }

  decrement() {
    return this.state--;
  }

  get currentState() {
    return this.state;
  }
}

let counter = new Counter(1);
console.log(counter);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.currentState);
