import {addToPage, addUserToLocal, checkCompleted} from './modules/control.js';


{
  const init = () => {
    const userName = prompt('Введите логин:').trim();
    addUserToLocal(userName);
    addToPage(userName);
    checkCompleted();
  };
  window.todo = init;
}
