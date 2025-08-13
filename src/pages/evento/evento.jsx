import { useState } from 'react'
import { Link } from 'react-router-dom'
import './evento.css'
import Navbar from '../../components/navbar/navbar'

function Evento() {
  const [evento, setEvento] = useState('');
  const [cantor, setCantor] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [hora, setHora] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tiposIngressos, setTiposIngressos] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de envio do formulário - substituir por chamada API real
    setTimeout(() => {
      const tiposIngressosArray = tiposIngressos.split(',').map(item => item.trim());
      console.log('Evento cadastrado:', { 
        evento, 
        cantor, 
        data, 
        local, 
        hora, 
        descricao, 
        tiposIngressos: tiposIngressosArray 
      });
      setIsLoading(false);
      // Aqui você pode redirecionar ou mostrar uma mensagem de sucesso
      alert('Evento cadastrado com sucesso!');
    }, 1500);
  };
  return (
    <>
      <div className='event-container'>
        <div className='event-content'>
          <div className='event-header'>
            <h1>Cadastrar Novo Evento</h1>
            <p>Preencha os campos abaixo para cadastrar um novo evento</p>
          </div>
          
          <form className='event-form' onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="evento">Nome do evento</label>
                <input 
                  type='text' 
                  id="evento"
                  placeholder="Ex: Show de Rock" 
                  value={evento} 
                  onChange={(e) => setEvento(e.target.value)} 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cantor">Artista / Banda</label>
                <input 
                  type='text' 
                  id="cantor"
                  placeholder="Ex: Nome da Banda" 
                  value={cantor} 
                  onChange={(e) => setCantor(e.target.value)} 
                  required
                />
              </div>
            </div>
            
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="data">Data do evento</label>
                <input 
                  type='date' 
                  id="data"
                  value={data} 
                  onChange={(e) => setData(e.target.value)} 
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor="hora">Horário</label>
                <input 
                  type='time' 
                  id="hora"
                  value={hora} 
                  onChange={(e) => setHora(e.target.value)} 
                  required
                />
              </div>
            </div>

            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor="local">Local do evento</label>
                <input 
                  type='text' 
                  id="local"
                  placeholder="Ex: Allianz Parque - Av. Francisco Matarazzo, 1705" 
                  value={local} 
                  onChange={(e) => setLocal(e.target.value)} 
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor="tiposIngressos">Tipos de Ingressos</label>
                <div className="ticket-types-container">
                  <input 
                    type='text' 
                    id="tiposIngressos"
                    placeholder="Ex: VIP, Pista, Camarote (separados por vírgula)" 
                    value={tiposIngressos} 
                    onChange={(e) => setTiposIngressos(e.target.value)} 
                    required
                  />
                  <small className="form-hint">Separe os diferentes tipos de ingresso por vírgula</small>
                </div>
              </div>
            </div>

            <div className='form-group full-width'>
              <label htmlFor="descricao">Descrição do evento</label>
              <textarea 
                id="descricao"
                rows="4"
                placeholder="Descreva detalhes sobre o evento, atrações, público-alvo..." 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)} 
                required
              />
            </div>
            
            <div className="form-actions">
              <Link to="/eventos">
                <button type="button" className="btn-cancel">Cancelar</button>
              </Link>
              <button 
                type="submit" 
                className="btn-submit"
                disabled={isLoading}
              >
                {isLoading ? 'Cadastrando...' : 'Cadastrar Evento'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Evento
