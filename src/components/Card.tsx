import  { useState } from 'react'; 
import '../App.css';

const Card = () => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card-container">
            <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className="card-front">
                    <h2>Recto</h2>
                    <p>Cliquez ici pour retourner la carte.</p>
                </div>
                <div className="card-back">
                    <h2>Verso</h2>
                    <p>Verso de la carte!</p>
                </div>
            </div>
        </div>
    );
};

export default Card;