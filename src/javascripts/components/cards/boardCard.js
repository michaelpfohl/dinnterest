const boardMaker = (boardObject) => {
  const domString = `<div class="card board-card" style="width: 18rem;" id="${boardObject.id}">
    <img class="card-img-top" src="${boardObject.image}" alt="${boardObject.name}">
    <div class="card-body">
      <h5 class="card-title">${boardObject.name}</h5>
      <ul class="boards-btns">
       <li>
        <a href="#" class="btn btn-success nav-item boards-btn">View Dinns</a>
        <a href="#" class="btn btn-danger nav-item boards-btn">Delete Board</a>
       </li>
      </ul>
    </div>
    </div>`;
  return domString;
};

export default { boardMaker };
