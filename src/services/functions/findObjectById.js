export const findObjectById = (id, obj) => {
  const { children } = obj;

  if (obj.id === id) {
    return obj;
  }

  if (children && children.length > 0) {
    for (const childObj of children) {
      const result = findObjectById(id, childObj);
      if (result) {
        return result;
      }
    }
  }

  return null;
};
