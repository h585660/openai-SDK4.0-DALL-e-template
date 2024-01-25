import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState(null); 
    const [testConnectionResult, setTestConnectionResult] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        setImageUrl(null); // Reset image URL

        try {
            const response = await axios.post('/api/create-image', { prompt: prompt });
            console.log(response.data);
            setImageUrl(response.data.url);

            // Handle the response data (display image, etc.)
        } catch (error) {
            console.error("Error creating image:", error);
        }
    };

    const testOpenAIConnection = async () => {
        try {
            const response = await axios.get('/api/create-image');
            setTestConnectionResult(response.data.message);
        } catch (error) {
            setTestConnectionResult("OpenAI connection test failed: " + error.message);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter image prompt"
                />
                <button type="submit">Create Image</button>
                
            </form>
            {imageUrl && <Image src={imageUrl} alt="Generated" width={1024} height={1024} />}
            <button onClick={testOpenAIConnection}>Test OpenAI Connection</button>
            {testConnectionResult && <p>{testConnectionResult}</p>}        
        </div>
    );
}
