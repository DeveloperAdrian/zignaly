import Home from "./pages/Home"
import PhoneDetails from "./components/PhoneDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/details/:id" element= {<PhoneDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
