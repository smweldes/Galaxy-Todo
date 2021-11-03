import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddTodo() {
    const [note, setNote] = useState("");
    
    const todos = useSelector((state) => state);
    const dispatch = useDispatch()

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

       
        const data = {
            id: todos[todos.length - 1].id + 1,
            note,
            
        };

        dispatch({type: "ADD_TODO", payload:data});
        toast.success("Todo added successfully!!!");
        history.push("/")
    };
    return (
        <div className="container">
            <h1 className="display-3 text-center">Add Todo</h1>
                <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" >
                            <input type="text" placeholder="Note" 
                            className="form-control"
                            value={note} onChange={e=> setNote(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <input type="submit" 
                            placeholder="Add Student" 
                            className="btn btn-block btn-dark"/>
                        </div>
                        
                    </form>

                </div>

            </div>
            
        </div>
    )
}

export default AddTodo;
