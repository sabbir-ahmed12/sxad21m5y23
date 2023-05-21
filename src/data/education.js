import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const education = [
  {
    _id: uuidv5("Secondary School Level", NAMESPACE),
    degree_name: "Secondary School Level",
    institution_name: "Ispahani Public School and College",
    starting_year: new Date("2012-02-01"),
    completion_year: new Date("2014-02-09"),
  },
  {
    _id: uuidv5("Higher Secondary Level", NAMESPACE),
    degree_name: "Higher Secondary Level",
    institution_name: "Ispahani Public School and College",
    starting_year: new Date("2014-08-01"),
    completion_year: new Date("2016-04-03"),
  },
  {
    _id: uuidv5(
      "B.Sc in Electronics and Telecommunication Engineering",
      NAMESPACE
    ),
    degree_name: "B.Sc in Electronics and Telecommunication Engineering",
    institution_name: "Chittagong University of Engineering and Technology",
    starting_year: new Date("2017-02-23"),
    completion_year: new Date("2022-06-03"),
  },
];

export default education;
