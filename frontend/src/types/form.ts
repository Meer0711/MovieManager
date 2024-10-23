import { FormikProps } from "formik";

 export interface MainPageFormValuesType{
    movieId: string | undefined;
    movieName: string | undefined;
    movieStudioId: string | undefined;
    movieSeriesId: string | undefined;
    movieSeriesNumber: string | undefined;
    movieActorAvailableId: string | undefined;
    movieActorSelectedId: string | undefined;
    movieCategories: string[]| undefined ;
}
  
export interface MovieSectionProps{
    formik: FormikProps<MainPageFormValuesType>;
}