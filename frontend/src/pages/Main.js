import react from "react";
import Header from "../component/common/Header";
import "../styles/Main.css"
import {Link} from 'react-router-dom';


function Main(){
    return(
        <>
        <Header/>
        <div id = "box">
            <a href ="/mind">main</a>
        </div>
        <div id = "box">
            <a href ="/mind">main</a>
        </div>


        <div>
            <Link to='/'>
                <button id="btn"> prev </button>
            </Link>
        </div>
                  
            

    
        
        
        </>
            
            

            
        
    )
}

export default Main;





