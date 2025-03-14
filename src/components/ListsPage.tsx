
import './../App.css';
import List from './List';
import { Movie } from './../interface/movie'



const ListsPage = ({ movies }: { movies: Movie[] }) => {


    return (
        <div className="container">
            <h1 className="title">All Movies</h1>
            <p>Lights, camera, action! We're thrilled to bring you captivating reviews of the hottest movies you simply must experience. From chart-topping blockbusters to hidden gems, we dive deep into the magic of cinema to uncover what makes these films unforgettable. But wait—there’s more! We add our unique twist, the w3Earth Punch Factor, delivering bold and insightful takes that elevate your viewing experience. This isn’t just about watching movies; it’s about immersing yourself in stories that entertain, inspire, and spark conversations. So, buckle up and explore the must-see titles below. Each one has been thoughtfully handpicked and reviewed with you in mind. Your next movie night is about to get seriously upgraded!</p>
            <hr/>
            <List movies={movies} />
        </div>
    );
};

export default ListsPage;