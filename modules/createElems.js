

export const newTask = {
  description: '',
  completed: '',
};

export const createTask = (obj) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent = obj.description;
  todoItem.append(description);

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  todoItem.append(buttons);

  const input = document.createElement('input');
  input.classList.add('btn-complete');
  input.setAttribute('type', 'checkbox');
  buttons.append(input);

  const button = document.createElement('button');
  button.classList.add('btn-delete');
  button.textContent = 'delete';
  buttons.append(button);

  if (obj.completed === true) {
    todoItem.classList.add('checked');
    input.setAttribute('checked', true);
  }
  return todoItem;
};
