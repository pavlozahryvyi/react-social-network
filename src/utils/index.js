export const mapPages = (pages) =>
  pages.reduce((acc, curr) => {
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

export const gatNumberArray = (n) => Array.from(Array(n).keys());
