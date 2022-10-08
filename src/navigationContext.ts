import { createContext } from "react";

export type NavigationFn = (path: string) => void;
const navigationContext = createContext<null | NavigationFn>(null);

export default navigationContext;
