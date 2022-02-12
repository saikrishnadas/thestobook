import { atom } from "recoil";
import Cookies from "js-cookie";

export const searchAtom = atom({
  key: "searchAtom",
  default: Cookies.get("searchBooks")
    ? JSON.parse(Cookies.get("searchBooks"))
    : null,
});
