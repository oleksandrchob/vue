class Computer {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.isPoweredOn = false;
      this.currentTask = null;
    }
  
    powerOn() {
      if (!this.isPoweredOn) {
        this.isPoweredOn = true;
        console.log(`${this.brand} ${this.model} is powered on.`);
      } else {
        console.log(`${this.brand} ${this.model} is already powered on.`);
      }
    }
  
    powerOff() {
      if (this.isPoweredOn) {
        this.isPoweredOn = false;
        this.currentTask = null;
        console.log(`${this.brand} ${this.model} is powered off.`);
      } else {
        console.log(`${this.brand} ${this.model} is already powered off.`);
      }
    }
  
    performTask(task) {
      if (this.isPoweredOn) {
        this.currentTask = task;
        console.log(`${this.brand} ${this.model} is performing the task: ${task}`);
      } else {
        console.log(`${this.brand} ${this.model} is not powered on. Please power on the computer.`);
      }
    }
  }
  
  // Example usage:
  const myComputer = new Computer('ABC', '123');
  myComputer.powerOn();
  myComputer.performTask('Browsing the web');
  myComputer.powerOff();
  