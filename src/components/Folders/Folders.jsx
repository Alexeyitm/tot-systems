import s from './Folders.module.css';
import Folder from './Folder/Folder';
import ButtonAdd from './ButtonAdd/ButtonAdd';

function Folders({ folders, openPopupNewFolder, openPopupRenameFolder, 
  openPopupDeleteFolder, setIsCurrentFolderRename, setIsCurrentFolderDelete }) {

  return (
    <div className={s.folders}>
      <ButtonAdd 
        openPopupNewFolder={openPopupNewFolder}
      />
      {folders.map(folder => 
        <Folder
          folder={folder}
          key={folder.id}
          openPopupRenameFolder={openPopupRenameFolder}
          openPopupDeleteFolder={openPopupDeleteFolder}
          setIsCurrentFolderRename={setIsCurrentFolderRename}
          setIsCurrentFolderDelete={setIsCurrentFolderDelete}
        />
      )}
    </div>
  );
};

export default Folders;
