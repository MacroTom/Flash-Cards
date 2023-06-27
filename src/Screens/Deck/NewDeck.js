import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";
function NewDeck(){
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        createDeck(form).then((response) => {
            setForm({
                name: '',
                description: ''
            });
            history.push("/decks/"+response.id);
        });
    }

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">Create Deck</span></p>
            </div>

            <DeckForm setForm={setForm} handleSubmit={handleSubmit} form={form}/>
        </section>
    );
}

export default NewDeck;