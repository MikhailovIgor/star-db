import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helper';

//import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = (props) => {

        return (
            <ItemDetails {...props}>

                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='eye Color' />

            </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
