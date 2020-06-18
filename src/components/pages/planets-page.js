import React, {Component} from "react";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";
import ErrorBoundry from "../error-boundry";

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return(
            <Row
                leftElem={<PlanetList onItemSelected={this.onItemSelected} />}
                rightElem={ <PlanetDetails itemId={selectedItem} />}
            />
        );
    }
}