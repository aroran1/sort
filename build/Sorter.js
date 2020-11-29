"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    // the above can also be written as below
    function Sorter(collection) {
        this.collection = collection;
    }
    // bubble sort - compare 2 values at a time 0 and 1 and correct them
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) { // going through i = 10
            for (var j = 1; j < length - i - 1; j++) { // going through j = 3, j = -5, j = 0
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
var sorter1 = new Sorter([10, 3, -5, 0, 1]);
sorter1.sort();
console.log("sorter1.collection = " + sorter1.collection);
