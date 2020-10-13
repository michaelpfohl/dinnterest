import dinnsData from '../../helpers/data/dinnsData';
import boardData from '../../helpers/data/boardData';

const updateDinnForm = (dinnObj) => {
  console.warn('clicked');
  $('#update-dinn').html(
    `<h2>Update Dinn</h2>
            <div id="success-message"></div>
            <form>
              <div id="error-message"></div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" value="${dinnObj.name}">
              </div>
              <div class="form-group">
                <label for="image">Image</label>
                <input type="text" class="form-control" id="image" value="${dinnObj.image}">
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" value="${dinnObj.description}">
              </div>
              <div class="form-group">
                <label for="link">Link</label>
                <input type="text" class="form-control" id="link" value="${dinnObj.link}">
              </div>
              <div class="form-group">
                <label for="board">Board</label>
                <select class="form-control" id="board">
                  <option value="">Select a Board</option>
                </select>
              </div>
              <button id="update-dinn-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Dinn</button>
            </form>`
  );

  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      console.warn(dinnObj);
      console.warn(item);
      $('select').append(
        `<option value="${item.firebaseKey}" ${
          dinnObj.boardKey === item.firebaseKey ? "selected='selected'" : ''
        }>${item.name}</option>`
      );
    });
  });

  $('#update-dinn-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      description: $('#description').val() || false,
      link: $('#link').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      dinnsData
        .addDinn(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Dinn updated!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
    }
  });
};

export default { updateDinnForm };
