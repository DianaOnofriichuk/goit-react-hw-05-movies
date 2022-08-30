const KEY = '4a38965c8274ee66c1019c21406c4653';
export async function getTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    );
    const movies = await response.json();
    return movies.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function searchMovie(movieName) {
  try {
    const response = await fetch(`
  https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${movieName}&language=en-US&page=1&include_adult=false`);
    const movie = await response.json();
    return movie.results;
  } catch (error) {
    console.log(error);
  }
}
export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    const detalis = await response.json();
    return detalis;
  } catch (error) {
    console.log(error);
  }
}
export async function getCast(movieId) {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    const cast = await response.json();
    return cast.cast;
  } catch (error) {
    console.log(error);
  }
}
export async function getReviews(movieId) {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
    const reivews = await response.json();
    return reivews.results;
  } catch (error) {
    console.log(error);
  }
}
