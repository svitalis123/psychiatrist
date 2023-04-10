import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../redux/journalSlice';
function Journal() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const journals = useSelector((state) => (state.journal.formData ? state.journal.formData :null));
  const user = useSelector((state) => (state.auth.client ? state.auth.client : null));
  console.log("user", user.email + "reservations", journals);
  useEffect(() => {
    dispatch(fetchServices(user.id));
  }, [dispatch]);
  const checkStatus = user.bio === "client"
  useEffect(() => {
    if (checkStatus === false) {
      navigate('/home');
    }
  }, [checkStatus, navigate]);
  // const handleBack = () => {
  //   navigate('/home');
  // };

  if (!journals) {
    return <p>Loading...</p>;
  }
  if (!Object.values(journals).length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button
          type="button"
          className="absolute top-1 left-1 sm:top-4 sm:left-4 hover:bg-indigo-600 text-white bg-green py-1 px-1 sm:py-2 sm:px-4"
          
        >
          &laquo; Go Back
        </button>
        <div className="max-w-md w-full">
          <div className="text-center text-2xl font-bold mb-8">
            <h1 className="text-gray-900">Welcome!</h1>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-center text-gray-700 text-base">
              You have no Journals yet.
            </p>
          </div>
        </div>
      </div>
    );
  }
  // if (!user) {
  //   // redirect to login page
  //   navigate('/');
  // }

  let userJournals = [];

  if (user && journals) {
    userJournals = Object.values(journals).filter(
      (journal) => journal.client_id === user.id,
    );
  }
console.log(userJournals)

  return (
    <main className="journal_container">
      {/* section_one_container */}
      <HashLink className="journal_container_hash_link" smooth to="/journalform">
        Create your own entry
      </HashLink>
      <article className="journal_container_article">
      
        {
          userJournals && userJournals.map((journal) => (
            <section className="journal_container_section_one">
              <h3 className="journal_container_section_one_title">{journal.title}</h3>
              <div className="journal_container_section_one_content">
                <p className="journal_container_section_one_content_p1">
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
              <figure className="journal_container_section_one_figure">
                <img
                  className="journal_container_section_one_figure_img"
                  src="https://img.freepik.com/free-vector/doctor-patient-with-high-fever-characters-vector_53876-175199.jpg?size=626&ext=jpg"
                  alt="Journal Image"
                />
              </figure>
            </section>
            
          ))
        }
      </article>
    </main>
  );
}

export default Journal