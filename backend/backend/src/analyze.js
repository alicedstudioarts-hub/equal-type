import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function analyze(text) {
  const prompt = `
You are an expert in detecting discriminatory or biased language.
Analyze the following text and return a JSON array like this:
[
  {
    "span": "text",
    "category": "gender / race / age / disability ...",
    "explanation": "short explanation",
    "suggestions": ["suggestion 1", "suggestion 2"]
  }
]

Text:
"${text}"
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  return response.output[0].content[0].text;
}
