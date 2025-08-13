import { useParams, Link } from 'react-router-dom';
import './profile.css';

function Profile() {
  // Capturar o parâmetro da URL
  const { id } = useParams();

  return (
    <>
        <div className='body'>
        <h1>Perfil do Usuário</h1>
        <p>Visualizando perfil do usuário ID: {id || 'não especificado'}</p>
        
        <div className="navigation">
            <h2>Navegação:</h2>
            <nav>
            <ul>
                <li><Link to="/">Voltar para Home</Link></li>
                <li><Link to="/user">Ir para página de Usuários</Link></li>
            </ul>
            </nav>
        </div>
        </div>
    </>
  );
}

export default Profile;
