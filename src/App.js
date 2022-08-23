import './App.css'
import Home from './pages/home/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import LogIn from './pages/login/LogIn';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' >
            <Route index element={<Home/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='users'>
              <Route index element={<List/>}/>
              <Route path=':userId' element={<Single/>}/>
              <Route path='new' element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
     
       
    </div>
  );
}

export default App;
