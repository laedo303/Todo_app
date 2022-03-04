import {newTask} from './createElems.js';
import {createTask} from './createElems.js';
import {getStorage, updateLocal} from './serviseStorage.js';
import {
  deskTaskInput,
  form,
  todosWrapper,
} from './getDocElems.js';


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

export const controlTask = (userName) => {
  todosWrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('btn-complete')) {
      target.closest('.todo-item').classList.toggle('checked');
      const tasks = getStorage(userName);
      console.log('tasks: ', tasks);
    }
    if (target.classList.contains('btn-delete')) {
      target.closest('.todo-item').remove();
    }

    const todoItem = document.querySelectorAll('.todo-item');

    todoItem.forEach((item, index) => {
      console.log('index', index);
    });
  });
};


// осталось сделать localStorage и ограничить ввод пробелов

