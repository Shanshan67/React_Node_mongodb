import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

function GoalForm() {
    const [text,setText] = useState('')

    const dispatch = useDispatch()
    
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">goal</label>
                    <input type="text" name='text' id="text" value={text}
                        onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit" >
                        add goal
                    </button>
                </div>
            </form>
        </section>
    )
}

export default GoalForm