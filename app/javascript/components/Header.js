import React, {useEffect} from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAuthState } from '../redux/auth/authSlice'

function Header() {
  const handlClick = () => {
    const navs=document.getElementById('navs');
    navs.classList.toggle("toggler")
  } 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(clearAuthState());
    localStorage.setItem('token', " ");
    navigate('/');
  };
  return (
    <nav className="header_container">
      <h1 className="header_container_logo">Sema</h1>
      <div className="header_container_all_navs_holder" onClick={handlClick}>
        <figure className="header_container_all_navs_holder_figure">
          <svg
            className="header_container_all_navs_holder_figure_svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2998 7.9668H26.6332"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.2998 15.9668H26.6332"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.2998 23.9668H26.6332"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </figure>
        <ul className="header_container_all_navs_holder_links toggler" id="navs">
        <li className="header_container_all_navs_holder_links_list ">
            <HashLink
              className="header_container_all_navs_holder_links_list_a_tag"
              smooth
              to="/"
            >
              Home
            </HashLink>
          </li>
          <li className="header_container_all_navs_holder_links_list not">
            <HashLink 
              smooth
              className="header_container_all_navs_holder_links_list_a_tag"
              to="casenote"
            >
              Case Notes
            </HashLink>
          </li>
          <li className="header_container_all_navs_holder_links_list not">
            <HashLink
              className="header_container_all_navs_holder_links_list_a_tag"
              smooth
              to="journal"
            >
              Journal
            </HashLink>
          </li>
          <li className="header_container_all_navs_holder_links_list not">
            <HashLink className="header_container_all_navs_holder_links_list_a_tag" onClick={handleSubmit} smooth>
              log out
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header