import { getContext } from "svelte";

const fragmentRegex = /^#/;
const absoluteRegex = /^\//;
const protocolRegex = /^[a-z]+:/;

export const isFragment = path => fragmentRegex.test(path);

export const isRelative = path =>
  !absoluteRegex.test(path) && !protocolRegex.test(path);

export const fix = path => {
  const { slug } = getContext("rehype");

  return isFragment(path) || isRelative(path) ? `${slug()}/${path}` : path;
};
