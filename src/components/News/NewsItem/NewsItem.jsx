import React from 'react'
import s from './NewsItem.module.css'
import { NavLink } from "react-router-dom";

const NewsItem = ({ id, newsBody, newsTitle }) => {
	const path = '/news/' + `${ id }`
	console.log(id)
	return (
		<div className={ s.container }>
			<div className={ s.newsItem }>
				<div className={ s.title }>
					{ newsTitle }
				</div>
					<NavLink to={ path }>
						<img className={ s.img }
						     src = 'https://www.hypeclothinga.com/wp-content/uploads/2019/07/Progetto-senza-titolo-170.jpg'
						     alt = 'rwin' />
					</NavLink>
				<div>
					{ newsBody }
				</div>
			</div>
		</div>
	)
}

export default NewsItem