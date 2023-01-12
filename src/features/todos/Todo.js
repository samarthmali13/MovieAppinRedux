import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, setLoading, setError } from './todoSlice';

const Todo = () => {


    const todos = useSelector(state => state.todos.items);
    const loading = useSelector(state => state.todos.loading);
    const error = useSelector(state => state.todos.error);
    const dispatch = useDispatch();
    const [inp, setInp] = useState('')

    function handleAddTodo() {
        dispatch(addTodo({ text: inp, id: Date.now() }));
    }

    function handleRemoveTodo(id) {
        dispatch(removeTodo({ id }));
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ul>
            <input type='text' value={inp} onChange={e => setInp(e.target.value)} />
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => handleRemoveTodo(todo.id)} >Remove</button>
                </li>
            ))}
            <button onClick={handleAddTodo}>Add Todo</button>
        </ul>
    );
}

export default Todo



