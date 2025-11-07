// 1. Viết hàm sumArray(arr) trả về tổng các phần tử trong mảng.
let arr_1 = [1, 2, 3, 4];
const sumArray = (arr) => arr.reduce((total, item) => total + item, 0)

// 2. Viết hàm countOccurrences(arr, value) đếm số lần xuất hiện của value trong mảng arr
let arr_2 = [1, 2, 2, 3, 2];

const countOccurrences = (arr, value) => {
  let count = 0;
  let total = arr_2.length
  for(let i = 0; i < total; i++){
    if(arr[i] == value){
      count++;
    }
  }
  return count;
}

// console.log(countOccurrences(arr_2, 3));
const coucountOccurrences_2 = (arr, value) => arr.filter(x => x === value)
// console.log(coucountOccurrences_2(arr_2, 2));

// 3. Viết hàm removeDuplicates(arr) trả về mảng không có phần tử trùng lặp.
// Input: arr = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]
// Output: [1, 2, 3, 4, 6]
let arr_3 = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6];

const removeDuplicates = (arr) => {
  let result = []
  arr.forEach(x => {
    if(!result.includes(x)){
      result.push(x)
    }
  })
  return result;
}
// console.log(removeDuplicates(arr_3));

const removeDuplicates_2 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)

// console.log(removeDuplicates_2(arr_3));

// 4. Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 8];

const isSubset = (arr1, arr2) => {
  let result = true;
  arr2.forEach(x => {
    if(!arr1.includes(x))
      result = false;
  })
  return result;
}

// console.log(isSubset(arr1, arr2));

const isSubset_2 = (arr1, arr2) => arr2.every(x => arr1.includes(x))

// console.log(isSubset_2(arr1, arr2));

// 5. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
let obj_1 = { a: 10, b: 20 };
let obj_2 = { b: 30, c: 40 };

const mergeObjectsSumValues = (obj1, obj2) => {
    let result = {...obj1}
    for (let key in obj2){
      if(!obj1[key]){
        result[key] = obj2[key]
      }else{
        result[key] = obj1[key] + obj2[key]
      }
    }
    return result
}

console.log(mergeObjectsSumValues(obj_1, obj_2)); 

const mergeObjectsSumValues_2 = () => Object.keys(obj_2).reduce((result, key) => {
  result[key] =  (obj_1[key] || 0) + obj_2[key]
  return result
} , {...obj_1})

console.log(mergeObjectsSumValues_2());

