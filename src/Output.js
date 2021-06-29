import React from 'react'
import "./output.css"
const Output = (props) => {
    const s="Loading...";
    return (
        <section class="output-area">
            <div class="output-div">
                <p id="output">{props.result?props.result:s}</p>
            </div>
        </section>
    )
}

export default Output
