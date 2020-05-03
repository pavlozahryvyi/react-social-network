import React, {Component} from 'react';

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    disableActiveMode = () => {
        // console.log("disableActiveMode");
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        })
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    render() {
        // console.log("---profile status props", this.props);
        return <div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "aaa"}
                    </span>
                </div>
                : <div>
                    <input onChange={this.onStatusChange} type="text" value={this.state.status} onBlur={this.disableActiveMode} autoFocus/>
                </div>
            }

        </div>
    }
}