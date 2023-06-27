import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
function EditDeck(){
    const [form, setForm] = useState({
        id: '',
        name: '',
        description: ''
    });
    const history = useHistory();
    const [deck,setDeck] = useState('');
    const deckId = useParams().deckId;

    function handleSubmit(event){
        event.preventDefault();
        updateDeck(form).then((response) => {
            setForm({
                id: '',
                name: '',
                description: ''
            });
            history.push("/decks/"+deckId);
        });
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setForm(response);
            setDeck(response.name);
        });
    },[]);

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck}</span> /<span>Edit Deck</span></p>
            </div>

            <DeckForm setForm={setForm} handleSubmit={handleSubmit} form={form}/>
        </section>
    );
}

export default EditDeck;