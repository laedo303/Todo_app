import {addToPage, addUserToLocal, controlTask} from './modules/control.js';


{
  const init = () => {
    const userName = 'kos'; // prompt('Введите логин:').trim();
    addUserToLocal(userName);
    addToPage(userName);
    controlTask();
  };
  window.todo = init;
}
