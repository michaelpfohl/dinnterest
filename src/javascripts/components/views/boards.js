import boardsData from '../../helpers/data/boardData';
import card from '../cards/boardCard';

const boardsView = () => {
  boardsData.getBoards().then((response) => {
    response.forEach((item) => {
      if (response.length) {
        $('#app').append(card.boardMaker(item));
      } else {
        $('#app').append('<h2>NO BOARDS!</h2>');
      }
    });
  });
};

export default { boardsView };
