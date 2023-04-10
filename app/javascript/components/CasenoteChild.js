import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { fetchServices } from '../redux/journalSlice';
import { fetchCases } from '../redux/casenoteSlice';

function CasenoteChild() {
    const journals = useSelector((state) => (state.journal.formData ? state.journal.formData :null));
    const cases = useSelector((state) => (state.casenote.formData ? state.casenote.formData :null));
    const user = useSelector((state) => (state.auth.client ? state.auth.client : null));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const para = useParams();

    useEffect(() => {
        dispatch(fetchServices(user.id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCases());
      }, []);
    if (!journals) {
      return <p>Loading...</p>;
    }

    if (cases === null) {
      return <p>Loading...</p>;
    }
    
    let caseentry = [];
    if (user && cases) {
        caseentry = Object.values(cases).filter(
        (entry) => entry?.client_id === user.id,
        );
    }
    console.log("cases", caseentry);
    
    let userJournals = [];
    if (user && journals) {
      userJournals = Object.values(journals).filter(
        (journal) => journal.id === parseInt(para.id),
      );
    }

    const checkStatus = user.bio === "therapist"
    useEffect(() => {
      if (checkStatus === false) {
        navigate('/home');
      }
    }, [checkStatus, navigate]);
   
    return (
      
        <main className="casenote_container"> {/* section_one_container */}
        <HashLink className="casenote_container_hash_link" smooth to={`/casenoteform/${parseInt(para.id)}/${user.id}`}  >
          Dr create case entry
        </HashLink>
        <article className="casenote_container_article">
        {
            userJournals && userJournals.map((journal) => (
              <section className="casenote_container_section_one">
                <h3 className="casenote_container_section_one_title">{journal.title}</h3>
                <div className="casenote_container_section_one_content">
                  <p className="casenote_container_section_one_content_p1">
                    {
                      journal.content
                    }
                  </p>
                  {/* <p className="journal_container_section_one_content_p1_p2">
                    After my run, I spent some time reading a book and then caught up on
                    some work. In the evening, I met up with some friends and we went to
                    a new restaurant in town. The food was amazing!
                  </p>
                  <p className="journal_container_section_one_content_p3">
                    Overall, it was a great day and I'm looking forward to what tomorrow
                    brings.
                  </p> */}
                </div>
                <figure className="casenote_container_section_one_figure">
                  <img
                    className="casenote_container_section_one_figure_img"
                    src="https://img.freepik.com/free-vector/doctor-patient-with-high-fever-characters-vector_53876-175199.jpg?size=626&ext=jpg"
                    alt="Journal Image"
                  />
                </figure>
                <div className='casenote_container_section_one_casenotes'>
                 <h4 className='casenote_container_section_one_casenotes_h4'>{user.email}</h4>
                {
                    caseentry.map((note)=> (
                            <p className='casenote_container_section_one_casenotes_p'>{note.content}</p>
                    ))
                }
                </div>                
              </section>
              
            ))
          }      
        </article>
      </main>   
    ) 
}

export default CasenoteChild