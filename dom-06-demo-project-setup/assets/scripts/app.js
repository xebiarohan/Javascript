const startAddMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
//const backdrop = document.body.firstElementChild;
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.querySelector('#add-modal button');
const confirmAddMovirBtn = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (id) => {
    //const movie = movies.filter(movie => movie.id === id);
    let movieIndex  = 0;
    for (movie of movies) {
        if(movie.id === id) {
            break;
        }
        movieIndex++;
    }

    movies.splice(movieIndex,1);
    const list = document.getElementById('movie-list');
    list.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement('l1');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class='movie-element__image'>
        <img src='${image}' alt='${title}'>
    </div>
    <div class='movie-element__info'>
        <h2>${title}</h2>
        <p>${rating}/5</p>
    <div>
    `;
  newMovieElement.addEventListener(
    'click',
    deleteMovieHandler.bind(null, id)
  );
  const list = document.getElementById('movie-list');
  list.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModel = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModel();
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

const clearMovieInputs = () => {
  userInputs.forEach((input) => {
    input.value = '';
  });
};

const addMovieClickHandler = () => {
  const title = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    title.trim() === '' ||
    imageUrl.trim() === '' ||
    rating.trim() === '' ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert('Please enter valid values (Rating 1 to 5)');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: title,
    iamge: imageUrl,
    rating: rating,
  };

  movies.push(newMovie);
  toggleMovieModel();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.iamge,
    newMovie.rating
  );
  updateUI();
};

startAddMovieBtn.addEventListener('click', toggleMovieModel);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
confirmAddMovirBtn.addEventListener('click', addMovieClickHandler);
