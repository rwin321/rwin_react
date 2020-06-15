import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedMode} >status: {this.props.status || '---------'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedMode} value={this.state.status}/>
                </div>
            }
        </>
    }

}

export default ProfileStatus;
