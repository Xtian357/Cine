// Movie Data
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi, Thriller",
        cast: "Leonardo DiCaprio, Tom Hardy, Ellen Page",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        poster: "public/images/Inception.jpg",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        type: "movie"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action, Crime, Drama",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests.",
        poster: "public/images/Dark-knight.jpg",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        type: "movie"
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: "Sci-Fi, Drama",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "public/images/Interstellar.jpg",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        type: "movie"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: "Crime, Drama",
        cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence.",
        poster: "public/images/pulp-fiction.jpg",
        trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        type: "movie"
    },
    {
        id: 5,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi, Action",
        cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        poster: "public/images/matrix.jpg",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        type: "movie"
    },
    {
        id: 6,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        genre: "Crime, Drama, Thriller",
        cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
        description: "A chemistry teacher diagnosed with cancer turns to manufacturing meth to secure his family's future.",
        poster: "public/images/breaking-bad.jpg",
        trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        type: "series"
    },
    {
        id: 7,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: "Drama, Fantasy, Horror",
        cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
        description: "When a young boy disappears, a small town uncovers a mystery involving secret experiments and supernatural forces.",
        poster: "public/images/stranger-things.jpg",
        trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        type: "series"
    },
    {
        id: 8,
        title: "Game of Thrones",
        year: 2011,
        rating: 9.2,
        genre: "Action, Adventure, Drama",
        cast: "Emilia Clarke, Peter Dinklage, Kit Harington",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns.",
        poster: "public/images/game-of-thrones.jpg",
        trailer: "https://www.youtube.com/watch?v=rlR4PJn8b8I",
        type: "series"
    },
    {
        id: 9,
        title: "The Witcher",
        year: 2019,
        rating: 8.2,
        genre: "Action, Adventure, Fantasy",
        cast: "Henry Cavill, Anya Chalotra, Freya Allan",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people are more wicked.",
        poster: "public/images/witcher.jpg",
        trailer: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
        type: "series"
    },
    {
        id: 10,
        title: "The Crown",
        year: 2016,
        rating: 8.6,
        genre: "Biography, Drama, History",
        cast: "Claire Foy, Olivia Colman, Imelda Staunton",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the 20th century.",
        poster: "public/images/crown.jpg",
        trailer: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
        type: "series"
    },
    {
        id: 11,
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genre: "Action, Adventure, Sci-Fi",
        cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        description: "After Thanos's devastating snap, the Avengers assemble once more to reverse the damage and restore balance.",
        poster: "public/images/avengers-endgame.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        type: "movie"
    },
    {
        id: 12,
        title: "Parasite",
        year: 2019,
        rating: 8.6,
        genre: "Comedy, Drama, Thriller",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        description: "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        poster: "public/images/parasite.jpg",
        trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
        type: "movie"
    },
    {
        id: 13,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
        cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
        description: "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.",
        poster: "public/images/shawshank.jpg",
        trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        type: "movie"
    },
    {
        id: 14,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: "Drama, Romance",
        cast: "Tom Hanks, Robin Wright, Gary Sinise",
        description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "public/images/forrest-gump.jpg",
        trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        type: "movie"
    },
    {
        id: 15,
        title: "The Mandalorian",
        year: 2019,
        rating: 8.7,
        genre: "Action, Adventure, Sci-Fi",
        cast: "Pedro Pascal, Katee Sackhoff, Carl Weathers",
        description: "A lone bounty hunter makes his way through the outer reaches of the galaxy, far from the New Republic.",
        poster: "public/images/mandalorian.jpg",
        trailer: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
        type: "series"
    },
    {
        id: 16,
        title: "The Last of Us",
        year: 2023,
        rating: 8.8,
        genre: "Action, Adventure, Drama",
        cast: "Pedro Pascal, Bella Ramsey, Anna Torv",
        description: "20 years after a fungal outbreak, a survivor is hired to smuggle a 14-year-old girl out of an oppressive quarantine zone.",
        poster: "public/images/last-of-us.jpg",
        trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM",
        type: "series"
    },
    {
        id: 17,
        title: "Wednesday",
        year: 2022,
        rating: 8.1,
        genre: "Comedy, Fantasy, Mystery",
        cast: "Jenna Ortega, Gwendoline Christie, Riki Lindhome",
        description: "Wednesday Addams investigates a murder spree while navigating new relationships at Nevermore Academy.",
        poster: "public/images/wednesday.jpg",
        trailer: "https://www.youtube.com/watch?v=Di310WS8zLk",
        type: "series"
    },
    {
        id: 18,
        title: "House of the Dragon",
        year: 2022,
        rating: 8.5,
        genre: "Action, Adventure, Drama",
        cast: "Matt Smith, Emma D'Arcy, Olivia Cooke",
        description: "An internal succession war within House Targaryen 200 years before Game of Thrones.",
        poster: "public/images/house-of-dragon.jpg",
        trailer: "https://www.youtube.com/watch?v=DotnJ7tTA34",
        type: "series"
    },
    {
        id: 19,
        title: "Peaky Blinders",
        year: 2013,
        rating: 8.8,
        genre: "Crime, Drama",
        cast: "Cillian Murphy, Paul Anderson, Sophie Rundle",
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
        poster: "public/images/peaky-blinders.jpg",
        trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        type: "series"
    },
    {
        id: 20,
        title: "Dune",
        year: 2021,
        rating: 8.0,
        genre: "Action, Adventure, Drama",
        cast: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
        description: "Paul Atreides arrives on Arrakis and unites with the Fremen to lead a rebellion against the galactic emperor.",
        poster: "public/images/dune..jpg",
        trailer: "https://www.youtube.com/watch?v=8g18jFHCLXk",
        type: "movie"
    }
];

