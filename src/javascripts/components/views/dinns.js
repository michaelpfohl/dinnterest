import dinnsData from '../../helpers/data/dinnsData';
import card from '../cards/dinnCard';

const dinnsView = () => {
  dinnsData.getDinns().then((response) => {
    response.forEach((item) => {
      if (response.length) {
        $('#app').append(card.dinnMaker(item));
      } else {
        $('#app').append('<h2>NO DINNS!</h2>');
      }
    });
  });
};

export default { dinnsView };
