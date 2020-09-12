import React from 'react';
import {connect} from "react-redux";
import News from "./News";

class NewsContainer extends React.Component {

    render() {
        return <News likesCount={this.props.likesCount} />
    }

}
const mapStateToProps = (state) => {
    return {
        likesCount: state.news.likesCount
    }
}
export default connect(mapStateToProps, {})(NewsContainer);
