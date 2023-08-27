// interface
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear1: Bear = {
//   name: "honey bear",
//   honey: true,
// };

// type alias
// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   honey: boolean;
// };

// const bear1: Bear = {
//   name: "honey bear",
//   honey: true,
// };

// 타입 선언 병합

// interface -> 선언 병합 가능
// interface Animal {
//   name: string;
// }

// interface Animal {
//   honey: boolean;
// }
// const bear1: Animal = {
//   name: "honey bear",
//   honey: true,
// };

// type alias -> 선언 병합 불가능
// type Animal = {
//   name: string
// }

// type Animal = {
//   honey: boolean
// }
// const bear1: Animal = {
//   name: "honey bear",
//   honey: true,
// };

// Implements
// interface
// interface IArticle {
//   category: string;
//   content: string
// }

// class Article implements IArticle {
//   public category = '';
//   public content = ''
// }

// type
// type MyArticle = {
//   category: string;
//   content: string;
// };

// class Article implements MyArticle {
//   public category = "";
//   public content = "";
// }

// Union
//interface
// interface Animal {
//   name: string
// }

// interface Bear {
//   honey: boolean
// }

// type NewType = Animal | Bear

// const bear1: NewType = {
//   name: 'honey bear',
//   honey: true
// }

// type
type Animal = {
  name: string;
};

type Bear = {
  honey: boolean;
};

type NewType = Animal | Bear;

const bear1: NewType = {
  name: "honey bear",
  honey: true,
};
