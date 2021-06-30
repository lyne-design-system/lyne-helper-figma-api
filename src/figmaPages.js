const shouldIgnorePage = (page, ignorePattern) => page.name.indexOf(ignorePattern) === 0;

// Get frames from 1st page of the Figma file
module.exports = (figmaData, ignorePattern) => {

  // make sure that file is not empty
  const figmaDocument = figmaData.document;

  if (!figmaDocument) {
    throw new Error('ERROR: Figma file seems to be empty.');
  }

  // make sure that file has pages
  const figmaPages = figmaDocument.children;

  if (!figmaPages || figmaPages.length < 1) {
    throw new Error('ERROR: Figma file seems not to have any pages.');
  }

  // exclude pages that mach the ignore pattern
  const onlyNotIgnoredPages = figmaPages.filter((page) => !shouldIgnorePage(page, ignorePattern));

  if (!onlyNotIgnoredPages || onlyNotIgnoredPages.length < 1) {
    throw new Error('ERROR: Figma file seems not to have any pages except pages that should be ignored.');
  }

  return onlyNotIgnoredPages;

};
