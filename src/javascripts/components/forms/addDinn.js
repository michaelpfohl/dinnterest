import dinnsData from '../../helpers/data/dinnsData';
import boardData from '../../helpers/data/boardData';

const dinnForm = () => {
  $('#dinn-form').html(
    `<h2>Add A Dinn</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Add a Name!">
            </div>
            <div class="form-group">
              <label for="image">Image</label>
              <input type="text" class="form-control" id="image" placeholder="Add an Image">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" placeholder="Add a Description">
            </div>
            <div class="form-group">
              <label for="link">Link</label>
              <input type="text" class="form-control" id="link" placeholder="Add a Link">
            </div>
            <div class="form-group">
              <label for="board">Board</label>
              <select class="form-control" id="board">
                <option value="">Select a Board</option>
              </select>
            </div>
            <button id="add-dinn-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Dinn</button>
          </form>`
  );
  boardData.getBoards().then((response) => {
    response.forEach((board) => {
      $('select').append(`<option value="${board.uid}">${board.name}</option>`);
    });
    $('#add-dinn-btn').on('click', (e) => {
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
              '<div class="alert alert-success" role="alert">Dinn created!</div>'
            );
          })
          .catch((error) => console.warn(error));
        setTimeout(() => {
          $('#success-message').html('');
        }, 3000);
        $('#name').val('');
        $('#image').val('');
        $('#description').val('');
        $('#link').val('');
      }
    });
  });
};

export default { dinnForm };
