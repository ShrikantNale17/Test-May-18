import Add from "./components/Add";
import List from "./components/List";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Edit from "./components/Edit";


function App() {
  return (
    <BrowserRouter>
    <div className="bg-light">
      {/* <List/> */}
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
