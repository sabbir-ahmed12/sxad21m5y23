import { v5 as uuidv5 } from "uuid";
import NAMESPACE from "./constant";

const quotes = [
  {
    _id: uuidv5("quote 1", NAMESPACE),
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
  },
  {
    _id: uuidv5("quote 2", NAMESPACE),
    quote: "Life is an echo: 'We get back what we give'.",
    source: "",
  },
  {
    _id: uuidv5("quote 3", NAMESPACE),
    quote: "The darkest hour of the night comes just before the dawn.",
    source: "",
  },
];

export default quotes;
