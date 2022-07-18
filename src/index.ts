export { default as MyComponent } from "./MyComponent";
import theme from './themes/default'

interface Thing {
  foo: number;
}

const x: Thing = {
  foo:  3,
};

console.log("hi from posix design system", x.foo, theme);
