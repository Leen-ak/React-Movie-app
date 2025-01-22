 import MovieCard from "../components/movieCard";
 import {useState} from "react"

 function Home(){
    //0 = the name of the state 1 = the function that i will write, 
    //and after the =  it is the default value of the state
    const [searchQuery, setSearchQuery] = useState("");
    
    const Movies = [
        {id: 1, title: "Oppenheimer", release_date: "2023"},
        {id: 2, title: "Avatar", release_date: "2022"},
        {id: 3, title: "Dune", release_date: "2021"},
        {id: 4, title: "A Quiet Place Part II", release_date: "2021"},
        {id: 5, title: "Extraction", release_date: "2020"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();

    }

    return (
        <div className="home">
            <form OnSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                > 
                </input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                { Movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    < MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
 }

export default Home; 