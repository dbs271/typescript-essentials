"use strict";
// Boolean
let boolean;
let falseBoolean = false;
//Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = "Doe";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
// 여러 타입을 가지는 배열 (유니온 타입을 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
// 여러 타입을 단언 할 수 없을 때 any
let someArray = ["John", 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// Tuple
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2]; // error
let users;
users = [
    [1, "John"],
    [2, "Doe"],
];
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false) // error
// any
let any = "abc";
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: string = unknown // unknown 형식은 string 형식에 할당할 수 없습니다. 즉, unknown 형식은 다른 형식에 할당할 수 없습니다.
let string2 = unknown; // 타입 단언을 사용하면 unknown을 다른 형식에 할당할 수 있다
// Object
let obj = {};
let arr = [];
// let null: object = null  // tsconfig에서 strict를 true로 설정했기 때문에 null은 object에 할당할 수 없다.
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1",
    description: "description",
};
// Union
let union;
union = "hi1";
union = 123;
// union = true // error
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log("hi");
};
// Null, Undefined
// let number1: number = undefined;
// let string9: string = null;
// let object: { a: 10; b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;
let void2 = undefined;
// void
function greeting() {
    console.log("hi");
}
const hi = greeting();
console.log(hi);
// nuver
function throwError() {
    throw new Error("error");
}
function keepProcessing() {
    while (true) {
        console.log("hi");
    }
}
const never = [];
never.push(1);
