import React from 'react';
import { Link } from 'gatsby';
import Album from '../_album';

const Filaments = () => (
  <Album>
    <h2>Filaments</h2>
    <ul>
      <li>
        <Link to="/filaments/helix">Helix</Link>
      </li>
      <li>
        <Link to="/filaments/rigor-mortis">Rigor Mortis</Link>
      </li>
    </ul>
  </Album>
);

export default Filaments;
