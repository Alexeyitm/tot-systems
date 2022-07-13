import s from './Folders.module.css';
import Folder from './Folder/Folder';
import ButtonAdd from './ButtonAdd/ButtonAdd';

function Folders({ folders, openPopupNewFolder, openPopupRenameFolder }) {
  return (
    <div className={s.folders}>
      <ButtonAdd 
        openPopupNewFolder={openPopupNewFolder}
      />
      {folders.map(folder => 
        <Folder
          key={folder.name}
          path={folder.name}
          logo={folder.logo} 
          name={folder.name}
          custom={folder.custom}
          openPopupRenameFolder={openPopupRenameFolder}
        />
      )}
    </div>
  );
}

export default Folders;
