import {newTask} from './createElems.js';
import {createTask} from './createElems.js';
import {getStorage, setStorage, updateLocal} from './serviseStorage.js';
import {
  deskTaskInput,
  form,
  todosWrapper,
} from './getDocElems.js';


export const addUserToLocal = (userName) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (
      deskTaskInput.value.trim() === '' ||
      deskTaskInput.value === undefined ||
      deskTaskInput.value === null
    ) return;
    else {
      newTask.description = deskTaskInput.value.trim();
      updateLocal(userName, newTask);
      addToPage(userName);
      form.reset();
    }
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

    const todoItem = Array.from(todosWrapper.children);

    if (target.classList.contains('btn-complete')) {
      target.closest('.todo-item').classList.toggle('checked');
    }

    if (target.classList.contains('btn-delete')) {
      target.closest('.todo-item').classList.add('delete');
    }

    todoItem.forEach((item, index) => {
      if (item.classList.contains('checked')) {
        const tasks = getStorage(userName);
        tasks[index].completed = true;
        setStorage(userName, tasks);
      }
    });

    todoItem.forEach((item, index) => {
      if (!item.classList.contains('checked')) {
        const tasks = getStorage(userName);
        tasks[index].completed = false;
        setStorage(userName, tasks);
      }
    });

    todoItem.forEach((item, index) => {
      if (item.classList.contains('delete')) {
        const tasks = getStorage(userName);
        tasks.splice(index, 1);
        setStorage(userName, tasks);
        addToPage(userName);
      }
    });
  });
};
