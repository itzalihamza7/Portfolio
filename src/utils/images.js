// Resolves an image file name from portfolio.js to its bundled URL.
export default function image(fileName) {
  return require(`../assests/images/${fileName}`);
}
