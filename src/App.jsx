import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Workflow from './components/Workflow'

import KnowledgeForm from './components/KnowledgeForm'
import KnowledgeList from './components/KnowledgeList'

import './App.css'

function App() {

  const [documents, setDocuments] = useState([])

  useEffect(() => {

    console.log("Knowledge Base Updated")

  }, [documents])

  const addDocument = (title, description) => {

    const newDocument = {
      id: Date.now(),
      title,
      description
    }

    setDocuments([...documents, newDocument])
  }

  const deleteDocument = (id) => {

    const updatedDocuments =
      documents.filter(doc => doc.id !== id)

    setDocuments(updatedDocuments)
  }

  return (

    <div>

      <Navbar />

      <Hero />

      <Features />

      <Workflow />

      <KnowledgeForm
        addDocument={addDocument}
      />

      <KnowledgeList
        documents={documents}
        deleteDocument={deleteDocument}
      />

      <Footer />

    </div>
  )
}

export default App