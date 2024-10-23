import { useReducer } from "react";
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import reducer from "./states/reducer";
import { initialState } from "./states/initialState";
import StateContext from "./states/StateContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import NavBar from "./components/NavBar";



function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <BrowserRouter>
    <StateContext.Provider value={{ state, dispatch }}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />}/>
          </Routes>
      </Container>
      </StateContext.Provider>
      </BrowserRouter>
  );
}

export default App;
