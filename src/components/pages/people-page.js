import React from "react";
import { withRouter } from 'react-router-dom';
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

 const PeoplePage = ({ history, match }) =>  {

     const { id } = match.params;

        return(
            <Row
                leftElem={<PersonList onItemSelected={(id)=> history.push(id)} />}
                rightElem={<PersonDetails itemId={id} />}
            />
        )
 }

export default withRouter(PeoplePage);