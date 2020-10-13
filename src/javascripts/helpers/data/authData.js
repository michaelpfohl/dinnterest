import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../../components/navbar/navbar';
import auth from '../../components/auth/auth';
import userData from './userData';
import viewHelper from '../viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#app').html('');
      navbar.myNavbar(currentUser);
      viewHelper.viewListener('boards-link');
    } else {
      auth.loginButton();
      $('#auth').removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
