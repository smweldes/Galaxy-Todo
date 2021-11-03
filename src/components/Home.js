import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {

    const todos = useSelector(state=>state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({type:"DELETE_TODO", payload:id});
        toast.success("Todo deleted successfully!");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Todo
                    </Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Todo List</th>
                                <th scope="col">Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                todos.map((todo, id)=>(
                                   <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{todo.note}</td>
                                    <td>
                                        <Link to={`/edit/${todo.id}`} className="btn btn-small btn-primary">Edit</Link>
                                        <button type="button" onClick={() => deleteContact(todo.id)} className="btn btn-small btn-danger">Delete</button>
                                    </td>
                                   </tr> 
                                ))
                            }
                        </tbody>

                    </table>

                </div>

            </div>
            
        </div>
    )
}

export default Home
