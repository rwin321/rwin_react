import React from 'react'
import s from './NewsItem.module.css'
import { NavLink } from "react-router-dom";
import newsPoster from '../../../assets/imgs/newsItem.png'

const NewsItem = ({ id, newsBody, newsTitle }) => {
	const path = '/news/' + `${ id }`
	return (
		<div className={ s.container }>
			<div className={ s.newsItem }>
				<div className={ s.title }>
					{ newsTitle }
				</div>
					<NavLink to={ path }>
						<img className={ s.img }
						     src = {newsPoster}
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