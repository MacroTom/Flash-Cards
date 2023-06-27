import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
function DeckForm({setForm, handleSubmit, form}){
    function handleChange(event){
        setForm((oldValues) => {
            return {...oldValues, [event.target.name]: event.target.value}
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 d-flex flex-column">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="form-control" type="text" placeholder="Deck Name"/>
            </div>
            <div className="mb-4 d-flex flex-column">
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="form-control" placeholder="Brief description of the deck"></textarea>
            </div>
            <div>
                <Link to={`/decks`} className="btn btn-secondary mr-2">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default DeckForm;