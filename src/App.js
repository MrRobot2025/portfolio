import NavBar from './components/NavBar/NavBar';
import SideNav from './components/SideNav/SideNav'
import './App.css';
import Hero from './components/HeroSection/Hero';
import About from './components/About/about';
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
    <div id='main'>
      <NavBar/>
      <Hero/>
      <About/>
    </div>
      
  
    
    <SideNav Right={RightHandler} Left={LeftHandler}/>
    </>
    
  );
}

export default App;
