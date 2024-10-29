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
                   <img id='car-pic' src={imgSrc} alt={model}/>
                </div>
                <div className="card-back">
                     
                    <h2 id='car-model'>{model}</h2>
                    <h3 id='car-brand'>{brand}</h3>
                    <p id='car-year'>Year: {year}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;