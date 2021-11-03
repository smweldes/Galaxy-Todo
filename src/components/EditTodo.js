import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link, useParams } from "react-router-dom"
import { toast } from 'react-toastify';


function EditContact() {
    const [ note, setNote] = useState("");
    const { id } = useParams();

    const todos = useSelector(state=>state);
    const currentTodo = todos.find(todo=> todo.id === parseInt(id));

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        if(currentTodo) {
            setNote(currentTodo.note);
       }
    }, [currentTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            id: parseInt(id),
            note,
        };

        dispatch({type: "UPDATE_TODO", payload:data});
        toast.success("Todo Updated successfully!!!");
        history.push("/")
    };

    return (
        <div className="container">
            {currentTodo? (

            
            <>
            <h1 className="display-3 my-5 text-center">
                    Edit Student {id}
                </h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            placeholder="Name" 
                            className="form-control"
                            value={note} 
                            onChange={e=> setNote(e.target.value)}
                            />
                        </div>                        

                        <div className="form-group">
                            <input 
                            type="submit" 
                            placeholder="Update Student" 
                            className="btn btn-dark"
                            />
                            <Link to="/" className="btn btn-danger ml-3">
                                Cancel
                            </Link>
                        </div>
          
                    </form>

                </div>

            </div>
            </>
            ): (
                <h1 className="display-3 my-5 text-center">
                    TODO with id {id} doesn't exist
                </h1>
            )}
        </div>
    )
}

export default EditContact

