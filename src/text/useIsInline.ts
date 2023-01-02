import { useContext } from "react";
import isTextContext from "./isInlineContext";

const useIsInline = () => useContext(isTextContext);

export default useIsInline;
