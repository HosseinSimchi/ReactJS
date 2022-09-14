// import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'
import {useSearchParams, useLocation, useNavigate} from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();


  function onChangeMethod (event) {
      let search = event.target.value;
      setSearchParams({search})
  }

  function getInformation (event){
    event.preventDefault()
    let userSearch = searchParams.get("search")
    console.log(userSearch);
    navigate("/" + userSearch)
  }

  return (
    <div className="App">
      <form action="/">
        <input type="text" onChange = {onChangeMethod} />
        <input type="submit" onClick = {getInformation} />

      </form>
      <Outlet />
    </div>
  );
}

export default App;
