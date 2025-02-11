import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-07d4e8e719af47bea0201d3f66226a91',
    dangerouslyAllowBrowser: true,
});

export async function getDataFromOpenAI(prompt) {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: "user",
            content: prompt
        }],
        model: "deepseek-chat",
    });

    return completion.choices[0].message.content;
}