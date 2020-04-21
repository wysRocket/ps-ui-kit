export default class ChangeWatcher<T> {
  private timer!: any;
  constructor(private value: T, private handler: (v: T) => void, private timeout: number = 500) {}

  change(newValue: T) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
     if (newValue !== this.value) {
       this.value = newValue;
       this.handler(newValue);
     }
    }, this.timeout);

  }
  getValue(): T {
    return this.value;
  }
}
