import dinnsData from '../../helpers/data/dinnsData';
import form from '../forms/updateDinn';

const updateDinnView = (dinnFirebaseKey) => {
  $('#app').html('<div id="update-dinn">ANYTHING</div>');
  dinnsData.getSingleDinn(dinnFirebaseKey).then((response) => {
    form.updateDinnForm(response);
  });
};

export default { updateDinnView };
