import { useContext } from "react";
import { CollapsibleContext } from "./_context";

export const useCollapsible = () => useContext(CollapsibleContext);
