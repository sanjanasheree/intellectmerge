import { useState } from 'react'

function KnowledgeForm({ addDocument }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    // Form Validation
    if(title.trim() === "" ||
       description.trim() === ""){

      setError("All fields are required")
      return
    }

    addDocument(title, description)

    setTitle("")
    setDescription("")
    setError("")
  }

  return (

    <section className="knowledge-section">

      <h2>Add Company Knowledge</h2>

      <form
        className="knowledge-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Enter Document Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Knowledge Description"
          value={description}
          onChange={(e)=>
            setDescription(e.target.value)
          }
        ></textarea>

        <button type="submit">
          Add Knowledge
        </button>

      </form>

      {error && <p className="error">{error}</p>}

    </section>
  )
}

export default KnowledgeForm