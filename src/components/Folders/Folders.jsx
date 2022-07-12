import s from './Folders.module.css';
import Navlink from './Navlink/Navlink';
import ButtonAdd from './ButtonAdd/ButtonAdd';

function Folders({ folders, openPopupNewFolder, openPopupRenameFolder }) {
  return (
    <div className={s.folders}>
      <ButtonAdd 
        openPopupNewFolder={openPopupNewFolder}
      />
      {folders.map(folder => 
        <Navlink
          key={folder.name}
          path={folder.name}
          logo={folder.logo} 
          name={folder.name}
          openPopupRenameFolder={openPopupRenameFolder}
        />
      )}
    </div>
  );
}

export default Folders;
