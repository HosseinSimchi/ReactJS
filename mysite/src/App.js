// import logo from './logo.svg';
import './App.css';
import About from './components/about'
import Contact from './components/contact';
import Blog from './components/blog'
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Link to="/about">About Page</Link>
      <hr/>
      <Link to="/contact">contact Page</Link>
      <hr/>
      <Link to="/blog">blog Page</Link>
      <hr/> */}
      <Outlet />
    </div>
  );
}

export default App;
