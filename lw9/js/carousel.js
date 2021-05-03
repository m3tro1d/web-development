const ANIMATION_MS = 800;

const nextButton = document.getElementById('movie-carousel__next-btn');
const prevButton = document.getElementById('movie-carousel__prev-btn');
const movieContainer = document.querySelector('.movie-carousel__container');
const movies = document.querySelectorAll('.movie-container__movie');

function flushCSS() {
  movieContainer.offsetWidth;
}

function setTransition(state) {
  if (state) {
    movieContainer.style.transition = `${ANIMATION_MS/1000}s ease-in-out`;
  } else {
    movieContainer.style.transition = 'none';
  }
  flushCSS();
}

function translateX(offset) {
  movieContainer.style.transform = `translateX(${offset}px)`;
  flushCSS();
}

function moveToLeft() {
  const translateLength = -(movies[0].offsetWidth + 20);
  translateX(translateLength);
}

function moveToZero() {
  translateX(0);
}

window.onload = function() {
  const lastMovieIndex = movies.length - 1;
  let currentMovieIndex = 0;

  function unlisten() {
    nextButton.removeEventListener('click', nextMovie);
    prevButton.removeEventListener('click', prevMovie);
  }

  function listen() {
    nextButton.addEventListener('click', nextMovie);
    prevButton.addEventListener('click', prevMovie);
  }

  function nextMovie() {
    // Animate the transition
    setTransition(true);
    moveToLeft();
    unlisten();

    setTimeout(() => {
      // Rearrange the elements
      movieContainer.removeChild(movies[currentMovieIndex]);
      movieContainer.appendChild(movies[currentMovieIndex]);
      if (currentMovieIndex < lastMovieIndex) currentMovieIndex++;
      else currentMovieIndex = 0;

      // Remove the transition
      setTransition(false);
      moveToZero();
      listen();
    }, ANIMATION_MS);
  }

  function prevMovie() {
    // Rearrange the elements
    if (currentMovieIndex === 0) {
      currentMovieIndex = lastMovieIndex;
      movieContainer.removeChild(movies[lastMovieIndex]);
      movieContainer.insertBefore(movies[lastMovieIndex], movies[0]);
    } else {
      currentMovieIndex--;
      movieContainer.removeChild(movies[currentMovieIndex]);
      movieContainer.insertBefore(movies[currentMovieIndex], movies[currentMovieIndex + 1]);
    }

    // Move for the animation later
    setTransition(false);
    moveToLeft();

    // Animate the transition
    setTransition(true);
    moveToZero();
    unlisten();
    setTimeout(listen, ANIMATION_MS);
  }

  listen();
}
