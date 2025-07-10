const movieReviewData = [
  [
    {
        "id": "tt0111161",
        "title": "The Shawshank Redemption",
        "content": "Nice movie about hope and friendship, set in a prison environment. The performances by Tim Robbins and Morgan Freeman are outstanding.",
        "rating": 9.3,
        "reviewer": "John Doe",
        "on": 1718508747000
    },
    {
        "id": "tt0111161",
        "title": "The Shawshank Redemption",
        "content": "A masterpiece of storytelling and character development, showcasing the resilience of the human spirit.",
        "rating": 9.2,
        "reviewer": "Jane Smith",
        "on": 1718508748000
    }
  ],
  [
    {
        "id": "tt0071562",
        "title": "The Godfather: Part II",
        "content": "A sequel that explores the early life of Vito Corleone and the rise of his son Michael as the new Don",
        "rating": 9.0,
        "reviewer": "Alice Johnson",
        "on": 1718508749000
    }
  ]
];

export function getMovieReviewsData() {
  return movieReviewData;
}