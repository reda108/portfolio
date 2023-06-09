import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Projet() {

    const crm = (
        <img alt="Card" src={require('./crm.png')} style={{height:145}} />
    );
    const pokemon = (
        <img alt="Card" src={require('./pokemon.png')} style={{height:230,width:200}} />
    );
    const smarthome = (
        <img alt="Card" src={require('./smart.jpg')} style={{height:150}} />
    );
    const scolaire = (
        <img alt="Card" src={require('./scolaire.jpeg')} style={{height:150}} />
    );
    return (
        <div className='container mt-4'>

<section className='section'>

<div className='project-container row'>

  <div className='project-card col-md-6 col-lg-3 mb-4'>
    <Card header={crm} className="card" style={{height:400}}>
      <div className='project-title card-title h5'>
        Plateforme de gestion des marchés et service apres ventes Crm
      </div>
      <br/>
      <div className='project-school card-subtitle h6'>
        3Gcom telecommunications & IT industry
      </div>
      <a className='project-link card-link' href=" https://github.com/azdadanass/crm">
        Link Github
      </a>
    </Card>
  </div>
  
  <div className='project-card col-md-6 col-lg-3 mb-4'>
    <Card header={pokemon} className="card" style={{height:400}}>
      <div className='project-title card-title h5'>
        Application android Pokedex
      </div>
      <br/>
      <div className='project-school card-subtitle h6'>
        Projet scolaire
      </div>
      <a className='project-link card-link' href="https://github.com/reda108/pockemon">
        Link Github
      </a>
    </Card>
  </div>
  
  <div className='project-card col-md-6 col-lg-3 mb-4'>
    <Card header={smarthome} className="card" style={{height:400}}>
      <div className='project-title card-title h5'>
        Smart home
      </div>
      <br/>
      <div className='project-school card-subtitle h6'>
        Projet scolaire
      </div>
      <a className='project-link card-link' href="https://github.com/reda108/domitiqueProject">
        Link Github
      </a>
    </Card>
  </div>
  
  <div className='project-card col-md-6 col-lg-3 mb-4'>
    <Card header={scolaire} className="card" style={{height:400}}>
      <div className='project-title card-title h5'>
        Gestion scolaire
      </div>
      <br/>
      <div className='project-school card-subtitle h6'>
        Projet scolaire
      </div>
    </Card>
  </div>
  
</div>

</section>

        </div>
    )
}

