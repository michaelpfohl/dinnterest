import addBoard from '../components/views/addBoard';
import boards from '../components/views/boards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'boards-link':
      return boards.boardsView();
    case 'add-board-link':
      return addBoard.addBoardView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
