import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const updates = [
  {
    _id: uuidv5("Attended a workshop organized by CUET NLP Lab.", NAMESPACE),
    info: "Attended a workshop organized by CUET NLP Lab.",
    date: new Date("2022-07-03"),
  },
  {
    _id: uuidv5('Completed a course on research methodolgy".', NAMESPACE),
    info: 'Completed a course, "Fundamentals of Research Methodology" arranged by Scholarship School BD.',
    date: new Date("2022-07-05"),
  },
  {
    _id: uuidv5(
      'Submitted a journal titled, "Cochleagram Based Noise Adapted Speaker Identification for Distorted Speech" on JSHLR.',
      NAMESPACE
    ),
    info: 'Submitted a journal titled, "Cochleagram Based Noise Adapted Speaker Identification for Distorted Speech" on JSHLR.',
    date: new Date("2023-05-16"),
  },
];

export default updates;
