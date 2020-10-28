import React from 'react'
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

const News = ({ news }) => {

	console.log(news)
	const newsElements = news.map(n => <NewsItem id={ n.id } newsTitle={ n.newsTitle } newsBody={ n.newsBody } /> )

	return (
		<div className= {s.container}>
			{ newsElements }
		</div>
	)
}

export default News