import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const tests = [
  {
    _id: uuidv5("GRE", NAMESPACE),
    test_name: "Graduate Record Examination (GRE)",
    testing_authority: "ETS",
    test_location: "Dhaka, BD",
    score: "Overall - 303 (Quant - 158, Verbal - 145, AWA - 3.5)",
    date_taken: new Date("2022-10-03"),
  },
  {
    _id: uuidv5("IELTS", NAMESPACE),
    test_name: "International English Language Testing System (IELTS)",
    testing_authority: "British Council",
    test_location: "Chittagong, BD",
    score:
      "Overall - 7 (Listening - 8.5, Reading - 7, Speaking - 6.5, Writing - 6.5)",
    date_taken: new Date("2022-10-22"),
  },
];

export default tests;
