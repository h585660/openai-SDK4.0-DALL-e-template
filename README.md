# OpenAI SDK 4.0 DALL-E Template 🎨🤖

Welcome to the OpenAI SDK 4.0 DALL-E Template repository! This resource is dedicated to providing a simple yet effective way to connect with the OpenAI DALL-E model using the latest SDK version. Our goal is to make AI art creation accessible, straightforward, and enjoyable for developers at all levels.

## Getting Started

Before diving into the world of AI-generated art, you'll need to set up your environment. Here's how:

### Prerequisites

Ensure you have Node.js installed on your system. If not, you can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the Repository:**
   git clone https://github.com/your-repo-name.git

2. **Install Dependencies:**
   Navigate to your project directory and run:
   npm install axios next react react-dom

3. **Environment Variables:**
   Create a `.env` file in your root directory and add your OpenAI API key:
   OPENAI_API_KEY=your_api_key_here

## Usage

This repository contains a simple setup to create images using the OpenAI DALL-E model:

- **create-image.js:** Handles the API requests to OpenAI and caches responses using Vercel's KV store.
- **pages/index.js:** A basic frontend using Next.js to submit prompts and display generated images.

To start the application:
npm run dev

Visit `http://localhost:3000` in your browser to interact with the application.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the codebase or documentation.

