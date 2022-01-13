import './App.css';
import $ from 'jquery'
import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav'
function App() {

  const RightHandler =()=>{
    console.log("RightHandler");
    document.getElementById("main").style.marginLeft = "250px";
  }
  const LeftHandler =()=>{
    console.log("LeftHandler");
    document.getElementById("main").style.marginLeft = "50px";
  }
  return (
    <>
    <div className="App" id='main'>
      <h1>hello</h1>
    </div>

    <SideNav Right={RightHandler} Left={LeftHandler}/>
    </>
    
  );
}

export default App;
