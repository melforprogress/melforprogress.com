export const getIdFromDotPath = (obj, parentPath = '') => {
  const pathPrefix = parentPath === '' ? '' : `${parentPath}.`;
  const result = Object.keys(obj).reduce(
    (acc, key) => {
      const path = `${pathPrefix}${key}`;
      const node = obj[key];
      if (typeof node === 'string') {
        acc[key] = path;
      } else {
        acc[key] = getIdFromDotPath(node, path);
      }
      return acc;
    },
    {},
  );

  return result;
};

export const oneLine = (str) => str.replace(/\n/g, ' ').trim();
