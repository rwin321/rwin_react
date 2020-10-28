import React from 'react';
import { connect } from "react-redux";
import News from "./News";
import newsReducer from "../../Redux/news-reducer.ts";

class NewsContainer extends React.Component {
    render() {
        return <News news={ this.props.news } />
    }
}
const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}
export default connect(mapStateToProps, {})(NewsContainer);
