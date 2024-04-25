import { useState, useEffect } from 'react';

const HeaderRerender = () => {
    const [name, setName] = useState("rishabh");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://sum-server.100xdevs.com/todos");
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
        

    return (
        <div>
            <button onClick={() => setName(String(Math.random()))}>Click me to change title</button>
            <p>{`my name is ${name}`}</p>

        </div>
    );
}

export default HeaderRerender;
