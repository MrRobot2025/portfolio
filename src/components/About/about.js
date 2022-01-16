import "./about.css"
import Rishab from "../../static/image/rishab.jpeg"
const About=()=>{
    return(
        <>  
            <div className="aboutContainer">
                <div className="child left" >
                    <p className="title-ab">⚡ About Me</p>
                    <p>Hey! I'm Rishab Singh, I've been close to a computer since an early age, and been passionate about it ever since.</p>
                    <p>I really liked to build stuff using no-code tools back in 2016, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies. 
                     I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,Open Source
                    and Competitive Programming</p>
                    <p>When I'm not coding I play games with my friends, watch some show on Netflix, or read some books.</p>
                </div>
                <div className="child right">
                    <img className="myimage" src={Rishab}>

                    </img>
                </div>
                
                
            </div>
            
        </>
    );
}

export default About;