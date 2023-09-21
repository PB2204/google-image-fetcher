**Google Image Fetcher** is a JavaScript library that simplifies the process of fetching and saving images from Google Search using the **Custom Search JSON API**.

## Motive Of The Project

Frontend developers often face the challenge of sourcing images for their websites when there is no graphic designer available on the team. This JavaScript library aims to solve that problem by providing an easy-to-use solution for fetching and downloading images from Google.

You can use this library without any prior knowledge of JavaScript programming, making it accessible to both developers and non-developers.

After following the steps outlined below, you'll be able to download images based on your query and view the image URLs in the terminal.

## Structure Of The Project

```bash
google-image-fetcher/
│   │
│   ├── node_modules/
│   │   │   │
│   │   │   ├── node-fetch/
│   │   │   │   │
│   │   │   │   ├── lib/
│   │   │   │   │   │
│   │   │   │   │   ├── index.es.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── index.mjs
│   │   │   │   │
│   │   │   │   ├── browser.js
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   │
│   │   │   ├── tr46/
│   │   │   │   │
│   │   │   │   ├── lib/
│   │   │   │   │   │
│   │   │   │   │   ├── .gitkeep
│   │   │   │   │   └── mappingTable.json
│   │   │   │   │
│   │   │   │   ├── .npmignore
│   │   │   │   ├── index.js
│   │   │   │   └── package.json
│   │   │   │
│   │   │   ├── webidl-conversations/
│   │   │   │   │
│   │   │   │   ├── lib/
│   │   │   │   │   │
│   │   │   │   │   └── index.js
│   │   │   │   │
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   └── whatwg-url/
│   │   │       │
│   │   │       ├── lib/
│   │   │       │   │
│   │   │       │   ├── public-api.js
│   │   │       │   ├── URL-impl.js
│   │   │       │   ├── url-state-machine.js
│   │   │       │   ├── URL.js
│   │   │       │   └── utils.js
│   │   │       │
│   │   │       ├── LICENSE.txt
│   │   │       ├── package.json
│   │   │       └── README.md
│   │   └── .package-lock.js
│   │
│   ├── google-image-fetcher.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
├── CONTRIUTING.md
├── LEARN.md
├── LICENSE
└── README.md
```

## Installation

You can install the library using npm:

```bash
npm install google-image-fetcher
```

## Getting Started

1. Create a new JavaScript (.js) file in your project folder.

2. Copy and paste the following code into your .js file:

   ```javascript
    const GoogleImageFetcher = require('google-image-fetcher');

    // Create an instance of GoogleImageFetcher (no need to pass API Key and CX ID here)
    const imageFetcher = new GoogleImageFetcher();

    // Define the query and the save folder (optional)
    const query = 'YOUR_QUERY';
    const saveFolder = 'YOUR_FOLDER_NAME';

    // Call the fetchImages method to fetch and save images
    imageFetcher.fetchImages(query, saveFolder);
   ```

3. Replace `YOUR_QUERY` with the desired image search query and `YOUR_FOLDER_NAME` with the name of the folder where you want to save the downloaded images. This folder will be created in your project's current directory.

Now you're ready to use the library to fetch and save images.

## Configuration

Before using the library, make sure to obtain an API Key and CX ID from the Google Custom Search JSON API. Replace the values in the code with your actual credentials.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/PB2204/google-image-fetcher/blob/main/LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](https://github.com/PB2204/google-image-fetcher/blob/main/CONTRIBUTING.md) for more details.

## Acknowledgments

- Thanks to [Google](https://www.google.com/) for providing the Custom Search API.

## Contact

For any questions or feedback, feel free to contact [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com).

# Happy Coding 🚀