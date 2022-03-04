

export const newTask = {
  description: '',
  completed: '',
};

export const createTask = (obj) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  todoItem.insertAdjacentHTML('beforeend', `
  <div class="description">${obj.description}</div>
  <div class="buttons">
  <input class="btn-complete" type="checkbox">
  <button class="btn-delete">delete</button>
  </div>
  </div>
  `);
  return todoItem;
};
