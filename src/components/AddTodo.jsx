import { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [content, setContent] = useState('')

    const handleChange = (e) => {
         setContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(content)
        addTodo({content})
        setContent('')
    }
    return (
        <div>
            <form className="mb-9 flex justify-between w-full" onSubmit={handleSubmit}>
                <input className="required:border-red-500 required rounded-lg p-2 w-3/4 outline-none" required type="text" placeholder="Add new content" onChange={handleChange} value={content}/>
                <button className="text-center w-1/4">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
