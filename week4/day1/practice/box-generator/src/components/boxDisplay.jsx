import React, {useState} from "react";

const ColorBox = (props) => {
    const {boxArray} = props ;
    
    
    return (
        <div> 
            {
                boxArray.map((box,index)=>(
                    <div key={index} style ={{
                        display:"inline-block",
                        margin:"10px",
                        height:box.hight,
                        width:box.hight,
                        backgroundColor:box.color
                    }}>
                    </div>
                ))
            }
            

        </div>
    )
}

export default ColorBox ;