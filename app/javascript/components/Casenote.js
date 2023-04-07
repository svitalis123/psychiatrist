import React from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

function Casenote() {
  return (
    <main className="casenote_container">
    {/* section_one_container */}
    <HashLink className="casenote_container_hash_link" smooth to="/casenoteform">
      Dr create case entry
    </HashLink>
    <article className="casenote_container_article">
    <section className="casenote_container_section_one">
      <h3 className="casenote_container_section_one_title">My First Entry</h3>
      <div className="casenote_container_section_one_content">
        <p className="casenote_container_section_one_content_p1">
          Today, I woke up feeling energized and ready to take on the day. I
          had a healthy breakfast and went for a run in the park.
        </p>
        <p className="casenote_container_section_one_content_p1_p2">
          After my run, I spent some time reading a book and then caught up on
          some work. In the evening, I met up with some friends and we went to
          a new restaurant in town. The food was amazing!
        </p>
        <p className="casenote_container_section_one_content_p3">
          Overall, it was a great day and I'm looking forward to what tomorrow
          brings.
        </p>
      </div>
      <figure className="casenote_container_section_one_figure">
        <img
          className="casenote_container_section_one_figure_img"
          src="https://img.freepik.com/free-vector/doctor-patient-with-high-fever-characters-vector_53876-175199.jpg?size=626&ext=jpg"
          alt="Journal Image"
        />
      </figure>
      <div className='casenote_container_section_one_casenotes'>
        <h4 className='casenote_container_section_one_casenotes_h4'>dr Ipyana</h4>
        <p className='casenote_container_section_one_casenotes_p'>Well received good job</p>
      </div>
     
    </section>
    
    </article>
  </main>
  )
}

export default Casenote