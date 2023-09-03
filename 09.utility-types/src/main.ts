// // Partial

// interface Address {
//   email: string;
//   address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: "john@abc.com" };
// const all: Address = { email: "john@abc.com", address: "john" };

// // Pcik

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean Room",
//   completed: false,
// };

// // Omit

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "clean room",
//   completed: false,
//   createdAt: 123123,
// };

// // Exclude
// type myUnionType = "grape" | "apple" | "rasberry" | "lemon";

// let lemon: myUnionType = "lemon";

// let noLemonsPlease: Exclude<myUnionType, "lemon"> = "grape";
// // Type is 'grape', 'apple', 'rasberry'

// let noApplesOrLemon: Exclude<myUnionType, "lemon" | "apple"> = "grape";
// // Type is 'grape', 'rasberry'

// let onlyRasberries: Exclude<myUnionType, "lemon" | "apple" | "grape"> =
//   "rasberry";
// // Type is 'rasberry'

// let backToLemons: myUnionType = "lemon";
// // Type is 'grape', 'apple', 'rasberry', 'lemon'

// // Required
// type User = {
//   firstName: string;
//   lastName?: string;
// };

// let firstUser: User = {
//   firstName: "john",
// };

// let secondUser:Required<User> = {
//   firstName: 'John'
// }
// // 'lastName' 속성이 '{ firstName: string; }' 형식에 없지만 'Required<User>' 형식에서 필수입니다.

// Record

// interface CatInfo {
//   age: number;
//   bread: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, bread: "persian" },
//   boris: { age: 5, bread: "maine coon" },
//   mordred: { age: 16, bread: "british shorthair" },
// };

// // RetrunType
// type T0 = ReturnType<() => string> // string
// type T1 = ReturnType<(s: string) => void> // void

// function fn(str: string) {
//   return str
// }

// const a: ReturnType<typeof fn> = 'Hello'
// const b: ReturnType<typeof fn> = true // Error
