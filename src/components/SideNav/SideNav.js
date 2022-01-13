import "./SideNav.css"
import $ from 'jquery'
import home from "../../static/image/home.svg"
import Project from "../../static/image/project.svg"
import Blog from "../../static/image/pen.svg"
import Book from "../../static/image/booksss.svg"



const SideNav = (props) =>{
    let value = 2;
    const OnClickHandler=()=>
    {   
        console.log(value);
        value++;
        console.log("Yep!!!!");
        $(".mobile-nav").toggleClass("js--mobile");

        if(value%2!=0)
        {
            document.getElementById("mySidenav").style.width = "250px";
        }
        if(value%2==0)
        {
            document.getElementById("mySidenav").style.width = "50px";
        }

            
    }
    

    return(
    <>
        <div id="mySidenav" className="sidenav">
            <div className="mobile-nav" onClick={OnClickHandler}>
                <div className="mobile-nav_first-line"></div>
                <div className="mobile-nav_second-line"></div>
                <div className="mobile-nav_third-line"></div>
            </div>

            <div className="links">
                <div>
                    <img src={home}></img>
                    <a href="#">Home</a>
                </div>
                <div>
                    <img src={Project}></img>
                    <a href="#">Projects</a>
                </div>
                <div>
                    <img src={Book}></img>
                    <a href="#">Library</a>
                </div>
                <div>
                    <img src={Blog}></img>
                    <a href="#">Blog</a>
                </div>
            </div>
               
            
        </div>
                
        
    </>
    );
}

export default SideNav;