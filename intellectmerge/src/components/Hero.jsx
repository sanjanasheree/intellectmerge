function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h2>Automated RAG Knowledge Base</h2>

        <p>
          IntellectMerge helps companies preserve employee knowledge
          using Artificial Intelligence and Retrieval-Augmented Generation.
        </p>

        <button>Get Started</button>
        <button className="secondary-btn">Learn More</button>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1170&auto=format&fit=crop"
          alt="AI"
        />

      </div>

    </section>
  )
}

export default Hero