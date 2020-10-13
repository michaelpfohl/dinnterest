import boardsData from '../../helpers/data/boardData';
import card from '../cards/boardCard';

const boardsView = () => {
  boardsData.getBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>Click Add A Board to Get Started!</h2>');
    }
  });
};

export default { boardsView };
