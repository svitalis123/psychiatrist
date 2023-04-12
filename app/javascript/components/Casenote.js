import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { fetchServices } from '../redux/journalSlice';
import axios from 'axios';

function Casenote() {
  const journals = useSelector((state) => (state.journal.formData ? state.journal.formData :null));
  const user = useSelector((state) => (state.auth.client ? state.auth.client : null));
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchServices(user.id));
  }, [dispatch]);

  if (journals === null) {
    return <p>Loading...</p>;
  }

  let userJournals = [];
 
  if (user && journals) {
    userJournals = Object.values(journals);
    // filter(
    //   (journal) => journal?.client_id === user.id,
    // );
  }
  const handleDownload = async () => {
      const response = await axios.get(`postgres://sema:zAK4NXvVWLs3irjaUBgO1ib27nDNpqqi@dpg-cgq0i1m4dad9donv0dj0-a/sema/clients/show.pdf`, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'client.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
  const checkStatus = user.bio === "therapist"
  useEffect(() => {
    if (checkStatus === false) {
      navigate('/home');
    }
  }, [checkStatus, navigate]);

  
  if (userJournals === null) {
    return <p>Loading...</p>;
  }

  console.log("journals to monitor", journals);
 
  return (
    
      <main className="casenote_container"> {/* section_one_container */}
      <button onClick={handleDownload} className="butoon_download">Download</button>
      <article className="casenote_container_article">
      {
          userJournals && userJournals?.map((journal) => (
            <section className="casenote_container_section_one">
              <h3 className="casenote_container_section_one_title">{journal?.title}</h3>
              <div className="casenote_container_section_one_content">
                <HashLink to={`/casenotechild/${journal?.id}`} smooth>
                  <p className="casenote_container_section_one_content_p1">
                    {
                      journal?.content
                    }
                  </p>
                </HashLink>
                
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
            </section>
            
          ))
        }      
      </article>
    </main>   
  ) 
}

export default Casenote