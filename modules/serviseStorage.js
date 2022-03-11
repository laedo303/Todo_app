export const getStorage = key => JSON.parse(localStorage.getItem(key)) || [];


export const setStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};


export const updateLocal = (key, obj) => {
  const tasks = getStorage(key);
  tasks.push(obj);
  setStorage(key, tasks);
};
