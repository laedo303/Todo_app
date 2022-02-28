import {newTask} from './modules/createElems.js';
import {updateLocal} from './modules/serviseStorage.js';


{
  const init = () => {
    const userName = prompt('Введите логин:').trim();
    console.log('userName: ', userName);

    updateLocal(userName, newTask);

    // _____пробный кусок кода:_______________
    const arr = [];
    console.log('arr: ', arr);
    console.log(newTask);
    newTask.description = 'че за фу..ня';
    newTask.completed = true;
    console.log(newTask);
    arr.push(newTask);
    console.log('arr: ', arr);
    // _______________________________________
  };


  window.todo = init;
}
