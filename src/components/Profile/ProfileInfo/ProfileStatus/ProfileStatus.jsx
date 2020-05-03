import React, {Component} from 'react';

export default class ProfileStatus extends Component {

    state = {
        editMode: false,

    };

    disableActiveMode = () => {
        console.log("disableActiveMode");
        this.setState({
            editMode: false
        })
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    render() {
        return <div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>
                : <div>
                    <input type="text" value={this.props.status} onBlur={this.disableActiveMode} autoFocus/>
                </div>
            }

        </div>
    }
}