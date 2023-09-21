// google-image-fetcher.js

const fs = require('fs');
const fetch = require('node-fetch');

class GoogleImageFetcher {
  constructor(apiKey = "AIzaSyDtW6x6vKWgf-MbQFWsLG5nRTYbmh0-eJQ", cxId = "a5092aef863c54318") {
    this.url = "https://www.googleapis.com/customsearch/v1";
    this.apiKey = apiKey;
    this.cxId = cxId;
  }

  async fetchImages(query, saveFolder = "images") {
    const params = {
      q: query,
      searchType: "image",
      key: this.apiKey,
      cx: this.cxId,
    };

    const response = await fetch(`${this.url}?${new URLSearchParams(params)}`);

    if (response.status === 200) {
      const data = await response.json();
      const results = data.items || [];

      if (!fs.existsSync(saveFolder)) {
        fs.mkdirSync(saveFolder);
      }

      for (let i = 0; i < results.length; i++) {
        const item = results[i];
        const imgUrl = item.link;
        const imgExtension = imgUrl.split('.').pop();
        const imgFilename = `${i + 1}.${imgExtension}`;
        const imgPath = `./${saveFolder}/${imgFilename}`;

        try {
          const imgResponse = await fetch(imgUrl);
          const imgData = await imgResponse.buffer();
          fs.writeFileSync(imgPath, imgData);
          console.log(`Image ${i + 1}: ${imgUrl}`);
        } catch (e) {
          console.error(`Error downloading image ${i + 1}: ${e}`);
        }
      }
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
}

module.exports = GoogleImageFetcher;