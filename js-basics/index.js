const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b',
    runningTime: 122,
    studio: 'c'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}