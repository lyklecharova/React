export default function Movie(props){
    return(
        <article>
            <h3>{props.movieData.title}</h3>
            <p>Year:{props.movieData.year}</p>
            <p>Runtime: {props.movieData.runtime}</p>
            <p>Genre: {props.movieData.genres}</p>
            <p>Directior: {props.movieData.director}</p>
            <p>Actors: {props.movieData.actors}</p>
            <p>Plot: {props.movieData.plot}</p>
           
        </article>
    );
}