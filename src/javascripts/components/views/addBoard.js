import form from '../forms/addBoard';

const addBoardView = (userObj) => {
  $('#app').html('<div id="board-form">Put board form here</div>');
  form.boardForm(userObj);
};

export default { addBoardView };
