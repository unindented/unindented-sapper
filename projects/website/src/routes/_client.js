export const requestItem = async ({ fetch, error }, slug) => {
  const res = await fetch(`${slug}.json`);
  const data = await res.json();

  if (res.status === 200) {
    return { data };
  } else {
    error(res.status, data.message);
  }
};
