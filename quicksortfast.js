'use strict';
//QUICKSORT(RANDOM)
//let items = [
//	12, 11, 5, 7, 3, 14, 2, 1
//
//];
//
//let counter = 0;
//
//function quicksort(array) {
//	let start = 0;
//	let end = array.length - 1;
////	console.log(end);
////	let index = Math.floor((start + end) / 2);
//	let index = Math.floor(Math.random() * array.length);
//	let element = array[index];
////	console.log(index, element)
//	if (array.length <= 1) {
//		return array;
//	}
//	let right = new Array();
//	let left = new Array();
////	 console.log(index);
////	console.log(element);
//	for (let i = 0; i < array.length; i++) {
//		if (element < array[i]) {
//			right.push(array[i]);
//		} else {
//			left.push(array[i]);
//		}
//
//	}
////	console.log(left, right);
//	let leftSorted = quicksort(left);
//	let rightSorted = quicksort(right);
//	counter++;
//	return leftSorted.concat(rightSorted);
//}
//let result = quicksort(items);
//console.log(items);
//console.log(result);
//console.log(counter);


//QUICKSORT(NORMAL)
//var $array = [25, 1, 3, 5, 7, 2, 8, 5, 6, 9, 12, 13, 16, 1, 0, 14, 11];
//var $start = 0;
//var $end = $array.length - 1;
//quicksort($start, $end);
//console.log($array);
//function quicksort($start, $end) {
//	var $left = $start;
//	var $right = $end;
//	var $center = $array[Math.round(($start + $end) / 2)];
//	console.log ($center);
//	do {
//		while ($array[$right] > $center) {
//			$right--;
//		}
//		while ($array[$left] < $center) {
//			$left++;
//		}
//		if ($left <= $right) {
//			var $right_val = $array[$right];
//			var $left_val = $array[$left];
//			$array[$left] = $right_val;
//			$array[$right] = $left_val;
//			$left++;
//			$right--;
//		}
//		 console.log($array);
//	} while ($left <= $right);
//	if ($right > $start) {
//		quicksort($start, $right);
//	}
//	if ($left < $end) {
//		quicksort($left, $end);
//	}
//}


//HANOITOWER(1WORK)
//function tower(){
//	let stackA = new Stack();
//	let stackB = new Stack();
//	let stackC = new Stack();
//	let i = 3;
//	runHanoi(i, stackA, stackB, stackC);
//	}
//	function runHanoi(n, A, B, C, num){
//	if(n === 1){
//		move(A,B);
//		num++;
//		
//	}else{
//		runHanoi(n-1, A, C, B);
//		move(A, B);
//		num++;
//		runHanoi(n-1, C, B, A);
//	}
//	
//	}


//HANOITOWER(2WORK)

let counter=0;
 function hanoi(disc,start,end,middle){
  if(disc > 0){
    hanoi(disc -1,start,middle,end);
    document.getElementById("display").innerHTML +=('Move disc '+disc+' from '+start+' to '+middle);
    hanoi(disc -1,end,start,middle);
	counter++;
  }
};
let diskNum = document.getElementById('disknumber').value;
 hanoi('disknumber','start','end','middle'); 
 console.log(counter);