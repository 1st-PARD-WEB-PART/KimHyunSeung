import Login from "./pages/login";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div>
     <Routes>
        <Route index element={<Login />} />
        <Route path="/home/:username" element={<Home />} />
        <Route/>
     </Routes>
    </div>
  );
}

export default App;
