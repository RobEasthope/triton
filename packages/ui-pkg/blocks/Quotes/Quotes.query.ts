import groq from "groq";

export const QUOTES_QUERY = groq`{
  _type,
  _key,
  heading,
  description,
  "quotes": rawQuotes[]->{
    _type,
    _key,
    quoteType,
    quote,
    quotee,
    photo,
    "testimonial": rawTestimonial->
  }
}`;
