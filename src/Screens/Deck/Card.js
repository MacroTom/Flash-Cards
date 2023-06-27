import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
function Card({data: cards}){
    const [selectedCard, setSelectedCard] = useState(0);
    const [side, setSide] = useState('front');
    const history = useHistory();

    function handleSelectedCard(current){
        setSelectedCard(current);
        setSide('front');
    }

    function handleNext(){
        let current = selectedCard + 1;
        current < cards.length && handleSelectedCard(current);
    }

    function handleRestart(){
        setSelectedCard(0);
        setSide('front');
    }

    function handleFlip(){
        if(selectedCard < (cards.length - 1)){
            setSide('back')
        }
        else{
            const result = window.confirm("Restart deck?");
            if(result){
                handleRestart();
            }
            else{
                history.push("/");
            }
        }
    }

    

    return (
        <section className="border rounded mb-2 p-4">
            <h3>Card {selectedCard + 1} of {cards.length}</h3>
            <h5 className="mb-4">{cards[selectedCard][side]}</h5>
            <button className="btn btn-secondary mr-2" onClick={handleFlip}>Flip</button>
            {(side === 'back') && (selectedCard < (cards.length - 1)) && <button onClick={handleNext} className="btn btn-primary">Next</button>}
        </section>
    );
}

export default Card;