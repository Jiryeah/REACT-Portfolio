import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {
  // destructure the props
  const { pages = [], setCurrentPage, currentPage, pageSelected, setPageSelected } = props;

  // useEffect + capitalize helper to insure the page selected name is capitalized
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header>
      <h2>Hakuna Matata</h2>
      <nav>
        <ul>
          <li>
            <a href='#about' onClick={() => setPageSelected(false)}>
              About me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
