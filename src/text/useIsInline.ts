import { useContext } from "react";
import isTextContext from "./isTextContext";

const useIsInline = () => useContext(isTextContext);

export default useIsInline;
