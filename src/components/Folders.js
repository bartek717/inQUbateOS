import React from 'react';
import Folder from './Folder';
import folderImage from '../images/folder.png';

const folderData = [
  { id: 1, name: 'ELS', link: '/folder1' },
  { id: 2, name: 'EDU', link: '/folder2' },
  { id: 3, name: 'VLS', link: '/folder3' },
  { id: 4, name: 'VMS', link: '/folder4' },
  { id: 5, name: 'CH', link: '/folder5' },
];

function Folders() {
  return (
    <div className="folders">
      <div className="row">
        {folderData.slice(0, 3).map((folder) => (
          <Folder key={folder.id} name={folder.name} link={folder.link} imagePath={folderImage} />
        ))}
      </div>
      <div className="row">
        {folderData.slice(3).map((folder) => (
          <Folder key={folder.id} name={folder.name} link={folder.link} imagePath={folderImage} />
        ))}
      </div>
    </div>
  );
}

export default Folders;
