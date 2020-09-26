import form from '../forms/addBoard';

const addBoardView = () => {
  $('#app').html('<div id="board-form">Put board form here</div>');
  form.boardForm();
};

export default { addBoardView };
