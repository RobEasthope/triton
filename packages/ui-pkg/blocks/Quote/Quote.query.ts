import groq from "groq";

export const QUOTE_QUERY = groq`{
  _type,
  _key,
  quoteType,
  quote,
  quotee,
  photo,
  "testimonial": rawTestimonial->
}`;
