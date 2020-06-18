import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>

            <Record field='Population' label='Population'/>
            <Record field="RotationPeriod" label="RotationPeriod" />
            <Record field="Diameter" label="Diameter" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
