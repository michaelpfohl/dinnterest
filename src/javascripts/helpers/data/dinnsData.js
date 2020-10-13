import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getDinns = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/dinns.json`)
    .then((response) => {
      const dataDinns = response.data;
      const dinns = [];
      if (dataDinns) {
        Object.keys(dataDinns).forEach((dinnId) => {
          dinns.push(dataDinns[dinnId]);
        });
      }
      resolve(dinns);
    }).catch((error) => reject(error));
});

const getSingleDinn = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/dinns/${firebaseKey}.json`).then((response) => {
    const thisDinn = response.data;
    resolve(thisDinn);
  }).catch((error) => reject(error));
});

const addDinn = (data) => axios.post(`${baseURL}/dinns.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseURL}/dinns/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const deleteDinn = (firebaseKey) => {
  axios.delete(`${baseURL}/dinns/${firebaseKey}.json`);
};

export default {
  getDinns,
  addDinn,
  deleteDinn,
  getSingleDinn
};
