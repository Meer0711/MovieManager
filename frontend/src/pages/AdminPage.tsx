// Corrected AdminPage
import { Field, Formik, FormikHelpers } from "formik";
import { useContext } from "react";
import StateContext from "../states/StateContext";
import { Actions } from "../types/state";

interface AdminFormValuesType {
  name: string;
  selection: "actor" | "category" | "series" | "studio";
}

const initialValues: AdminFormValuesType = {
  name: "",
  selection: "actor",
};

const AdminPage = () => {
  const { dispatch } = useContext(StateContext);

  const onSubmit = async (
    { name, selection }: AdminFormValuesType,
    helpers: FormikHelpers<AdminFormValuesType>
  ) => {
    switch (selection) {
      case "actor":
        dispatch({
          type: Actions.AddActor,
          payload: name,
        });
        break;

      case "category":
        dispatch({
          type: Actions.AddCategory,
          payload: name,
        });
        break;

      case "series":
            dispatch({
                type: Actions.AddSeries,
                payload: name,
            });
        break;

      case "studio":
            dispatch({
                type: Actions.AddStudio,
                payload: name,
            });
        break;

      default:
        console.error("Unexpected case");
    }

    helpers.setFieldValue("name", "");
  };

  return (
    <div className="border border-black mx-auto p-4 w-max">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label>
                <Field className="mx-1" type="radio" name="selection" value="actor" /> Actor
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="category" /> 
                Category
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="series" /> Series
              </label>
              <label>
                <Field className="mx-1" type="radio" name="selection" value="studio" /> Studio
              </label>
            </div>
            <div className="my-3">
              <Field
                className="border border-black focus:bg-gray-100 px-2 rounded-xl w-full"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="grid mt-3 mx-4">
              <button
                className="bg-green-700 hover:bg-green-600 p-2 text-center text-white tracking-wider font-semibold uppercase"
                type="submit"
              >
                Add {formik.values.selection}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdminPage;
