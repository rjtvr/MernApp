import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Link,Route,Routes} from "react-router-dom";
import { approute } from './component/RouteFile/AppRoute'
import Home from './component/Home';
import QuestionList from './component/Question/QuestionList';
import AddQuestion from './component/Question/AddQuestion';
console.log(approute)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      
       <nav>
        <Link className='head__nav' to={approute.Home}>Home</Link> 
        <Link className='head__nav' to={approute.QuestionList}>Question List</Link> 
        <Link className='head__nav' to={approute.AddQuestion}>Add Question</Link> 
      </nav>
      </div>
    <Routes>
      <Route path={approute.Home} element={<Home />} />
      <Route path={approute.QuestionList} element={<QuestionList />} />
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
