import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
function CardForm({setForm, handleSubmit, deckId, form}){

    function handleChange(event){
        setForm((oldValues) => {
            return {...oldValues, [event.target.name]: event.target.value}
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 d-flex flex-column">
                <label>Front</label>
                <textarea name="front" value={form.front} onChange={handleChange} className="form-control" type="text" placeholder="Front side of card"></textarea>
            </div>
            <div className="mb-4 d-flex flex-column">
                <label>Back</label>
                <textarea name="back" value={form.back} onChange={handleChange} className="form-control" type="text" placeholder="Back side of card"></textarea>
            </div>
            <div>
                <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">Done</Link>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    );
}

export default CardForm;