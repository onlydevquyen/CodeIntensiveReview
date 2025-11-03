// 1. Tạo một arrow function để tính bình phương của một số
//  - Input: 4
//  - Output: square(4) -> 16

function square (number) {
    return number * number   
}
// console.log(square(3));


// 2.  Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không
// - Input: Chuỗi: "Hello world!", Từ khóa: "world"
// - Output: function(‘Hello world’, ’world’) -> true
let string = "Hello world!"
let key = "HELLO"
const findWord = (string, key) => {
    return string.toUpperCase().includes(key)
}

// console.log(findWord(string, key));


// 3. Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
// - Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
// - Output: function(["one", "two", "three"], ’number’) 
//             -> ["number: one", "number: two", "number: three"]

const array = ["one", "two", "three"]



const result = []

let total = array.length;
for(let i = 0; i < total; i++){
   let item = array[i]
   result.push(`number: ${item}`)
}

const addSuffix = () => array.map((item, key) => `number: ${key}`)
// console.log(addSuffix());

// 4. Sử dụng 
// + Arrow function để nhân đôi giá trị của các phần tử trong một mảng số
// - Input: [1, 2, 3, 4]
// - Output: [2, 4, 6, 8]
const array2 = [1, 2, 3, 4]
const double = (array) => array.map((item) => item * 2)
// console.log(double(array2));

// 5. Sử dụng
// + Arrow function để lấy ra các phần tử là số lẻ từ một mảng
// - Input: [1, 2, 3, 4, 5, 6]
// - Output: [1, 3, 5]

const array3 = [1, 2, 3, 4, 5, 6]
const getNumber = (array) => array.filter(x => x % 2 !== 0)
// console.log(getNumber(array3));

// Tính tổng các số lẻ trong mảng
const sumNumber = (callback, array) => {
    console.log(array);
    let arrayResult = callback(array)
    console.log(arrayResult);
    
    let total = arrayResult.reduce((total, x) => total + x, 2)
    console.log(total);
    
}

sumNumber(getNumber, array3)

// console.log(sumNumber(getNumber, array3));
