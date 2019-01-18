'use strict';

let shakersort= [
	3, 5, 6, 1, 9, 4, 7, 8, 2, 10, 11,


];
const swap = (arr, index, element) => {
	const sort = arr[index];
	arr[index] = arr[element];
	arr[element] = sort
};
let counter=0;
function shakerSort(array) {
	let leftIndex = 0;
	let rightIndex = array.length - 1;
	while (leftIndex < rightIndex) {
		for (let idx = leftIndex; idx < rightIndex; idx++) {
			if (array[idx] > array[idx + 1]) {
				swap(array, idx, idx + 1)
			}
		}
		rightIndex--;
		for (let idx = rightIndex; idx > leftIndex; idx--) {
			if (array[idx] < array[idx - 1]) {
				swap(array, idx, idx - 1)
			}
		}
		leftIndex++;
		counter++
	}
}
console.log(shakersort);
shakerSort(shakersort);
console.log(shakersort);
console.log(counter);



