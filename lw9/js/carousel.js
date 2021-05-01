function setTransition(element, state) {
  if (state) {
    element.style.transition = '1s ease-in-out';
  } else {
    element.style.transition = 'none';
  }
}

function translateX(element, offset) {
  element.style.transform = `translateX(${offset}px)`;
}

function flushCSS(element) {
  element.offsetWidth;
}

window.onload = function() {
  const nextButton = document.getElementById('movie-carousel__next-btn');
  const prevButton = document.getElementById('movie-carousel__prev-btn');
  const movies = document.querySelectorAll('.movie-container__movie');
  const movieContainer = document.querySelector('.movie-carousel__container');

  const lastMovieIndex = movies.length - 1;
  let currentMovieIndex = 0;

  function nextMovie() {
    // Animate the transition
    setTransition(movieContainer, true);
    const translateLength = -(movies[0].offsetWidth + 20);
    translateX(movieContainer, translateLength);
    nextButton.removeEventListener('click', nextMovie);
    prevButton.removeEventListener('click', prevMovie);

    setTimeout(() => {
      // Rearrange the elements
      movieContainer.removeChild(movies[currentMovieIndex]);
      movieContainer.appendChild(movies[currentMovieIndex]);
      if (currentMovieIndex < lastMovieIndex) currentMovieIndex++;
      else currentMovieIndex = 0;

      // Remove the transition
      setTransition(movieContainer, false);
      translateX(movieContainer, 0);
      nextButton.addEventListener('click', nextMovie);
      prevButton.addEventListener('click', prevMovie);
    }, 1000);
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
    setTransition(movieContainer, false);
    const translateLength = -(movies[0].offsetWidth + 20);
    translateX(movieContainer, translateLength);

    // Animate the transition
    flushCSS(movieContainer);
    setTransition(movieContainer, true);
    translateX(movieContainer, 0);
    nextButton.removeEventListener('click', nextMovie);
    prevButton.removeEventListener('click', prevMovie);

    setTimeout(() => {
      setTransition(movieContainer, false);
      nextButton.addEventListener('click', nextMovie);
      prevButton.addEventListener('click', prevMovie);
    }, 1000);
  }

  nextButton.addEventListener('click', nextMovie);
  prevButton.addEventListener('click', prevMovie);
}
