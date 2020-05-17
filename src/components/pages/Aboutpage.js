import React from 'react';
import Hero from '../../components/Hero';
import Content from '../Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {faWalking, faIdCard, faMicrophone, faLanguage,faCar,faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Aboutpage(props){

return(

<div>
    <Hero title={props.title} />

    <Content>
     <div className="color-back">   
     <h2>Stéphane Desmaretz</h2>
     <h1>DEVELOPPEUR</h1>
     <h5>Recherche un contrat de professionnalisation.</h5>
     <hr/>
     <h3>Compétences informatiques.</h3>
     <h6>Connaissances des langages suivant: HTML, CSS, PHP, JAVASCRIPT.</h6>
     <progress id="file" max="100" value="55"></progress>
     <h6>Connaissances BOOTSTRAP 4 , BULMA, HANDLEBARS, REACT.</h6>
     <progress id="file" max="100" value="55"></progress>
     <h6>Connaissances en BACK-END : NODEJS, POSTMAN, MONGODB, GIT.</h6>
     <progress id="file" max="100" value="45"></progress>
     <h6>Création d'une chaîne youtube (TUTO DEVELOPEUR).</h6>
     <progress id="file" max="100" value="60"></progress>
     <h6>OS: linux, windows.</h6>
     <progress id="file" max="100" value="50"></progress>
     <h6>Logiciels : Visual Studio Code, Github, Wordpress.</h6>
     <progress id="file" max="100" value="60"></progress>
     <h6>Réseau : installation LAMP, XAMP (linux) serveur OVH.</h6>
     <progress id="file" max="100" value="55"></progress>
     <h6>Matériel</h6>
     <progress id="file" max="100" value="55"></progress>
     <p>Montage de PC hardware et software.</p>
     <br/>
     <h3>Expériences profesionnelles.</h3>
     <br/>
     <p><strong>YOUTUBE TUTO DEVELOPPEUR MAISON</strong> / Octobre 2019.
        Création de tutoriels afin de consolider mon aisance orale et technique.</p>
     <br/>
     <p><strong>STAGE FBO LA ROCHE SUR YON</strong> / Juillet 2019.</p> 
     <p><strong>STAGE EN ENTREPRISE CONCEPTION D'UNE APPLICATION JAVA GOOGLE VISION OCR.</strong></p>

     <p>Recherche et compréhension de la base de données relationnelles.
     Utilisation de spring boot pour effectuer les <strong>GET.</strong>
     Organisation autour du logiciel <strong>TRELLO</strong> et application de la méthode <strong>SCRUM AGILE</strong>  tout au
     long du stage.
     </p>  
     <br/>
     <p><strong>CROUPIER JOA CASINO DES PINS LES SABLES D'OLONNE </strong>/ De février 2008 à juillet 2018
      Animer les tables de jeux.
     </p>
     <br/>
     <p><strong>COMMIS AUX VIVRES MARINE NATIONALE FRANCE</strong> / De septembre 1997 à septembre 2007
      Gestionnaire de collectivité au sein de la Marine nationale.
     </p>
     <br/>
     <h3>Diplômes et Formations.</h3>
     <br/>
     <p><strong>DÉVELOPPEUR WEB ET MOBILE ARINFO LA ROCHE SUR YON</strong> / De février 2019 à septembre 2019.</p>
     <p><strong>DÉVELOPPEUR WEB ET MOBILE - BAC+2 (BTS, DUT OU ÉQUIVALENTS) PROGRAMMATION WEB.</strong></p>
     <p><strong>CROUPIER CERUS ACADEMY PARIS 20 EME / </strong>De janvier 2008 à juin 2008.</p> 
     <p><strong>DIPLÔME DE CROUPIER (BAC PROFESSIONNEL).</strong></p>
     <p><strong>BAT MARINE NATIONALE ÉCOLE DES FOURRIERS ROCHEFORT SUR MER</strong> / De janvier 2000
      à janvier 2001.</p>
     <hr/>
        
     </div>
        <Container className="color-suits">
        <Row>
        <Col sm><p><FontAwesomeIcon icon={faWalking}size="lg" /></p><p> Centres d'intérêt informatiques: Tutoriels Udemy Création de site web Jeux vidéo (UNITY 3D) Blender 3D, DAPP BLOCKCHAIN.</p></Col>
        <Col sm> <p><FontAwesomeIcon icon={faMicrophone}size="lg" /></p><p>Centres d'intérêt: Guitariste amateur Jardinage</p></Col>
        <Col sm><p><FontAwesomeIcon icon={faLanguage}size="lg" /></p><p>Langue: Anglais intermédiare.</p></Col>
        </Row>
        <Row>
        <Col sm><p><FontAwesomeIcon icon={faIdCard} size="lg" /></p><p>Permis B</p></Col>
        <Col sm> <p><FontAwesomeIcon icon={faCar}size="lg" /></p><p>Véhicule personnel</p></Col>
        <Col sm><p><FontAwesomeIcon icon={faLandmark} size="lg"/></p><p>Vendée</p></Col>
        </Row>
        </Container> 
    </Content>
</div>

);

};

export default Aboutpage;