window.onload=function onloadFunction() {
    fetchTop250Movies();
    fetchTop250TvShows();
    fetchMostPopMovies();
    fetchMostPopTvShows();
}


/* 
        ================================ Top250Movies====================================================
*/
let Top250MoviesArray=[];
let Top250MoviesAlphabeticalOrderId=document.getElementById('Top250MoviesAlphabeticalOrder');
let Top250MoviesRelevanceId=document.getElementById('Top250MoviesRelevance');
let Top250MoviesReleaseDateId=document.getElementById('Top250MoviesReleaseDate');

const fetchTop250Movies=async () => {
    const Top250MoviesUrl='https://imdb-api.com/en/API/Top250Movies/k_b6h37izy';
    const response=await fetch(Top250MoviesUrl);
    const result=await response.json();
    Top250MoviesArray=[...result.items];
    renderTop250Movies(Top250MoviesArray);
}

function RemoveClassAndAttributeTop250Movies() {
    Top250MoviesReleaseDateId.classList.remove('active');
    Top250MoviesReleaseDateId.removeAttribute('aria-current');
    Top250MoviesAlphabeticalOrderId.classList.remove('active');
    Top250MoviesAlphabeticalOrderId.removeAttribute('aria-current');
    Top250MoviesRelevanceId.classList.remove('active');
    Top250MoviesRelevanceId.removeAttribute('aria-current');
}

Top250MoviesRelevanceId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250Movies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    renderTop250Movies(Top250MoviesArray);
})

Top250MoviesAlphabeticalOrderId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250Movies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let lexicographicalArray=[...Top250MoviesArray];
    lexicographicalArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    renderTop250Movies(lexicographicalArray);
})

Top250MoviesReleaseDateId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250Movies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let SortByReleaseDateArray=[...Top250MoviesArray];
    SortByReleaseDateArray.sort(function(a, b) {
        let numberOne=parseInt(a.year, 10);
        let numberTwo=parseInt(b.year, 10);
        if(numberOne<numberTwo) {
            return -1;
        }
        if(numberOne>numberTwo) {
            return 1;
        }
        return 0;
    })
    renderTop250Movies(SortByReleaseDateArray);
})

