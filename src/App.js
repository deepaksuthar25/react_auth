import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import UserReg from './UserReg';
import UserLogin from './UserLogin';
import NoPage from "./NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route index element={<ListProduct />}></Route>
          <Route path="userReg" element={<UserReg />}></Route>
          <Route path="userLogin" element={<UserLogin />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
