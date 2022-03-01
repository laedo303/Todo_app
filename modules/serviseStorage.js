

export const getStorage = key => JSON.parse(localStorage.getItem(key)) || [];


const setStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};


export const updateLocal = (key, obj) => {
  const tasks = getStorage(key);
  console.log('tasks: ', tasks);
  tasks.push(obj);
  setStorage(key, tasks);
};
