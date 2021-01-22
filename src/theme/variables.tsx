export const colors = {
  red: "#FF7979",
  green: "#38CC8B",
  violet: "#5E54A4",
  dark: "#3D3B48",
  white: "#ffffff",
};

/* 
  If we used rems on mediaqueries they are always realted to the default browser
  font-size, we cannot ever overrite (it won't work). Check this awesome post on stackoverflow:
  https://stackoverflow.com/questions/47409585/using-rem-units-in-media-queries-and-as-width#answer-51993054
*/
export const breakpoints = {
  desktop: "1444px",
  mobileSmall: "375px",
  mobileBig: "700px",
  tablet: "964px",
};

export const defaultFontSize = "1.6rem";
export const hugeFontSize = "2.8rem";

const variables = {
  colors,
  breakpoints,
  defaultFontSize,
  hugeFontSize,
};

export default variables;
