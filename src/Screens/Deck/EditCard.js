import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";
function EditCard(){
    const [form, setForm] = useState({
        id: '',
        front: '',
        back: ''
    });
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const deckId = useParams().deckId;
    const cardId = useParams().cardId;

    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        updateCard(form).then((response) => {
            setForm({
                id: '',
                front: '',
                back: ''
            });
            history.push("/decks/" + deckId);
        });
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setDeck(response);
        });
        readCard(cardId).then((response) => {
            setForm(response);
            setCard(response);
        });
    },[]);

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck.name}</span> /<span> Edit Card {card.id}</span></p>
            </div>

            <h1 className="mb-4">Edit Card</h1>

            <CardForm setForm={setForm} handleSubmit={handleSubmit} deckId={deckId} form={form}/>
        </section>
    );
}

export default EditCard;