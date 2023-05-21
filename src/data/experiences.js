import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const experiences = [
  {
    _id: uuidv5("Department of ETE", NAMESPACE),
    employer_name: "Department of ETE",
    location: "CUET, BD",
    position: "Undergraduate Thesis Work",
    start_date: new Date("2020-01-01"),
    end_date: new Date("2022-05-01"),
    responsibilities: [
      "To learn how to conduct research.",
      "To find research gaps by studying research paper.",
      "To propose a methodology and provide solution.",
      "To submit a thesis dissertation of length 10, 000 words (approx.)",
    ],
    tools_used: ["MATLAB", "Python", "Keras", "Librosa"],
  },
  //   {
  //     _id: uuidv5("Optimizely", NAMESPACE),
  //     employer_name: "Optimizely",
  //     location: "Dhaka, BD",
  //     position: "Junior Fullstack Developer",
  //     start_date: new Date("2022-06-01"),
  //     end_date: new Date("2024-06-01"),
  //     responsibilities: [
  //       "To write clean reusable code for existing codebase.",
  //       "To test code using multiple testing tools.",
  //     ],
  //     tools_used: ["Python", "Django"],
  //   },
];

// const experiences = [];

export default experiences;
