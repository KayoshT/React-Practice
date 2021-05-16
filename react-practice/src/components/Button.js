import Message from './Message'
import {useState} from 'react';

const Button = () => {
    const [toggle, setToggle] = useState(false); 

    console.log(toggle)
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            { toggle && <Message/>}
        </div>
    )
}



 export default Button