import {newTask} from './createElems.js';
import {createTask} from './createElems.js';
import {getStorage, updateLocal} from './serviseStorage.js';
import {
  deskTaskInput,
  form,
  todosWrapper} from './getDocElems.js';


export const addUserToLocal = (userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask.description = deskTaskInput.value;
    updateLocal(userName, newTask);
    addToPage(userName);
    form.reset();
  });
};


export function addToPage(userName) {
  todosWrapper.innerHTML = '';
  const getLocal = getStorage(userName);
  getLocal.forEach(task => {
    todosWrapper.append(createTask(task));
  });
}

export const checkCompleted = () => {
  todosWrapper.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    const todoItem = document.querySelector('.todo-item');
    const btnComlete = document.querySelector('.btn-complete');
    const btnDel = document.querySelector('.btn-delete');


    if (target === btnComlete) {
      todoItem.classList.toggle('completed');
    }
    if (target === btnDel) {

    }
  });
};
