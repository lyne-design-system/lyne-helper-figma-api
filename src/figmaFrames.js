const shouldIgnoreFrame = (frame, frameIgnorePattern) => frame.name.indexOf(frameIgnorePattern) === 0;

module.exports = (figmaPage, frameIgnorePattern) => {
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
