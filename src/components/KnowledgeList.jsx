import KnowledgeItem from './KnowledgeItem'

function KnowledgeList({ documents, deleteDocument }) {

  return (

    <section className="knowledge-list">

      <h2>Knowledge Base</h2>

      {
        documents.map((doc)=>(
          <KnowledgeItem
            key={doc.id}
            doc={doc}
            deleteDocument={deleteDocument}
          />
        ))
      }

    </section>
  )
}

export default KnowledgeList