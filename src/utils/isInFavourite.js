export const isInFavourite = (movieId, favorite) => {
        const movie = favorite.find(movie => parseInt(movie.id) === parseInt(movieId))

        return movie ? true : false
    }