import form from '../forms/addDinn';

const addDinnView = () => {
  $('#app').html('<div id="dinn-form">Put dinn form here</div>');
  form.dinnForm();
};

export default { addDinnView };
