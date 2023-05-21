import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const allProjects = [
  {
    _id: uuidv5(
      "Malaria Detection from Cell Image Using Convolutional Neural Network.",
      NAMESPACE
    ),
    title:
      "Malaria Detection from Cell Image Using Convolutional Neural Network.",
    description:
      "This project aims to detect malaria from red blood cells. The dataset was taken from NIH website and it consists of 27,558 images of infected and uninfected RBCs.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/ML-malaria-detection",
    tools_used: ["Python", "TensorFlow", "Keras"],
    category: "ml",
  },
  {
    _id: uuidv5("ODI Cricket Bowling Analysis.", NAMESPACE),
    title: "ODI Cricket Bowling Analysis.",
    description:
      "This project was part of a course by EMK center where Python's Pandas library was used to perform data analysis.",
    live_link: "",
    github_link:
      "https://github.com/sabbir-ahmed12/EDA-ODI-cricket-bowling-analysis",
    tools_used: ["Python", "Pandas"],
    category: "ml",
  },
  {
    _id: uuidv5("Exploratory Data Analysis on Used Ford Cars.", NAMESPACE),
    title: "Exploratory Data Analysis on Used Ford Cars.",
    description:
      "This project was given to analyze my knowledge in matplotlib and data analysis in a course arranged by EMK Centre.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/EDA-Ford-used-car-analysis",
    tools_used: ["Python", "Matplotlib", "Seaborn"],
    category: "ml",
  },
  {
    _id: uuidv5(
      "Bangla Digit Classification Using Machine Learning.",
      NAMESPACE
    ),
    title: "Bangla Digit Classification Using Machine Learning.",
    description:
      "This project was given as a task in a workshop arranged by CUET NLP Lab.",
    live_link: "",
    github_link:
      "https://github.com/sabbir-ahmed12/ML-bangla-digit-classification",
    tools_used: ["Python", "Pandas"],
    category: "ml",
  },
  {
    _id: uuidv5(
      "Capucchin Bird Calls Prediction Using Convolutional Neural Network.",
      NAMESPACE
    ),
    title:
      "Capucchin Bird Calls Prediction Using Convolutional Neural Network.",
    description:
      "This is a hobby project on audio signal processing. The dataset contains sounds of different areas in forest. The objective was to find number of capucchin bird calls in a clip to estimate the density of capucchin bird in an area of a forest.",
    live_link: "",
    github_link:
      "https://github.com/sabbir-ahmed12/ML-capuchinbird-calls-prediction",
    tools_used: ["Python", "Keras", "Librosa"],
    category: "ml",
  },
  {
    _id: uuidv5("Speaker Identification Using Cochleagram.", NAMESPACE),
    title: "Speaker Identification Using Cochleagram.",
    description:
      "This project aims to perform speaker identification using cochleagram under mismatched environment conditions.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/ML-speaker-identification",
    tools_used: ["MATLAB"],
    category: "ml",
  },
  {
    _id: uuidv5("Speech Enhancement Using Machine Learning.", NAMESPACE),
    title: "Speech Enhancement Using Machine Learning.",
    description:
      "This project aims to enhance speech signal by reducing noise. The deep neural network model was fed with both clean and noisy spectrograms to make it learn to remove noise from spectrograms.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/ML-speech-enhancement",
    tools_used: ["MATLAB"],
    category: "ml",
  },
  {
    _id: uuidv5("Add Various Noise at Different Levels of SNR", NAMESPACE),
    title: "Add Various Noise to Audio at Different Levels of SNR.",
    description:
      "This python module was created to make it easier to add various noises at various levels of SNR.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/speech-processing-utils",
    tools_used: ["MATLAB"],
    category: "misc",
  },
  {
    _id: uuidv5("Todo App Using React.", NAMESPACE),
    title: "Todo App Using React.",
    description:
      "This is a practice project built as part of learning the popular frontend library React.",
    live_link: "",
    github_link: "https://github.com/sabbir-ahmed12/react-todo-app",
    tools_used: ["Javascript", "React"],
    category: "web dev",
  },
  {
    _id: uuidv5("Feedback App Using React.", NAMESPACE),
    title: "Feedback App Using React.",
    description:
      "This is a practice project built as part of learning the popular frontend library React and Tailwind.",
    live_link: "https://meek-sopapillas-70bb21.netlify.app/",
    github_link: "https://github.com/sabbir-ahmed12/react-feedback-app",
    tools_used: ["Javascript", "React", "Tailwind"],
    category: "web dev",
  },
  {
    _id: uuidv5("Github User Finder Using React.", NAMESPACE),
    title: "Github User Finder Using React.",
    description:
      "This project grabs github users with the name entered using Github API and displays useful informations in a nicely formatted structure. It was built using React and Tailwind.",
    live_link: "https://fastidious-dieffenbachia-2994cb.netlify.app/",
    github_link: "https://github.com/sabbir-ahmed12/react-github-finder",
    tools_used: ["Javascript", "React", "Tailwind"],
    category: "web dev",
  },
  {
    _id: uuidv5("Landing Page Using Tailwind.", NAMESPACE),
    title: "Landing Page Using Tailwind.",
    description:
      "This is a practice project built to learn Tailwind UI libray.",
    live_link: "https://lustrous-madeleine-326542.netlify.app/",
    github_link: "https://github.com/sabbir-ahmed12/project-tailwind",
    tools_used: ["Javascript", "React", "Tailwind"],
    category: "web dev",
  },
];

export default allProjects;
