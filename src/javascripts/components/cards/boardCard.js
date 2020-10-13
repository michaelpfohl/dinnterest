import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card board-card" style="width: 18rem;" id="${boardObject.firebaseKey}">
    <img class="card-img-top" src="${boardObject.image}" alt="${boardObject.name}">
    <div class="card-body">
      <h5 class="card-title">${boardObject.name}</h5>
      <ul class="boards-btns">
       <li>
        <a href="#" class="btn btn-success nav-item boards-btn" id="dinns-link">View Dinns</a>
        <a href="#" id="${boardObject.firebaseKey}" class="btn btn-danger boards-btn delete-board">Delete Board</a>
       </li>
      </ul>
    </div>
    </div>`;
  $('body').on('click', '.delete-board', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    boardData.deleteBoard(firebaseKey);
  });
  return domString;
};

export default { boardMaker };
