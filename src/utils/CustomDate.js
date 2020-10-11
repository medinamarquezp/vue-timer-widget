class CustomDate extends Date {
  constructor() {
    super();
  }
  addHours(h) {
    this.setHours(this.getHours() + h);
    return this;
  }
  addMinutes(m) {
    this.setMinutes(this.getMinutes() + m);
    return this;
  }
  addSeconds(s) {
    this.setSeconds(this.getSeconds() + s);
    return this;
  }
  static getDiff(initTime, endTime) {
    const diff = endTime.getTime() - initTime.getTime();
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return {
      hours,
      minutes,
      seconds
    };
  }
}

export default CustomDate;
