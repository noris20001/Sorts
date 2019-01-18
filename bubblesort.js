'use strict';
let bubblesort = [
	3, 5, 6, 1, 9, 4, 7, 8, 2, 10, 11,
];
let counter=0;
	function bubbleSort(array) {
		let sorted = false;
		while (!sorted) {
			sorted = true;
			array.forEach(function (element, i, arr) {
				if (element > arr[i + 1]) {
					arr[i] = arr[i + 1];
					arr[i + 1] = element;
					sorted = false;
					counter++
				}
			})
		}
	}
console.log(bubblesort);
bubbleSort(bubblesort);
console.log(bubblesort);
console.log(counter);


