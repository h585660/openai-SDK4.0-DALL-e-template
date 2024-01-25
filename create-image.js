import { OpenAI } from 'openai';

//place personal openai api key .env
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log("Prompt value: ", req.body.prompt);
            const response = await openai.images.generate({
                //change 3 with 2 if dallE-2 is preferred(it wont be after you try)
                model: 'dall-e-3',
                prompt: req.body.prompt,
                size: '1024x1024',
                n: 1
            });
            console.log("OpenAI API Response: ", response);
            const imageUrl = response.data[0].url; // Finds image URL
            res.status(200).json({ url : imageUrl });
        } catch (error) {
            res.status(500).json({ message: "Error creating image", error: error.message });
            console.log("Error in OpenAI API call: ", error);
        }
    } else if (req.method === 'GET') {
        // Test for openai connection
        try {
            await openai.models.list();
            res.status(200).json({ message: "OpenAI connection successful" });
        } catch (error) {
            res.status(500).json({ message: "OpenAI connection failed", error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
