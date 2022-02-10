import { atom } from "recoil";
import Cookies from "js-cookie";

export const userAtom = atom({
  key: "userAtom",
  default: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : null,
});
