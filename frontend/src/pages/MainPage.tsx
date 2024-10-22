import ActorSelector from "../components/ActorSelector";
import CategoriesSelector from "../components/CategoriesSelector";
import MetadataSection from "../components/MetadataEditor";
import MovieList from "../components/MovieList";

const MainPage = () => {
    return (
      <>
        <div className="flex">
          <div className="my-2 w-3/5">
          <MovieList />
          </div>
                <div className="my-2 w-2/5">
                <MetadataSection />
                </div>
        </div>
  
        <div className="flex">
                <div className="my-2 w-1/2">
                <ActorSelector />
                </div>
                <div className="my-2 w-1/2">
                <CategoriesSelector />
                </div>
        </div>
      </>
    );
  };
  
  export default MainPage;