 import MovieCard from "../components/movieCard";
 import { useState, useEffect} from "react";
 import { searchMovies } from "../Services/api";
 import { getPupularMovies } from "../Services/api";
 import "../css/Home.css";

 function Home(){
    //0 = the name of the state 1 = the function that i will write, 
    //and after the =  it is the default value of the state
    //const movies = getPupularMovies(); //not good practice because it will be fetching movies each time we gonna re-render the page
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPupularMovies();
                setMovies(popularMovies); 
            }
            catch(err){
                console.log(err);
                setError("Faild to load movies...");
            }
            finally{
                setLoading(false); 
            }
        } 

        loadPopularMovies(); 
    }, []);


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
                { movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    < MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
 }

export default Home; 