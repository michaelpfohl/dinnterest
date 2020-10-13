import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getAllUsers = () => {
  axios
    .get(`${baseURL}/users.json`)
    .then((response) => {
      const dataUsers = response.data;
      const users = [];
      if (dataUsers) {
        Object.keys(dataUsers).forEach((userId) => {
          users.push(dataUsers[userId]);
        });
      }
      return users;
    })
    .catch((error) => console.warn(error));
};

const getUser = (userObj) => {
  axios
    .get(`${baseURL}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios
          .post(`${baseURL}/users.json`, {
            image: userObj.photoURL,
            uid: userObj.uid,
            displayName: userObj.displayName,
            email: userObj.email,
            lastSignIn: userObj.metadata.lastSignInTime,
          })
          .then(console.warn('user added'));
      } else {
        console.warn('user exists');
      }
    });
  return userObj;
};

const getSingleUser = (userUid) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/users.json?orderBy="uid"&equalTo="${userUid}"`)
    .then((response) => {
      const user = Object.values(response.data);
      const thisUser = user[0];
      resolve(thisUser);
    }).catch((error) => reject(error));
});

const setCurrentUser = (userObj) => {
  const user = {
    image: userObj.photoURL,
    uid: userObj.uid,
    name: userObj.displayName,
    email: userObj.email,
    lastSignInTime: userObj.metadata.lastSignInTime,
  };
  return user;
};

export default {
  getUser,
  setCurrentUser,
  getAllUsers,
  getSingleUser,
};
