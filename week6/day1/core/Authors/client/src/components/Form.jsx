import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate('/')



    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name });

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name} onChange={(e) => setName(e.target.value)}

                />
                {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
            </p>

            <button type='submit'>Submit</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </form>
    )
}

export default Form