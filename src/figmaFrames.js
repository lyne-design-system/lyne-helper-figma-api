const shouldIgnoreFrame = (frame, frameIgnorePattern) => frame.name.indexOf(frameIgnorePattern) !== -1;

// Get frames from 1st page of the Figma file
module.exports = (figmaPage, frameIgnorePattern) => {

  // make sure that 1st page has regions
  const {
    children
  } = figmaPage;

  if (!children || children.length < 1) {
    throw new Error('ERROR: 1st page of the Figma file does not have any children');
  }

  const figmaFrames = children.filter((frame) => frame.type === 'FRAME');
  const onlyNotIgnoredFrames = figmaFrames.filter((frame) => !shouldIgnoreFrame(frame, frameIgnorePattern));

  if (onlyNotIgnoredFrames.length < 1) {
    throw new Error('ERROR: 1st page of the Figma file does not have any frames');
  }

  return onlyNotIgnoredFrames;

};
