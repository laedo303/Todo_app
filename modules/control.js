import {newTask} from './createElems.js';
import {createTask} from './createElems.js';
import {deskTaskInput, form, todoItem, todosWrapper} from './getDocElems.js';
import {getStorage, updateLocal} from './serviseStorage.js';


export const addUserToLocal = (userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask.description = deskTaskInput.value;
    updateLocal(userName, newTask);
    form.reset();
  });
};

export const checkCompleted = () => {
  const btnComplete = document.querySelector('btn-complete');
  btnComplete.addEventListener('click', () => {
    todoItem.classList.toggle('.checked');
  });
};


export const addToPage = (userName) => {
  const getLocal = getStorage(userName);
  console.log('getLocal: ', getLocal);
  getLocal.forEach(task => {
    todosWrapper.append(createTask(task));
  });
};
