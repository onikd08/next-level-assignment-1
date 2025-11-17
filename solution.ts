
type ValueType = string | number | boolean;
const formatValue = (value: ValueType): ValueType | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};


const getLength = <T>(input: string | T[]): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    return 0;
  }
};


class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


interface Item {
  title: string;
  rating: number;
}
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};


interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  const available: string = isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${available}.`
  );
};


const getUniqueValues = <T>(array1: T[], array2: T[]): T[] => {
  const newArray: T[] = [];
  array1.forEach((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  array2.forEach((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }
  return products.reduce((total: number, product: Product) => {
    if (product.discount) {
      const productPrice: number = product.price * product.quantity;
      const productDiscount: number = (product.discount * productPrice) / 100;
      return (total += productPrice - productDiscount);
    } else {
      return (total += product.price * product.quantity);
    }
  }, 0);
};
