import { useContext } from "react";
import MovieSection from "./MovieSection";
import StateContext from "../states/StateContext";
import { MovieSectionProps } from "../types/form";
import { Field } from "formik";

const CategoriesSelector = ({formik}:MovieSectionProps) => {
  const { state } = useContext(StateContext);

  return (
    <MovieSection title="Categories">
      <div className="h-72">
        <div className="gap-1 grid grid-cols-3 overflow-y-auto">
          {state?.categories.map((category, index) => (
            <div key={index}>
              <label>
                <Field type="checkbox" name="movieCategories" value={category} /> {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </MovieSection>
  );
};

export default CategoriesSelector;

