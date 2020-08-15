import React, { Component } from 'react';
import FormFields from './FormFields';
import Context, {LanguageStore} from '../contexts/LanguageContext';

class App extends Component{
    
    render(){
        return(
        <div className="ui container">
            
            <LanguageStore>
            <Context.Consumer>
                {(value) => {
                    return(
                        <div>
                        Language: 
                        <i className="flag uk" onClick={e => value.onSelectorClick('english')}/> 
                        <i className="flag nl" onClick={e => value.onSelectorClick('dutch')}/>
                        </div>
                    );
                }}
            
            </Context.Consumer>
                <FormFields />
            </LanguageStore>
                        
        </div>
        );
    }
}

export default App;