import React from 'react';
import Candidacy_card_cmp from '../candidacy_card/candidacy_card_cmp';

export default class Candidacy_list_cmp extends React.Component {
    render() {
        return (
            <div className="candidacy_list_cmp">
                <Candidacy_card_cmp/>
            </div>
        )
    }
}