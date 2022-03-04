import {addToPage, addUserToLocal, controlTask} from './modules/control.js';


{
  const init = () => {
    const userName = prompt('Введите логин:').trim();
    addUserToLocal(userName);
    addToPage(userName);
    controlTask(userName);
  };
  window.todo = init;
}
