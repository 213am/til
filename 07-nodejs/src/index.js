import hi, { say, smile } from "./util.js";
import dayjs from "dayjs";

say();
smile();
hi();

const now = dayjs();
console.log(now.format("YYYY-MM-DD HH:mm:ss"));
