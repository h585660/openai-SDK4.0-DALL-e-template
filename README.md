# OpenAI SDK 4.0 DALL-E Template 🎨🤖

Welcome to the OpenAI SDK 4.0 DALL-E Template repository! This resource is dedicated to providing a simple yet effective way to connect with the OpenAI DALL-E model using the latest SDK version. My goal is to make AI art creation accessible, straightforward, and enjoyable for developers at all levels. The goal is not to create a perfect ready-to-use template, but rather to provide the simplest possible compilable setup that connects with openai 4.0.
If like me you've gotten overly dependent on chatGPT problemsolving, you've also seen that chatGPT is incapable of providing a functioning API-call to openai. ChatGPT does not have access to the 4.0 overhaul to the api, and thus does not provide a functioning template. That's why I created this very simple setup. How you proceed with this is for you yourself to explore!

## Getting Started

Before diving into the world of AI-generated art, you'll need to set up your environment. Here's how:

### Prerequisites

Ensure you have Node.js installed on your system. If not, you can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Create project:**
   run 'npx create-next-app your_appname_here' in terminal
   
2. **Create the folders 'page'(unless created upon setup) and api within page-folder**
   Place create-image.js in api folder
   Place index.js in page folder
   

3. **Install Dependencies:**
   Navigate to your project directory and run:
   npm install axios next react react-dom openai@latest

5. **Environment Variables:**
   Create a `.env` file in your root directory and add your OpenAI API key(openai subscription does not equal functioning api, insert credits):
   OPENAI_API_KEY=your_api_key_here

## Usage

This repository contains a simple setup to create images using the OpenAI DALL-E model:

- **create-image.js:** Handles the API requests to OpenAI.
- **pages/index.js:** A basic frontend using Next.js to submit prompts and display generated images.

To start the application:
npm run dev

Visit `http://localhost:3000` in your browser to interact with the application.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the codebase or documentation.

