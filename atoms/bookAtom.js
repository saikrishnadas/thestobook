import { atom } from "recoil";
import Cookies from "js-cookie";

export const bookAtom = atom({
  key: "bookAtom",
  default: Cookies.get("currentBook")
    ? JSON.parse(Cookies.get("currentBook"))
    : null,
});