const renderTop250Movies=(data) => {
    let SearchMovieDiv=document.getElementById('SearchMovieDiv');
    SearchMovieDiv.innerHTML='';
    let Top250MoviesDiv=document.getElementById('Top250MoviesDiv');
    Top250MoviesDiv.innerHTML='';
    data.map((element) => {
        let colDiv=document.createElement('div');
        colDiv.classList.add('col', 'my-2');
        colDiv.innerHTML=`<div class="card h-100">
                            <img src='${element.image}'
                                class="card-img-top rounded my-1" alt='${element.title}'>
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.title}</h5>
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Rank</th>
                                                <td>${element.rank}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Year</th>
                                                <td>${element.year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rating</th>
                                                <td>${element.imDbRating}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
        Top250MoviesDiv.append(colDiv);
    })
}



/* 
        ================================ Top250TvShows ====================================================
*/


let Top250TvShowsArray=[];
let pillsTop250TvShowsTab=document.getElementById('pills-Top250TvShows-tab');
let Top250TvShowsRelevanceId=document.getElementById('Top250TvShowsRelevance');
let Top250TvShowsAlphabeticalOrderId=document.getElementById('Top250TvShowsAlphabeticalOrder');
let Top250TvShowsReleaseDateId=document.getElementById('Top250TvShowsReleaseDate');

const fetchTop250TvShows=async () => {
    const Top250TvShowsUrl='https://imdb-api.com/en/API/Top250TVs/k_b6h37izy';
    const response=await fetch(Top250TvShowsUrl);
    const result=await response.json();
    Top250TvShowsArray=[...result.items];
}

pillsTop250TvShowsTab.addEventListener('click', function() {
    renderTop250TvShows(Top250TvShowsArray);
})

function RemoveClassAndAttributeTop250TvShows() {
    Top250TvShowsReleaseDateId.classList.remove('active');
    Top250TvShowsReleaseDateId.removeAttribute('aria-current');
    Top250TvShowsAlphabeticalOrderId.classList.remove('active');
    Top250TvShowsAlphabeticalOrderId.removeAttribute('aria-current');
    Top250TvShowsRelevanceId.classList.remove('active');
    Top250TvShowsRelevanceId.removeAttribute('aria-current');
}

Top250TvShowsRelevanceId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250TvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    renderTop250TvShows(Top250TvShowsArray);
})

Top250TvShowsAlphabeticalOrderId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250TvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let lexicographicalArray=[...Top250TvShowsArray];
    lexicographicalArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    renderTop250TvShows(lexicographicalArray);
})

Top250TvShowsReleaseDateId.addEventListener('click', function(event) {
    RemoveClassAndAttributeTop250TvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let SortByReleaseDateArray=[...Top250TvShowsArray];
    SortByReleaseDateArray.sort(function(a, b) {
        let numberOne=parseInt(a.year, 10);
        let numberTwo=parseInt(b.year, 10);
        if(numberOne<numberTwo) {
            return -1;
        }
        if(numberOne>numberTwo) {
            return 1;
        }
        return 0;
    })
    renderTop250TvShows(SortByReleaseDateArray);
})

const renderTop250TvShows=(data) => {
    let SearchMovieDiv=document.getElementById('SearchMovieDiv');
    SearchMovieDiv.innerHTML='';
    let Top250TvShowsDiv=document.getElementById('Top250TvShowsDiv');
    Top250TvShowsDiv.innerHTML='';
    data.map((element) => {
        let colDiv=document.createElement('div');
        colDiv.classList.add('col', 'my-2');
        colDiv.innerHTML=`<div class="card h-100">
                            <img src='${element.image}'
                                class="card-img-top rounded my-1" alt='${element.title}'>
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.title}</h5>
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Rank</th>
                                                <td>${element.rank}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Year</th>
                                                <td>${element.year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rating</th>
                                                <td>${element.imDbRating}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
        Top250TvShowsDiv.append(colDiv);
    })
}



/* 
        ================================ MostPopularMovies====================================================
*/



let MostPopMoviesArray=[];
let pillsMostPopMoviesTab=document.getElementById('pills-MostPopMovies-tab');
let MostPopMoviesRelevanceId=document.getElementById('MostPopMoviesRelevance');
let MostPopMoviesAlphabeticalOrderId=document.getElementById('MostPopMoviesAlphabeticalOrder');
let MostPopMoviesReleaseDateId=document.getElementById('MostPopMoviesReleaseDate');

const fetchMostPopMovies=async () => {
    const MostPopMoviesUrl='https://imdb-api.com/en/API/MostPopularMovies/k_b6h37izy';
    const response=await fetch(MostPopMoviesUrl);
    const result=await response.json();
    MostPopMoviesArray=[...result.items];
}

pillsMostPopMoviesTab.addEventListener('click', function() {
    renderMostPopMovies(MostPopMoviesArray);
})


function RemoveClassAndAttributeMostPopMovies() {
    MostPopMoviesReleaseDateId.classList.remove('active');
    MostPopMoviesReleaseDateId.removeAttribute('aria-current');
    MostPopMoviesAlphabeticalOrderId.classList.remove('active');
    MostPopMoviesAlphabeticalOrderId.removeAttribute('aria-current');
    MostPopMoviesRelevanceId.classList.remove('active');
    MostPopMoviesRelevanceId.removeAttribute('aria-current');
}

MostPopMoviesRelevanceId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopMovies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    renderMostPopMovies(MostPopMoviesArray);
})

MostPopMoviesAlphabeticalOrderId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopMovies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let lexicographicalArray=[...MostPopMoviesArray];
    lexicographicalArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    renderMostPopMovies(lexicographicalArray);
})

MostPopMoviesReleaseDateId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopMovies();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let SortByReleaseDateArray=[...MostPopMoviesArray];
    SortByReleaseDateArray.sort(function(a, b) {
        let numberOne=parseInt(a.year, 10);
        let numberTwo=parseInt(b.year, 10);
        if(numberOne<numberTwo) {
            return -1;
        }
        if(numberOne>numberTwo) {
            return 1;
        }
        return 0;
    })
    renderMostPopMovies(SortByReleaseDateArray);
})

