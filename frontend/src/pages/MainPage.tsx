import ActorSelector from "../components/ActorSelector";
import CategoriesSelector from "../components/CategoriesSelector";
import MovieData from "../components/MovieData";
import MovieList from "../components/MovieList";

const MainPage = () => {
    return (
      <>
        <div className="lg:flex">
          <div className="m-2 lg:w-3/5">
          <MovieList />
          </div>
                <div className="m-2 lg:w-2/5">
                <MovieData />
                </div>
        </div>
  
        <div className="lg:flex">
                <div className="m-2 lg:w-1/2">
                <ActorSelector />
                </div>
                <div className="m-2 lg:w-1/2">
                <CategoriesSelector />
                </div>
        </div>
      </>
    );
  };
  
  export default MainPage;