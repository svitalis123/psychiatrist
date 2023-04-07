import React from 'react';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

function Home() {
  
    const handleDownload = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/clients/show.pdf`, {
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
   
  return (
    <main className="main_app_container">
    {/* first section styling */}
    <section className="main_app_container_first_section">
      <h4 className="main_app_container_first_section_h4_tag">
        You too Got a voice
      </h4>
      <h3 className="main_app_container_first_section_h3_tag">
        My Health is my responsibility and will take note of every step
      </h3>
      <p className="main_app_container_first_section_p_tag">
        Own up and <HashLink className="main_app_container_first_section_p_tag_a" to="/" smooth>Sema 🔊</HashLink>
      </p>
      <button onClick={handleDownload}>Download</button>
    </section>

    {/* end of section one */}

  {/* start of section two */}
    <section className="main_app_container_section_two">
      <div className="main_app_container_section_two_big_holder">
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper_273609-45004.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
        <div className="main_app_container_section_two_big_holder_inner_div">
          <figure className="main_app_container_section_two_big_holder_inner_div_figure">
            <img className="main_app_container_section_two_big_holder_inner_div_figure_img" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg" alt="testimonials" loading="lazy"/>
          </figure>
          <q className="main_app_container_section_two_big_holder_inner_div_quote">
            Since Owning <br/> up my mental health <br/>my whole family as benefited.<br/> Thank you Sema.
          </q>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Home