// Featured movie override (Black Panther)
const featuredMovieOverride = {
    title: "Black Panther",
    year: 2018,
    rating: 7.3,
    genre: "Action, Adventure, Sci-Fi",
    cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
    description: "T'Challa returns to Wakanda to take his rightful place as king while facing powerful enemies.",
    poster: "public/images/black-panther.jpg",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    type: "movie"
};

// State
let currentTab = 'home';

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const featuredSection = document.getElementById('featured-section');
const topMoviesSection = document.getElementById('top-movies-section');
const topSeriesSection = document.getElementById('top-series-section');
const allContentSection = document.getElementById('all-content-section');
const moviesOnlySection = document.getElementById('movies-only-section');
const seriesOnlySection = document.getElementById('series-only-section');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

// Initialize
function init() {
    setupFeaturedMovie();
    renderTopMovies();
    renderTopSeries();
    renderAllContent();
    renderMoviesOnly();
    renderSeriesOnly();
    setupEventListeners();
}

// Setup Featured Movie
function setupFeaturedMovie() {
    // Use override Black Panther instead of movies[0]
    const featured = featuredMovieOverride;
    const posterEl = document.getElementById('featured-poster');
    // If poster file not found, the page will still render — change path if needed
    posterEl.src = featured.poster;
    document.getElementById('featured-title').textContent = featured.title;
    document.getElementById('featured-year').textContent = featured.year;
    document.getElementById('featured-rating').textContent = featured.rating;
    document.getElementById('featured-description').textContent = featured.description;
    document.getElementById('featured-watch').href = featured.trailer;
}

// Create Movie Card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
        <div class="movie-overlay">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-rating">
                    <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>${movie.rating}</span>
                </div>
            </div>
        </div>
    `;
    card.addEventListener('click', () => openModal(movie));
    return card;
}

// Render Functions
function renderTopMovies() {
    const container = document.getElementById('top-movies');
    const topMovies = movies.filter(m => m.type === 'movie').slice(0, 10);
    container.innerHTML = '';
    topMovies.forEach(movie => {
        container.appendChild(createMovieCard(movie));
    });
}

function renderTopSeries() {
    const container = document.getElementById('top-series');
    const topSeries = movies.filter(m => m.type === 'series').slice(0, 10);
    container.innerHTML = '';
    topSeries.forEach(series => {
        container.appendChild(createMovieCard(series));
    });
}

function renderAllContent() {
    const container = document.getElementById('all-content');
    const allContent = [...movies.slice(0, 5), ...movies.slice(5, 10)];
    container.innerHTML = '';
    allContent.forEach(item => {
        container.appendChild(createMovieCard(item));
    });
}

function renderMoviesOnly() {
    const container = document.getElementById('movies-only');
    const moviesOnly = movies.filter(m => m.type === 'movie');
    container.innerHTML = '';
    moviesOnly.forEach(movie => {
        container.appendChild(createMovieCard(movie));
    });
}

function renderSeriesOnly() {
    const container = document.getElementById('series-only');
    const seriesOnly = movies.filter(m => m.type === 'series');
    container.innerHTML = '';
    seriesOnly.forEach(series => {
        container.appendChild(createMovieCard(series));
    });
}

// Modal Functions
function openModal(movie) {
    document.getElementById('modal-poster').src = movie.poster;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-rating').textContent = movie.rating;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-type').textContent = movie.type;
    document.getElementById('modal-genre').textContent = movie.genre;
    document.getElementById('modal-cast').textContent = movie.cast;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('modal-watch').href = movie.trailer;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Tab Switching
function switchTab(tab) {
    currentTab = tab;
    
    // Update nav links
    navLinks.forEach(link => {
        if (link.dataset.tab === tab) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Show/hide sections
    if (tab === 'home') {
        featuredSection.style.display = 'block';
        topMoviesSection.style.display = 'block';
        topSeriesSection.style.display = 'block';
        allContentSection.style.display = 'block';
        moviesOnlySection.style.display = 'none';
        seriesOnlySection.style.display = 'none';
    } else if (tab === 'movies') {
        featuredSection.style.display = 'none';
        topMoviesSection.style.display = 'none';
        topSeriesSection.style.display = 'none';
        allContentSection.style.display = 'none';
        moviesOnlySection.style.display = 'block';
        seriesOnlySection.style.display = 'none';
    } else if (tab === 'series') {
        featuredSection.style.display = 'none';
        topMoviesSection.style.display = 'none';
        topSeriesSection.style.display = 'none';
        allContentSection.style.display = 'none';
        moviesOnlySection.style.display = 'none';
        seriesOnlySection.style.display = 'block';
    }
}

// Event Listeners
function setupEventListeners() {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            switchTab(link.dataset.tab);
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Start the app
init();
