import  { useState } from 'react'; 
import './Data';

interface CardI{
    model: string;
    brand: string;
    year: number;
    imgSrc: string;
}

const Card = ({model,brand,year,imgSrc}:CardI ) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card-container">
            <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                <div className="card-front">
                    <img src={imgSrc} alt={model}/>
                    <h2>{model}</h2>
                    <h3>{brand}</h3>
                    <p>Year: {year}</p>
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