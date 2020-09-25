import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

// const getAllUsers = () => {
//     axios.get(`${baseUrl}/users.json`)
//       .then((response) => {
//           const dataUsers = response.data;
//           const users = [];
//           if (dataUsers) {
//               Object.keys(dataUsers).forEach((userId) => {
//                   users.push(dataUsers[farmerId]);
//               });
//           }
//           ResolvePlugin(users);
//       })
//       .catch((error) => console.warn(error));
// };

const getUser = (userObj) => {
  axios
    .get(`${baseURL}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.keys(resp.data).length === 0) {
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
};

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

export default { getUser, setCurrentUser };
