import React, { Component } from 'react';
import EAMTextField from './EAMTextField';
import MenuItem from '@material-ui/core/MenuItem';

export default class EAMSelect extends Component {
    state = {
        value: ''
    };

    render() {
        return (
        <EAMTextField
            select
            value={this.state.value}
            {...this.props}>
            {this.props.options.map(option => (
                <MenuItem
                    key={option.value}
                    value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </EAMTextField>
        )
    };
}
