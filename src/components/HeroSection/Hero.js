import "./Hero.css"
import github from "../../static/image/github.svg"
import linkedin from "../../static/image/linkedin.svg"
import email from "../../static/image/email.svg"
const Hero = ()=>{
    return(
        <>
            <div className="HeroContainer">
            <p className="intro">Hey there!,I'm</p>
            <p className="Name">Rishabh Singh.</p>
            <p className="des"><span id="soft">Software Engineer.</span> A self-taught developer with an<br></br>interest in Computer Science.</p>
            <p className="status">🚀 Exploring opportunities and side projects.</p>
            <p className="status">🎓 Currently an Informatics Student at Universitas Negeri Surabaya.</p>

            <div className="button-c">
                <div>
                    <img src={github}></img>
                    <a href="#">Github</a>
                </div> 
                <div>
                    <img src={linkedin}></img>
                    <a href="#">Linkedin</a>
                </div> 
                <div>
                    <img src={email}></img>
                    <a href="#">Email</a>
                </div> 
                
                
            </div>


            </div>
        </>
    );
}

export default Hero;