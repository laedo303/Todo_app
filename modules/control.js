import {newTask} from './createElems.js';
import {createTask} from './createElems.js';
import {getStorage, updateLocal} from './serviseStorage.js';
import {
  btnComlete,
  deskTaskInput,
  form,
  todoItem,
  todosWrapper} from './getDocElems.js';


export const addUserToLocal = (userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask.description = deskTaskInput.value;
    updateLocal(userName, newTask);
    form.reset();
  });
};


export const addToPage = (userName) => {
  const getLocal = getStorage(userName);
  getLocal.forEach(task => {
    todosWrapper.append(createTask(task));
  });
};

export const checkCompleted = () => {
  todosWrapper.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    if (target === btnComlete) {
      todoItem.classList.add('completed');
    }
  });
};
