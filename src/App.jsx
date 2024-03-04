import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import  { useSelector } from "react-redux";
import CrudPage from "./pages/CrudPage";

const App = () => {
  const counterState = useSelector((store) => store.counterReducer);

  return (
    <BrowserRouter>
    <div 
    style={{ minHeight:'100vh' }}
    className=
      {counterState.isDarkTheme
        ? 'bg-dark text-white'
        : 'bg-light text-black'
    }>  
    <Header/>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
