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

const addBoard = (data) => axios.post(`${baseURL}/boards.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseURL}/boards/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const deleteBoard = (firebaseKey) => {
  axios.delete(`${baseURL}/boards/${firebaseKey}.json`);
};

export default { getBoards, addBoard, deleteBoard };
