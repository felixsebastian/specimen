export { default as MyComponent } from "./MyComponent";

interface Thing {
  foo: number;
}

let x: Thing = {
  foo: 3,
};

console.log(x.foo);
