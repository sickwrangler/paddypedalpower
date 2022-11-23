import React from 'react';
import './cards.css';
import Card from '../../components/card/card';
import cargobikesolo from '/Users/jarvp/Github /paddypedalpower/src/img/cargobikesolo.jpeg';
import paddy from '/Users/jarvp/Github /paddypedalpower/src/img/paddy.PNG';
import tumble from '/Users/jarvp/Github /paddypedalpower/src/img/tumble.jpg';


const cards = () => {
    return(
        <div className='cards_wrapper'>
            <Card image={cargobikesolo} title="The bike" attributes={['Weight: 25KG','Motor: Boche Cargo Line ','Power: 1000WH']} ></Card>
            <Card image={paddy} title="The rider" attributes={['Name: Paddy','Age: 28','Fitness: 60%']} ></Card>
            <Card image={tumble} title="The hill" attributes={['Elevation gain: 384m','Average gradient: 8.2% ','Distance: 4.7km']} ></Card>
        </div>
    )
}

    export default cards;