import React from 'react';
import FormButton from './FormButton';
import LanguageContext from '../contexts/LanguageContext';

const FormFields = () => {
    return (
        <div className="ui form">
            <div className="field">
            <label>
                <LanguageContext.Consumer>
                   {value => value.language === 'english' ? 'Name': 'Naam'} 
                </LanguageContext.Consumer>
            </label>
                <input type="text" />
            </div>
            <div className="field">
                <FormButton />
            </div>
        </div>
    );
}

export default FormFields;