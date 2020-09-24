import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../../components/navbar/navbar';
import auth from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').addClass('hide');
      $('#app').html('');
    } else {
      auth.loginButton();
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
    }
  });
  navbar.myNavbar();
};

export default { checkLoginStatus };
