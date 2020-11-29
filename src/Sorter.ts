export class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // the above can also be written as below
  constructor(public collection: number[]) {}

  // bubble sort - compare 2 values at a time 0 and 1 and correct them
  sort(): void {
    const { length } = this.collection; 

    for(let i = 0; i < length; i++) { // going through i = 10
      for(let j = 1; j < length - i - 1; j++) { // going through j = 3, j = -5, j = 0
        if (this.collection[j] > this.collection[j+1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = temp;
        }
      }
    }
  }
}
 
const sorter1 = new Sorter([10, 3, -5, 0, 1]);
sorter1.sort();

console.log(`sorter1.collection = ${sorter1.collection}`);