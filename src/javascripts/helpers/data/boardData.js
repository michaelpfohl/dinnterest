import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/boards.json`)
    .then((response) => {
      const dataBoards = response.data;
      const boards = [];
      if (dataBoards) {
        Object.keys(dataBoards).forEach((boardId) => {
          boards.push(dataBoards[boardId]);
        });
      }
      resolve(boards);
    }).catch((error) => reject(error));
});

export default { getBoards };
