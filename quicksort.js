'use strict';
let items = [
	1, 2, 3, 4, 5
];
let counter = 0;

function swap(element, firstIndex, secondIndex) {
	let sort = element[firstIndex];
	element[firstIndex] = element[secondIndex];
	element[secondIndex] = sort;
}

function part(element, left, right) {
	let pivot = element[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;
	while (i <= j) {
		while (element[i] < pivot) {
			i++;
			// console.log('function part while 1 ');
		}
		while (element[j] > pivot) {
			j--;
			// console.log('function part while 2 ');
		}
		if (i <= j) {
			swap(element, i, j);
			i++;
			j--;
			counter++;
			// console.log('function part if  ');
		}
	}

	return i;
}

function quickSort(element, left, right) {
	let index;
	if (element.length > 1) {
		index = part(element, left, right);
		// console.log('function quickSort if 1 ');
		if (left < index - 1) {
			quickSort(element, left, right - 1);
			// console.log('function quickSort if 2 ');
		}
		if (index < right) {
			quickSort(element, index, right);
			// console.log('function quickSort if 3 ');
		}
	}

	return element;
}

let result = quickSort(items, 0, items.length - 1);
console.log(result);
console.log(counter);

