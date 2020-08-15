import React, { Component } from 'react';

const Context = React.createContext('dutch');

export class LanguageStore extends Component {
    state = {language: 'english'}

    onSelectorClick = (language) => {
        this.setState({language});
    }

    render(){
        return(
            <Context.Provider value={{...this.state, onSelectorClick: this.onSelectorClick}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Context;