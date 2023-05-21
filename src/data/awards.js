import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const awards = [
  {
    _id: uuidv5("Junior School Level Scholarship", NAMESPACE),
    award_name: "Junior School Level Scholarship",
    award_date: new Date("2012-12-10"),
    end_date: new Date("2014-01-01"),
    award_info:
      "Awarded Talent Pool scholarship for outstanding performance at JSC examination.",
    certificate_link: "",
  },
  {
    _id: uuidv5("Secondary School Level Scholarship", NAMESPACE),
    award_name: "Secondary School Level Scholarship",
    award_date: new Date("2014-12-10"),
    end_date: new Date("2016-01-01"),
    award_info:
      "Awarded Talent Pool scholarship for obtaining 119th position in Cumilla Board at SSC examination.",
    certificate_link: "",
  },
  {
    _id: uuidv5("Higher Secondary School Level Scholarship", NAMESPACE),
    award_name: "Higher Secondary School Level Scholarship",
    award_date: new Date("2017-12-10"),
    end_date: new Date("2021-01-01"),
    award_info:
      "Awarded Talent Pool scholarship for obtaining 9th position in Cumilla Board at HSC examination.",
    certificate_link: "",
  },
];

export default awards;
