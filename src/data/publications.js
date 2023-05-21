import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const publications = [
  {
    _id: uuidv5(
      "Cochleagram Based Speaker Identification Using Noise Adapted CNN.",
      NAMESPACE
    ),
    title: "Cochleagram Based Speaker Identification Using Noise Adapted CNN.",
    authors: ["Sabbir Ahmed", "Nursadul Mamun", "Md Azad Hossain"],
    paper_link: "",
    publisher_name: "ICEEICT",
    published_date: new Date("2019-10-12"),
    category: "conference",
  },
];

export default publications;
