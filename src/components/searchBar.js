import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.onInputText(e.target.value);
    }

    render(){
        return(
            <div>
                <TextField
                    hintText="Search..."
                    name="inputText"
                    type="text"
                    value={this.state.inputText}
                    onChange={this.onChange}
                    />
            </div>
        )
    }
}

export default Search;