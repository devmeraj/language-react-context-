import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class FormButton extends Component{
    static contextType = LanguageContext;

    render(){
        return(
            <button className="ui button primary">
                {this.context.language === 'english' ? 'Submit' : 'Voorleggan'}
            </button>
        );
    }
}

export default FormButton;