import { Field } from "formik";
import { MovieSectionProps } from "../types/form";
import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";
import { useContext } from "react";
import StateContext from "../states/StateContext";

const MovieData = ({ formik }: MovieSectionProps) => {
  const { state } = useContext(StateContext);
  return (
    <MovieSection title="Movie Data">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            { }
            <div className=" flex flex-col h-64">
              <div>
            <MovieDataFormRow title="Name">
            <Field className="movie-data-input"type="text" name="movieName" />
            </MovieDataFormRow>
            

            <MovieDataFormRow title="Studio">
                  <select className="py-1 rounded-lg w-full"
                   {...formik.getFieldProps("movieStudioId")}
                  >
                  <option value="">None</option>
                  {state?.studios.map((studio, index) => (
                    <option key={index} value={index}>
                      {studio}
                    </option>
                  ))}
                </select>
</MovieDataFormRow>

            

<MovieDataFormRow title="Series">
                  <select className="py-1 rounded-lg w-full"
                   {...formik.getFieldProps("movieSeriesId")}
                  >
                  <option value="">None</option>
                  {state?.series.map((series, index) => (
                    <option key={index} value={index}>
                      {series}
                    </option>
                  ))}
                </select>
</MovieDataFormRow>
            

            <MovieDataFormRow title="Series #">
            <Field className="movie-data-input " type="text" name="movieSeriesNumber" />
                </MovieDataFormRow>
                </div>

            <div className="h-full flex flex-col justify-center">    
            <div className="flex">
              <button className=" movie-data-button bg-green-700 focus:bg-green-600 "type="submit">Update</button>
              <button className=" w-1/2 bg-red-700 focus:bg-red-600 movie-data-button"type="button">Remove</button>
                  </div>
                </div>
                </div>
          </fieldset>
          { }
        </form>
      </div>
    </MovieSection>
  );
};

export default MovieData;







