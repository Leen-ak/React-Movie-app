 import MovieCard from "../components/movieCard";
 
 function Home(){
    const Movies = [
        {id: 1, title: "Oppenheimer", release_date: "2023"},
        {id: 2, title: "Avatar", release_date: "2022"},
        {id: 3, title: "Dune", release_date: "2021"},
        {id: 4, title: "A Quiet Place Part II", release_date: "2021"},
        {id: 5, title: "Extraction", release_date: "2020"},
    ];

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form OnSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"></input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                { Movies.map((movie) => (
                    < MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
 }

export default Home; 