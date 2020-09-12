const figma = require('./src');

require('dotenv')
  .config();

const config = {
  file: `https://api.figma.com/v1/files/${process.env.FIGMA_ICONS_FILE_ID}`,
  frameIgnorePattern: '***ignore***',
  pageIgnorePattern: '***ignore***',
  token: process.env.FIGMA_ACCESS_TOKEN
};

figma.document(config.file, config.token)
  .then((data) => {
    const pagesData = figma.pages(data, config.pageIgnorePattern);

    const [figmaPage] = pagesData;

    const framesData = figma.frames(figmaPage, config.frameIgnorePattern);

    console.log(framesData);
  });
