import React from 'react'
import "./content.css"
const Content = () => {
    return (
        <section>
            <div>
                <form class="form-ide">
                    <div class="code-area">
                        <textarea class="text-area" type="text" rows="40" cols="78"  name="code-area" placeholder="Add your Code here"></textarea>
                    </div>
                    <div class="input-area">
                        <textarea class="text-area" type="text" rows="40" cols="78"  name="code-area" placeholder="Add your Code here"></textarea>
                    </div>
                </form>
                <button class="btn-submit" type="submit">submit</button>
            </div>
        </section>
    )
}

export default Content
