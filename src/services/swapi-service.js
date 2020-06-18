export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new  Error(`фетч не прошёл ${this._apiBase}${url}`+
                `, received ${res.status}`)
        }

        return await res.json();
    }

     getAllPeople = async() => {
        const arrOfPeople = await this.getResource(`/people/`);
        return arrOfPeople.results.map(this._transformPerson).slice(0, 5);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person)
    };

     getAllPlanets = async () => {
        const arrOfPlanets = await this.getResource(`/planets/`);
        return arrOfPlanets.results.map(this._transformPlanet).slice(0, 5);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const arrOfStarships = await this.getResource(`/starships/`);
        return arrOfStarships.results.map(this._transformStarship).slice(0, 5);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    };

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
}
