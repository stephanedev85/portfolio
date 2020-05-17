import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from '../components/Card';
import stephanedev from '../assets/images/stephanedev.jpg';
import youtube from '../assets/images/youtube.png';
import github from '../assets/images/github.png';
import mirablog from '../assets/images/mirablog.jpg';
import espaceauto85 from '../assets/images/espaceauto85.jpg';
import cryptogratuite from '../assets/images/cryptogratuite.jpg';


class Caroussel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                    {
                    id: 0,
                    title: 'stephanedev',
                    subTitle: 'projet site vitrne(entreprise non existante)', 
                    imgSrc:stephanedev,
                    link: 'https://stephanedev.site',
                    selected: false
                    },
                {
                    id: 1,
                    title: 'Développement Tutoriel',
                    subTitle: 'Divers Tutoriels de développement',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/watch?v=38P3En4MwQ4',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Projet sur GitHub',
                    subTitle: 'Les projets GitHub',
                    imgSrc: github,
                    link: 'https://github.com/stephanedev85',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Projet Blog Wordpress',
                    subTitle: 'LE MIRA BLOG',
                    imgSrc: mirablog,
                    link: 'https://mirablog.fun',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Projet site vitrine Wordpress',
                    subTitle: 'Espaceauto85',
                    imgSrc: espaceauto85,
                    link: 'https://espaceauto85.ovh',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Projet site Bootstrap',
                    subTitle: 'Crypto Monnaie et Brave Navigateur',
                    imgSrc: cryptogratuite,
                    link: 'https://cryptogratuite.ovh',
                    selected: false
                },


            ]

        }
    }
    handleCardClick = (id, card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) =>  {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }
    

    render() {
        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
               </Row>
           </Container>
        )
    }
}

export default Caroussel;