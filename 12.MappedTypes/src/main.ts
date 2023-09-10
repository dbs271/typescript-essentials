type Users = "John" | "Han" | "Kim";

type UserFirstNames = { [K in Users]: string };
const userFirstNameInfo: UserFirstNames = {
  John: "Doe",
  Han: "Ho",
  Kim: "jun",
};

type UserAge = { [K in Users]: number };
const userAgeInfo: UserAge = {
  John: 10,
  Han: 20,
  Kim: 30,
};

type DeviceFormatter<T> = {
  [K in keyof T]?: T[K];
};

type Device = {
  manufacture?: string;
  price?: number;
};

const iphone: DeviceFormatter<Device> = { manufacture: "apple", price: 100 };

const priceOnly: DeviceFormatter<Device> = { price: 23 };
const manufactureOnly: DeviceFormatter<Device> = { manufacture: "apple" };
const empty: DeviceFormatter<Device> = {};
