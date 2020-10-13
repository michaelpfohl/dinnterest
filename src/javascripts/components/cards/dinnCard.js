import dinnsData from '../../helpers/data/dinnsData';

const dinnMaker = (dinnObject) => {
  const domString = `<div class="card board-card" style="width: 18rem;" id="${dinnObject.firebaseKey}">
      <img class="card-img-top" src="${dinnObject.image}" alt="${dinnObject.name}">
      <div class="card-body">
        <a href="${dinnObject.link}" class="card-title">${dinnObject.name}</a>
        <p>${dinnObject.description}</p>
        <a href="#" id="${dinnObject.firebaseKey}" class="btn btn-warning nav-item boards-btn update-dinn">Update Dinn</a>
        <a href="#" id="${dinnObject.firebaseKey}" class="btn btn-danger nav-item boards-btn delete-dinn">Delete Dinn</a>
      </div>
      </div>`;
  $('body').on('click', '.delete-dinn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    dinnsData.deleteDinn(firebaseKey);
  });
  return domString;
};

export default { dinnMaker };
