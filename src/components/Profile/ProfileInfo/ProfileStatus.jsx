import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedMode} >status: {this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivatedMode} value={this.props.status}/>
                </div>
            }
        </>
    }

}

export default ProfileStatus;
