import React from 'react';
import './Folder.css'; 

function Folder({ name, link, imagePath }) {
  return (
    <div className="folder">
      <a href={link}>
        <img src={imagePath} alt={name} />
        <div className="overlay">{name}</div>
      </a>
    </div>
  );
}

export default Folder;
