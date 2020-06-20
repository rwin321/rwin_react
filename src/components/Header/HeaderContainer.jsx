import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/auths-reducer";


class HeaderContainer extends React.Component {
        componentDidMount() {

        this.props.getAuthUserData();
        // Previous version (refactored):
        /*authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {email, login, id} = response.data.data;
                    this.props.setAuthUserData(email, login, id);
                }
            })*/
    }

    render() {
      return <Header {...this.props} />
  };
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
