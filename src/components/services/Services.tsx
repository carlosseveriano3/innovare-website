import worker from '../../images/icons/worker.png'
import energy from '../../images/icons/energy_transition.png'
import facilities from '../../images/icons/facilities.png'

import "./services.css"

const Services = () => {
  return (
    <section className="services">
      <div className="backgroud-middle-banner">
        <div className='content'>

          <div className='cards worker'>
            <div className='card-content'>
              <div className='background-card'>
              <img src={worker} alt="" />
                <span className='title-worker-desktop'>
                  ENGENHARIA
                </span>
                <span className='title-worker-mobile'>
                  CONSULTORIA, INSPEÇÃO E <br /> PROJETOS
                </span>
                <ul>
                  <li>Gestão de Projetos</li>
                  <li>Avaliações, Planos, Assessoria Técnica</li>
                  <li>Elaboração de Projetos</li>
                  <li>Inspeção Predial e Industrial</li>
                  <li>Perícia de Engenharia</li>
                  <li>Plano de Manutenção</li>
                </ul>
                <button>
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

          <div className='cards energy'>
            <div className='card-content'>
              <div className='background-card'>
                <img src={energy} alt="" />
                <span>
                  CLIMATIZAÇÃO E <br />
                  REFRIGERAÇÃO
                </span>
                <ul>
                  <li>Avaliação em Subestações</li>
                  <li>PIE - Prontuário de Instalações Elétricas</li>
                  <li>Comissionamento</li>
                  <li>Eficiência Energética</li>
                  <li>Medição de Energia</li>
                </ul>
                <button>
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          
          <div className='cards facilities'>
            <div className='card-content'>
              <div className='background-card'>
                <img src={facilities} alt="" />
                <span>
                  SUSTENTABILIDADE
                </span>
                <ul>
                  <li>Gerenciamento</li>
                  <li>Fornecimento de Mão de Obra</li>
                  <li>Instalação e Manutenção</li>
                  <li>Limpeza e Conservação</li>
                  <li>Serviços de Apoio Administrativo</li>
                </ul>
                <button>
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

        </div>    
      </div>
    </section>
  )
}

export default Services