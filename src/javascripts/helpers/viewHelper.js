import firebase from 'firebase/app';
import addDinn from '../components/views/addDinn';
import addBoard from '../components/views/addBoard';
import boards from '../components/views/boards';
import dinns from '../components/views/dinns';
import userData from './data/userData';
import updateDinn from '../components/views/updateDinnView';

const setUser = () => new Promise((resolve) => {
  firebase.auth().onAuthStateChanged((user) => {
    const currentUser = userData.setCurrentUser(user);
    resolve(currentUser);
  });
});

const viewHelper = (id, arg) => {
  setUser().then((user) => {
    $('#app').html('');
    switch (id) {
      case 'boards-link':
        return boards.boardsView();
      case 'add-board-link':
        return addBoard.addBoardView(user);
      case 'add-dinn-link':
        return addDinn.addDinnView();
      case 'dinns-link':
        return dinns.dinnsView();
      case 'update-dinns-link':
        return updateDinn.updateDinnView(arg);
      default:
        return console.warn('nothing clicked');
    }
  });
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#dinns-link', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.update-dinn', (e) => {
    const dinnFirebaseKey = e.currentTarget.id;
    viewHelper('update-dinns-link', dinnFirebaseKey);
  });
};

export default { viewListener };
