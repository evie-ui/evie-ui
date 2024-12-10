import { MMKV, type Mode } from "react-native-mmkv";

export const database = new MMKV({
  id: "main",
  mode: "MULTI_PROCESS" as unknown as Mode,
});
