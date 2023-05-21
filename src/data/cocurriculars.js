import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const cocurriculars = [
  {
    _id: uuidv5("The Duke of Edinburgh's Internation Award", NAMESPACE),
    award_name: "The Duke of Edinburgh's International Award (Bronze Medal)",
    award_date: new Date("2015-08-02"),
    end_date: "",
    award_info:
      "Awarded by The Duke of Duke of Edinburgh's International Award Foundation for voluntary works.",

    certificate_link:
      "https://drive.google.com/file/d/1o10pgEPKTjuo9sj8giiZy-pQ82SlZGYe/view?usp=sharing",
  },
  {
    _id: uuidv5("Debate Competition", NAMESPACE),
    award_name: "",
    award_date: "",
    end_date: "",
    award_info: "Participated at inter-department debate competition.",
    certificate_link: "",
  },
  {
    _id: uuidv5("ETE Day", NAMESPACE),
    award_name: "",
    award_date: "",
    end_date: "",
    award_info: "Organized ETE Day 2017 and Telemesh 1.0.",
    certificate_link: "",
  },
  {
    _id: uuidv5("Honda Y-E-S Award", NAMESPACE),
    award_name: "Honda Young Engineer and Scientist's (Y-E-S) Award.",
    award_date: new Date("2019-12-15"),
    end_date: "",
    award_info: "Got selected as top three students for essay round from CUET.",
    certificate_link:
      "https://drive.google.com/file/d/14TBguAaJVue0Kti0lmIStOP9yx-k95om/view?usp=sharing",
  },
  {
    _id: uuidv5("Assistant Publication Secretary", NAMESPACE),
    award_name: "Assistant Publication Secretary",
    award_date: new Date("2021-12-15"),
    end_date: new Date("2022-07-01"),
    award_info:
      "Selected for the Assistant Publication Secretary post at CUET Cumilla Student's Forum.",
    certificate_link: "",
  },
];

export default cocurriculars;
