import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from 'react-router-dom'; //withRouter HOC

const StarshipsPage = ({ history }) => {
        return(
               <StarshipList
                   onItemSelected={(itemId)=> {
                       const newPath = `/starships/${itemId}`;
                       history.push(itemId);
                   }} />
        );
};
export default withRouter(StarshipsPage);