const renderMostPopMovies=(data) => {
    let SearchMovieDiv=document.getElementById('SearchMovieDiv');
    SearchMovieDiv.innerHTML='';
    let MostPopMoviesDiv=document.getElementById('MostPopMoviesDiv');
    MostPopMoviesDiv.innerHTML='';
    data.map((element) => {
        let colDiv=document.createElement('div');
        colDiv.classList.add('col', 'my-2');
        colDiv.innerHTML=`<div class="card h-100">
                            <img src='${element.image}'
                                class="card-img-top rounded my-1" alt='${element.title}'>
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.title}</h5>
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Rank</th>
                                                <td>${element.rank}</td>
                                            </tr>
                                             <tr>
                                                <th scope="row">RankChange</th>
                                                <td>
                                                ${parseInt(element.rankUpDown)>=0? Math.abs(Math.abs(element.rankUpDown))+'<i class="fa-solid fa-arrow-up"></i>':Math.abs(Math.abs(element.rankUpDown))+'<i class="fa-solid fa-arrow-down"></i>'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Year</th>
                                                <td>${element.year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rating</th>
                                                <td>${element.imDbRating!==""? element.imDbRating:"8.0"}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
        MostPopMoviesDiv.append(colDiv);
    })
}



/* 
        ================================ MostPopularTvShows====================================================
*/

let MostPopTvShowsArray=[];
let pillsMostPopTvShowsTab=document.getElementById('pills-MostPopTvShows-tab');
let MostPopTvShowsRelevanceId=document.getElementById('MostPopTvShowsRelevance');
let MostPopTvShowsAlphabeticalOrderId=document.getElementById('MostPopTvShowsAlphabeticalOrder');
let MostPopTvShowsReleaseDateId=document.getElementById('MostPopTvShowsReleaseDate');

const fetchMostPopTvShows=async () => {
    const MostPopTvShowsUrl='https://imdb-api.com/en/API/MostPopularTVs/k_b6h37izy';
    const response=await fetch(MostPopTvShowsUrl);
    const result=await response.json();
    MostPopTvShowsArray=[...result.items];
}

pillsMostPopTvShowsTab.addEventListener('click', function() {
    renderMostPopTvShows(MostPopTvShowsArray);
})


function RemoveClassAndAttributeMostPopTvShows() {
    MostPopTvShowsReleaseDateId.classList.remove('active');
    MostPopTvShowsReleaseDateId.removeAttribute('aria-current');
    MostPopTvShowsAlphabeticalOrderId.classList.remove('active');
    MostPopTvShowsAlphabeticalOrderId.removeAttribute('aria-current');
    MostPopTvShowsRelevanceId.classList.remove('active');
    MostPopTvShowsRelevanceId.removeAttribute('aria-current');
}

MostPopTvShowsRelevanceId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopTvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    renderMostPopTvShows(MostPopTvShowsArray);
})

MostPopTvShowsAlphabeticalOrderId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopTvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let lexicographicalArray=[...MostPopTvShowsArray];
    lexicographicalArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    renderMostPopTvShows(lexicographicalArray);
})

MostPopTvShowsReleaseDateId.addEventListener('click', function(event) {
    RemoveClassAndAttributeMostPopTvShows();
    event.target.classList.add('active');
    event.target.setAttribute('aria-current', 'true');
    let SortByReleaseDateArray=[...MostPopTvShowsArray];
    SortByReleaseDateArray.sort(function(a, b) {
        let numberOne=parseInt(a.year, 10);
        let numberTwo=parseInt(b.year, 10);
        if(numberOne<numberTwo) {
            return -1;
        }
        if(numberOne>numberTwo) {
            return 1;
        }
        return 0;
    })
    renderMostPopTvShows(SortByReleaseDateArray);
})

const renderMostPopTvShows=(data) => {
    let SearchMovieDiv=document.getElementById('SearchMovieDiv');
    SearchMovieDiv.innerHTML='';
    let MostPopTvShowsDiv=document.getElementById('MostPopTvShowsDiv');
    MostPopTvShowsDiv.innerHTML='';
    data.map((element) => {
        let colDiv=document.createElement('div');
        colDiv.classList.add('col', 'my-2');
        colDiv.innerHTML=`<div class="card h-100">
                            <img src='${element.image}'
                                class="card-img-top rounded my-1" alt='${element.title}'>
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.title}</h5>
                                <div class="card-text table-responsive">
                                    <table class="table table-hover table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Rank</th>
                                                <td>${element.rank}</td>
                                            </tr>
                                             <tr>
                                                <th scope="row">RankChange</th>
                                                <td>
                                                ${parseInt(element.rankUpDown)>=0? Math.abs(Math.abs(element.rankUpDown))+'<i class="fa-solid fa-arrow-up"></i>':Math.abs(Math.abs(element.rankUpDown))+'<i class="fa-solid fa-arrow-down"></i>'}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Year</th>
                                                <td>${element.year}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Rating</th>
                                                <td>${element.imDbRating!==""? element.imDbRating:"8.0"}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>`;
        MostPopTvShowsDiv.append(colDiv);
    })
}


/* 
        ================================ Search Movies ====================================================
*/

let SearchMovieArray=[];
let SearchMovieInput=document.getElementById('SearchMovieInput');
let SearchMovieButton=document.getElementById('SearchMovieButton');
let pillsMovieSearchId=document.getElementById('pills-MovieSearch');

function RemoveClassAndAttributes() {
    let pillsTop250MoviesTab=document.getElementById('pills-Top250Movies-tab');
    pillsTop250MoviesTab.classList.remove('active');
    pillsTop250MoviesTab.setAttribute('aria-selected', false);
    let pillsTop250TvShowsTab=document.getElementById('pills-Top250TvShows-tab');
    pillsTop250TvShowsTab.classList.remove('active');
    pillsTop250TvShowsTab.setAttribute('aria-selected', false);
    let pillsMostPopMoviesTab=document.getElementById('pills-MostPopMovies-tab');
    pillsMostPopMoviesTab.classList.remove('active');
    pillsMostPopMoviesTab.setAttribute('aria-selected', false);
    let pillsMostPopTvShowsTab=document.getElementById('pills-MostPopTvShows-tab');
    pillsMostPopTvShowsTab.classList.remove('active');
    pillsMostPopTvShowsTab.setAttribute('aria-selected', false);
    document.getElementById('pills-Top250Movies').classList.remove('show', 'active');
    document.getElementById('pills-Top250TvShows').classList.remove('show', 'active');
    document.getElementById('pills-MostPopMovies').classList.remove('show', 'active');
    document.getElementById('pills-MostPopTvShows').classList.remove('show', 'active');
}

SearchMovieButton.addEventListener('click', function(event) {
    event.preventDefault();
    RemoveClassAndAttributes();
    fetchSearchMovies(SearchMovieInput.value.toLowerCase());
    pillsMovieSearchId.classList.add('show', 'active');
    SearchMovieInput.value='';
})

const fetchSearchMovies=async (searchMovie) => {
    const SearchMovieUrl='https://imdb-api.com/en/API/SearchMovie/k_b6h37izy/'+searchMovie;
    const response=await fetch(SearchMovieUrl);
    const result=await response.json();
    SearchMovieArray=[...result.results];
    renderSearchMovies(SearchMovieArray, searchMovie);
}

const renderSearchMovies=(data,movieName) => {
    let SearchMovieDiv=document.getElementById('SearchMovieDiv');
    SearchMovieDiv.innerHTML='';
    data.map((element) => {
        let Movietitle=element.title.toLowerCase();
        if(element.image!==""&&Movietitle.includes(movieName)) {
            let colDiv=document.createElement('div');
            colDiv.classList.add('col', 'my-2');
            colDiv.innerHTML=`<div class="card h-100">
                            <img src='${element.image}'
                                class="card-img-top rounded my-1" alt='${element.title}'>
                            <div class="card-body text-center">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.description}</p>
                            </div>
                        </div>`;
            SearchMovieDiv.append(colDiv);
        }
    })
}
















































