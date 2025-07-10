import { getMovieReviewsData } from "./data.js";

function init(){
    const movieReviewData = getMovieReviewsData();
    printStatistics(movieReviewData);
    paintMovieData(movieReviewData);
}

function printStatistics(movieReviewData){

    const flatReviewsData = movieReviewData.flat();

    const totalMovies = movieReviewData.length;
    const totalReviews = flatReviewsData.length;
    const totalRating = flatReviewsData.reduce((acc, item) => 
    { 
        return acc + item.rating;      
    },
    0);
    const avaRating = (totalRating / totalReviews).toFixed(2);

    const totalMoviesEL = document.getElementById("tMoviesID");
    addStat (totalMoviesEL, totalMovies);

    const totalRatingEL = document.getElementById("tAvgID");
    addStat (totalRatingEL, avaRating);

    const totalReviewsEL = document.getElementById("tRevID");
    addStat (totalReviewsEL, totalReviews);

}
function addStat(element, value) {
    const spanEL = document.createElement("span");
    spanEL.classList.add("text-3xl");
    spanEL.innerText = value;
    element.appendChild(spanEL);
}

function paintMovieData(movieReviewData) {
    const flatReviewsData = movieReviewData.flat();
    const movieListEL = document.querySelector("#movieListID ul");



    flatReviewsData.map((movie) => {
        const liEL = document.createElement("li");
        liEL.classList.add("card","my-2", "p-2");

        const titleEL = document.createElement("p");
        titleEL.classList.add("text-2xl", "mb-2");
        titleEL.innerText = `${movie.title} - ${movie.rating}`;
        liEL.appendChild(titleEL);

        const reviewEL = document.createElement("p");
        reviewEL.classList.add("mx-2", "mb-2");
        reviewEL.innerText = movie.content;
        liEL.appendChild(reviewEL);

        const byEL = document.createElement("p");
        byEL.classList.add("mx-2", "mb-2");
        byEL.innerText = `By ${movie.reviewer} on ${new Intl.DateTimeFormat('el-BD').format(movie.on)}`;
        liEL.appendChild(byEL);

        movieListEL.appendChild(liEL);
    });
}

init();