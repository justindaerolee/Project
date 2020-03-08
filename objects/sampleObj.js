export default class sampleObj {
  constructor() {
    this.obj = "hello";
  }

  samFunc() {
    this.obj = "bye";
    return this.obj;
  }
}