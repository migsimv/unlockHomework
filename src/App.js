import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import QuestionForm from "./pages/QuestionForm";

export default function App() {

      return(
            <div  className="App">

                  <BrowserRouter>
                        <Navbar />
                        <Routes>
                              <Route path="/" element={<Home />}/>
                              <Route  path="/home" element={<Home />} />
                              <Route path="contact" element={<Contact/>} />
                              <Route path="questionForm" element={<QuestionForm/>} />
                        </Routes>
                        <Footer /> 
                  </BrowserRouter>
            </div>
      );
}

