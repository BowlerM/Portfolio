import "./Dissertation.css"
import { FaLink } from "react-icons/fa";
import DissertationExample from "../../assets/videos/DissertationExample.mp4"


const Dissertation = () =>{
    
    return(
        <div className="diss-content">
            <h2 className="header-title">Computerised Quoridor With Game Playing AI
                <a className="header-link" href="https://github.com/BowlerM/Quoridor-AI-Dissertation" target="_blank" rel="noopener noreferrer">
                <FaLink />
                </a>
            </h2>
            <p>A computerised version of the board game Quoridor including a minimax AI playing agent.</p>

            <h3>Features</h3>
            <ul>
                <li>A user friendly and easy to use graphical interface delivered through pygame.</li>
                <li>A 2 depth limited minimax search of possible board states optimised using alpha-beta pruning and heuristic based pruning.</li>
                <li>A handcrafted evaluation function used to evaluate board states during minimax search.</li>
                <li>A genetic algorithm based learning system used in train the weights of the features of the evaluation function.</li>
            </ul>

            <h3>Demonstration</h3>
            <video controls muted>
                <source src={DissertationExample} type="video/mp4"/>
                Your browser does not support the video tag
            </video>
        </div>
    );
}

export default Dissertation;