import { useContext } from "react";
import { MagicModalContext } from "./_context";

export const useMagicModalState = () => useContext(MagicModalContext);
