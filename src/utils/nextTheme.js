import constants from "./../constants.js";

const nextTheme = (currentThemeValue) => {
  const values = Object.values(constants.THEMES);
  const themeIndex = values.indexOf(currentThemeValue);
  const nextValue = values[(themeIndex + 1) % values.length];
  return nextValue;
};

export default nextTheme;
