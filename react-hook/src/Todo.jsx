import  { useState } from "react";

var counter = 3;
const Todo = () => {
    const [todos, setTodos] = useState([{id:"1", title: "rishabh", description: "chaudhary"}, {id:"2", title: "rishabh", description: "chaudhary"},{id:"3", title: "rishabh", description: "chaudhary"}]);
    const [value, setValue] = useState({
        id: counter++,
        title: "",
        description: "",
    });

    const handleChange = (e) => { 
        const { id, value } = e.target;
        setValue(prevState => ({
            ...prevState,
            [id]: value
        }
        ));
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setTodos([...todos, value]);
        setValue({
            title: "",
            description: "",
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" onChange={handleChange} id="title" placeholder="title" value={value.title} />
                <label htmlFor="description">Description</label>
                <textarea type="textbox" onChange={handleChange} id="description" placeholder="description" value={value.description} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <br />
                <br />
                <h2>Todo List</h2>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <p>Title is {todo.title}</p>
                        <p>Description is {todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
