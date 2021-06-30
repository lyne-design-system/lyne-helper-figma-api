const shouldIgnoreFrame = (frame, frameIgnorePattern) => frame.name.indexOf(frameIgnorePattern) === 0;

// Get frames from 1st page of the Figma file
module.exports = (figmaPage, frameIgnorePattern) => {

  // make sure that 1st page has regions
  const {
    children
  } = figmaPage;

  if (!children) {
    return [];
  }

  const figmaFrames = children.filter((frame) => frame.type === 'FRAME');
  const onlyNotIgnoredFrames = figmaFrames.filter((frame) => !shouldIgnoreFrame(frame, frameIgnorePattern));

  return onlyNotIgnoredFrames;

};
