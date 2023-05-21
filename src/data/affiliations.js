import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const affiliations = [
  {
    _id: uuidv5("IEEE General Member", NAMESPACE),
    organization_name: "IEEE CUET Student Branch",
    location: "CUET, BD",
    position: "General Member",
    start_date: new Date("2021-01-01"),
    end_date: new Date("2022-12-31"),
    responsibilities: [
      "To attended workshops arranged by IEEE.",
      "To help fellow researchers grow and to learn current trends in research.",
    ],
  },
];

export default affiliations;
