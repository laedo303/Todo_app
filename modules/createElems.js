

export const newTask = {
  description: 'привет',
  completed: false,
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
  if (newTask.completed === true) {
    todoItem.classList.add('checked');
  }
  return todoItem;
};

// вызываем после ввода в инпут (вроде бы))
// export const createTemplate = index => `
//   <div class="todo-item ${newTask.completed ? 'checked' : ''}">
//     <div class="description">${newTask.description}</div>
//     <div class="buttons">
//       <input onclick="completeTask(${index})"
//         class="btn-complete" type="checkbox"
//         ${newTask.completed ? 'checked' : ''}>
//       <button onclick="deleteTask(${index})"
//         class="btn-delete">delete</button>
//     </div>
//   </div>
// `;

