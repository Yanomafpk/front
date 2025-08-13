import { useParams, Link } from 'react-router-dom';
import './login.css';
import image from'../../assets/image.png'
import logo from'../../assets/logopulse.png'
import { useEffect, useState } from 'react';

function Login() {
  // Capturar o parâmetro da URL
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de login - substituir por chamada API real
    setTimeout(() => {
      console.log('Login com:', { email, password });
      setIsLoading(false);
      // Aqui você pode redirecionar o usuário após o login bem-sucedido
      // navigate('/dashboard');
    }, 1500);
  };


  return (
    <>
      <div className='body-main'>
        <div className='left-content'>
          <form className='login-form' onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input 
                type='email' 
                id="email"
                placeholder="Seu email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            
            <div className='form-group'>
              <label htmlFor="password">Senha</label>
              <input 
                type='password' 
                id="password"
                placeholder="Sua senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            
            <button 
              className='login-button' 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? 'Processando...' : 'Entrar'}
            </button>
            
            <div className='forgot-password'>
              <a href="#">Esqueceu sua senha?</a>
            </div>
          </form>
        </div>
        
        <div className='body'>
          <img src={image} alt='Profile' />
        </div>
      </div>
    </>
  );
}

export default Login;
