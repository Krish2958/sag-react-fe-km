export const isHexColorCode = (props, propName, comoponentName) => {
  const regexToMatchHexCode = /^#[A-F | a-f | 0-9]{6}/g;

  if (!!props[propName] && !regexToMatchHexCode.test(props[propName])) {
    return new Error(
      `Invalid proper ${propName} passed to ${comoponentName}. Expected a color hex code.`,
    );
  }
};
