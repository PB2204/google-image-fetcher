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

## Getting Started With React

In a React application, you would typically use JavaScript modules and ES6 imports instead of `require`. Here's the equivalent code for your example using ES6 imports in a React component:

```javascript
import React, { useEffect } from 'react';
import GoogleImageFetcher from 'google-image-fetcher';

const YourComponent = () => {
  useEffect(() => {
    // Create an instance of GoogleImageFetcher (no need to pass API Key and CX ID here)
    const imageFetcher = new GoogleImageFetcher();

    // Define the query and the save folder (optional)
    const query = 'YOUR_QUERY';
    const saveFolder = 'YOUR_FOLDER_NAME';

    // Call the fetchImages method to fetch and save images
    imageFetcher.fetchImages(query, saveFolder);

    // Make sure to include any necessary dependencies in the dependency array
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default YourComponent;
```

In this code:

- We're using the `import` statement to import `GoogleImageFetcher` from the 'google-image-fetcher' package.
- Inside a functional component (`YourComponent`), we use the `useEffect` hook to run code when the component mounts. This is similar to the code you provided that runs when the module is imported.
- We create an instance of `GoogleImageFetcher` and then call `fetchImages` with your desired `query` and `saveFolder`. This code will execute when the component is mounted due to the empty dependency array `[]`.
- You can replace `<div>{/* Your React component content */}</div>` with your actual component content.

Remember to include any necessary dependencies in the dependency array of the `useEffect` hook to ensure the code runs only when those dependencies change. If you need to execute the code in response to specific events or user actions, you can adjust the `useEffect` accordingly.

## Getting Started With Angular A TypeScript Based Framework

In an Angular application, you would follow a different structure and syntax compared to React. Here's how you can integrate the code for fetching images using `google-image-fetcher` into an Angular component:

Assuming you have an Angular project set up, follow these steps:

1. **Import and Use in an Angular Component:**

   Create an Angular component where you want to use `google-image-fetcher`. Import the library and use it in your component's TypeScript file. Below is an example of how to do this:

   ```typescript
   // Import statements
   import { Component, OnInit } from '@angular/core';
   import { GoogleImageFetcher } from 'google-image-fetcher';

   @Component({
     selector: 'app-image-fetcher',
     template: `
       <div>
         <!-- Your Angular component content -->
       </div>
     `,
   })
   export class ImageFetcherComponent implements OnInit {
     constructor() {}

     ngOnInit() {
       // Create an instance of GoogleImageFetcher (no need to pass API Key and CX ID here)
       const imageFetcher = new GoogleImageFetcher();

       // Define the query and the save folder (optional)
       const query = 'YOUR_QUERY';
       const saveFolder = 'YOUR_FOLDER_NAME';

       // Call the fetchImages method to fetch and save images
       imageFetcher.fetchImages(query, saveFolder);
     }
   }
   ```

   In this code:

   - We import the `GoogleImageFetcher` class from the 'google-image-fetcher' package.
   - We create an Angular component (`ImageFetcherComponent`) where we use `GoogleImageFetcher` inside the `ngOnInit` lifecycle hook, which runs when the component initializes.
   - We define the `query` and `saveFolder` variables with your desired values.
   - We create an instance of `GoogleImageFetcher` and call the `fetchImages` method to fetch and save images.
   - You can replace the template content with your actual Angular component content.

2. **Add the Component to Your Angular Module:**

   Make sure to add your `ImageFetcherComponent` to the declarations array of your Angular module (e.g., `app.module.ts`) to make it available for use in your application.

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';

   import { AppComponent } from './app.component';
   import { ImageFetcherComponent } from './image-fetcher.component'; // Import your component

   @NgModule({
     declarations: [AppComponent, ImageFetcherComponent], // Add your component here
     imports: [BrowserModule],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

3. **Include in Template:**

   Include your `ImageFetcherComponent` in the template of another Angular component or in your Angular routing configuration as needed.

Now, your Angular component is set up to use `google-image-fetcher`. When you navigate to the component or use it in your application, the code inside `ngOnInit` will be executed to fetch and save images.

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