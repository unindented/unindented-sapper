import { authorEmail, authorTwitter, siteUrl } from "./metadata";

export const email = ({ title }) =>
  `mailto:${authorEmail}?subject=${encodeURIComponent(title)}`;

export const tweet = ({ slug, title }) => {
  const text = encodeURIComponent(title);
  const url = encodeURIComponent(`${siteUrl}/${slug}`);
  const via = encodeURIComponent(authorTwitter);
  return `https://twitter.com/intent/tweet?text=${text}&amp;url=${url}%2F&amp;via=${via}`;
};
