import * as patterns from "react-svg-blob/dist/lib/patterns";

const allPatterns = Object.values(patterns);

export function getRandomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPattern() {
  return allPatterns[Math.floor(Math.random() * allPatterns.length)];
}

export function generateShapeProps() {
  return {
    size: 250,
    edges: getRandomInt(4, 6)
  }
}

export const shades = [
  -10,
  5,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
 ]
