import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const response = await openai.createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    return answer;
  } catch (err) {
    return `ChatGPT has unable to find an answer for that! {Error: ${err.message}}`;
  }
};

export default query;
