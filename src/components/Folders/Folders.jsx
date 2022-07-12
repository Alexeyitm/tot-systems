import s from './Folders.module.css';
import Navlink from './Navlink/Navlink';
import ButtonAdd from './ButtonAdd/ButtonAdd';

function Folders({ folders }) {
  return (
    <div className={s.folders}>
      <ButtonAdd />
      {folders.map(folder => 
        <Navlink
          key={folder.name}
          path={folder.name}
          logo={folder.logo} 
          name={folder.name}
        />
      )}
    </div>
  );
}

export default Folders;
