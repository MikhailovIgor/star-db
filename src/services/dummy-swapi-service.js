// import React, { useState, useEffect } from "react";

// export default class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button
//                     onClick={()=> this.setState({ count: this.state.count + 1 })} >
//                         Click me
//                 </button>
//             </div>
//         )
//     }
// }
//
// const Example = () => {
//
//     const [count, setCount]= useState(0);
//
//     useEffect(()=> {
//         document.title = `you clicked ${count} times`;
//     })
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button
//                 onClick={() => setCount (count + 1)}>
//                 Click me
//             </button>
//         </div>
//     )
// }
// export default Example;


export default class DummySwapiService {
    _people = [
        {
            id: 1,
            name: 'Bylba Sumkin [TEST DATA]',
            gender: 'male',
            birthYear: 'long-long ago',
            eyeColor: 'brown'
        },
        {
            id: 2,
            name: 'Bedor Sumkin [TEST DATA]',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'green'
        }
    ];
    _planets = [
        {
            id: 1,
            name: 'Earth [TEST DATA]',
            population: '7.530.00.000',
            rotation_period: '24 hours',
            diameter: '12.742 km'
        },
        {
            id: 2,
            name: 'Venus [TEST DATA]',
            population: '7.530.00.000',
            rotationPeriod: '24 hours',
            diameter: '12.742 km'
        }
    ];
    _starships = [
        {
            id: 1,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'Nortrop Grumman Shipbuilding',
            cost: 'not known',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 560,
            cargoCapacity: 100
        },
        {
            id: 2,
            name: 'USS Enterprise [TEST DATA]',
            model: 'NCC-1701-C',
            manufacturer: 'Nortrop Grumman Shipbuilding',
            cosInCredits: 'not known',
            length: 'approx 300 meters',
            crew: 1000,
            passengers: 560,
            cargoCapacity: 100
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0]
    }

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async (id) => {
        return this._planets[0];
    };

    getAllStarships = async () => {
        return this._starships;
    };

    getStarship = async (id) => {
        return this._starships[0];
    };

    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`;
    };

    getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`;
    };

    getStarshipImage = () => {
        return `https://placeimg.com/600/400/tech`;
    };
}


