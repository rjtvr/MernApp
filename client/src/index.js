import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { approute } from './component/RouteFile/AppRoute'
import Home from './component/Home';
import Dashboard from './component/Question/Dashboard';
import AddQuestion from './component/Question/AddQuestion';
import AddTag from './component/Question/AddTag';
console.log(approute)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      
       <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='nav-link' to={approute.Home}>Home</Link> 
        <Link className='nav-link' to={approute.Dashboard}>Dashboard</Link> 
        <Link className='nav-link' to={approute.AddTag}>Add Tag</Link> 
        <Link className='nav-link' to={approute.AddQuestion}>Add Question</Link> 
      </nav>
      </div>
    <Routes>
      <Route path={approute.Home} element={<Home />} />
      <Route path={approute.Dashboard} element={<Dashboard />} />
      <Route path={approute.AddTag} element={<AddTag />} />

      <Route path={approute.AddQuestion} element={<AddQuestion />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
