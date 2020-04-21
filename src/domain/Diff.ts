export class Diff {
  constructor(public property: string, public oldValue: any, public newValue: any) {}

  apply(entity: any) {
    entity[this.property] = this.newValue;
  }

  revert(entity: any) {
    entity[this.property] = this.oldValue;
  }

  invert(): Diff {
    return new Diff(this.property, this.newValue, this.oldValue);
  }
}
