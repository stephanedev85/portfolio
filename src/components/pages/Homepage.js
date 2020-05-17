import React from 'react';
import Hero from '../Hero';
import Caroussel from '../Caroussel';
function Homepage(props){

return(
    <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Caroussel/>
    </div>
);



};

export default Homepage;