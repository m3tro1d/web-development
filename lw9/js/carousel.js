function run() {
  const nextButton = document.getElementById('movie-carousel__next-btn');
  const prevButton = document.getElementById('movie-carousel__prev-btn');
  const movies = document.querySelectorAll('.movie-container__movie');
  const movieContainer = document.querySelector('.movie-carousel__container');

  const lastMovieIndex = movies.length - 1;
  let currentMovieIndex = 0;

  function nextMovie() {
    movieContainer.removeChild(movies[currentMovieIndex]);
    movieContainer.appendChild(movies[currentMovieIndex]);
    if (currentMovieIndex < lastMovieIndex) currentMovieIndex++;
    else currentMovieIndex = 0;
  }

  function prevMovie() {
    if (currentMovieIndex === 0) {
      currentMovieIndex = lastMovieIndex;
      movieContainer.removeChild(movies[lastMovieIndex]);
      movieContainer.insertBefore(movies[lastMovieIndex], movies[0]);
    } else {
      currentMovieIndex--;
      movieContainer.removeChild(movies[currentMovieIndex]);
      movieContainer.insertBefore(movies[currentMovieIndex], movies[currentMovieIndex + 1]);
    }
  }

  nextButton.addEventListener('click', nextMovie);
  prevButton.addEventListener('click', prevMovie);
}

window.onload = run;
