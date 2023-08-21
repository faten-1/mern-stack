import React, { useState } from 'react';



const ColorInput = (props) => {
    const [color, setColor] = useState("");
    const [hight, setHight] = useState(0);
    // what is the meaning of the line above
    const { boxArray, setBoxArray } = props
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray([...boxArray, {
            color:color,
            hight:hight+"px"
    }])
        
        
        setColor("")
        setHight(0);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div >
                <h1>Color</h1>
                <div>
                    <label htmlFor="color">Color</label>
                    <input onChange={(e) => setColor(e.target.value)}
                        value={color} name='color' />
                </div>
                <div>
                    <label htmlFor="hight">Hight</label>
                    <input onChange={(e) => setHight(e.target.value)}
                        value={hight} name='hight' />
                </div>

                <input type="submit" value="Add" />
            </div>
        </form>
    )
}



export default ColorInput
