import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";
function NewCard(){
    const [form, setForm] = useState({
        front: '',
        back: ''
    });
    const [deck, setDeck] = useState({});
    const deckId = useParams().deckId;

    function handleSubmit(event){
        event.preventDefault();
        createCard(deckId,form).then((response) => {
            setForm({
                front: '',
                back: ''
            });
        });
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setDeck(response);
        });
    },[]);

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck.name}</span> /<span> Add Card</span></p>
            </div>

            <h2 className="mb-4">{deck.name}: Add Card</h2>

            <CardForm setForm={setForm} handleSubmit={handleSubmit} deckId={deckId} form={form}/>
        </section>
    );
}

export default NewCard;