export const mapPages = (pages) => {
  const nextPages = pages.reduce((acc, curr) => {
    const { path } = curr;
    if (Array.isArray(path)) {
      path.forEach((el) => {
        acc.push({ ...curr, path: el });
      });
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);

  return nextPages;
};

export const gatNumberArray = (n) => Array.from(Array(n).keys());
