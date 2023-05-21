import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const certificates = [
  {
    _id: uuidv5("aws_ml", NAMESPACE),
    path: "./images/certificates/aws_ml.webp",
    course_title: "AWS Machine Learning",
    issuing_org: "Udacity",
    date_issued: new Date("2020-07-15"),
  },
  {
    _id: uuidv5("coursera_dl", NAMESPACE),
    path: "./images/certificates/coursera_dl.webp",
    course_title: "Deep Learning Specialization",
    issuing_org: "Coursera",
    date_issued: new Date("2020-04-19"),
  },
  {
    _id: uuidv5("coursera_ml", NAMESPACE),
    path: "./images/certificates/coursera_ml.webp",
    course_title: "Machine Learning",
    issuing_org: "Coursera",
    date_issued: new Date("2019-06-24"),
  },
  {
    _id: uuidv5("coursera_git", NAMESPACE),
    path: "./images/certificates/coursera_git.webp",
    course_title: "Introduction to Git and Github",
    issuing_org: "Coursera",
    date_issued: new Date("2020-06-08"),
  },
  {
    _id: uuidv5("coursera_signal_processing", NAMESPACE),
    path: "./images/certificates/coursera_signal_processing.webp",
    course_title: "Digital Signal Processing",
    issuing_org: "Coursera",
    date_issued: new Date("2020-03-23"),
  },
  {
    _id: uuidv5("cuet_arduino", NAMESPACE),
    path: "./images/certificates/cuet_arduino.webp",
    course_title: "Basic Arduino Programming",
    issuing_org: "Think-Robo",
    date_issued: new Date("2020-08-31"),
  },
  {
    _id: uuidv5("cuet_forensics", NAMESPACE),
    path: "./images/certificates/cuet_forensics.webp",
    course_title: "Foundations in Digital Forensics with Magnet Axiom",
    issuing_org: "CUET",
    date_issued: new Date("2019-06-14"),
  },
  {
    _id: uuidv5("cuet_nlp", NAMESPACE),
    path: "./images/certificates/cuet_nlp.webp",
    course_title: "AI and Machine Learning with Python",
    issuing_org: "CUET",
    date_issued: new Date("2022-07-03"),
  },
  {
    _id: uuidv5("pantech_matlab", NAMESPACE),
    path: "./images/certificates/pantech_matlab.webp",
    course_title: "MATLAB Masterclass 2020",
    issuing_org: "Pantech",
    date_issued: new Date("2020-06-10"),
  },
  {
    _id: uuidv5("ssbd_research", NAMESPACE),
    path: "./images/certificates/ssbd_research.webp",
    course_title: "Fundamentals of Research Methodology",
    issuing_org: "SSBD",
    date_issued: new Date("2022-07-13"),
  },
  {
    _id: uuidv5("udemy_tensorflow", NAMESPACE),
    path: "./images/certificates/udemy_tensorflow.webp",
    course_title: "Complete TensorFlow 2 and Keras Deep Learning Bootcamp",
    issuing_org: "Udemy",
    date_issued: new Date("2020-04-25"),
  },
];

export default certificates;
