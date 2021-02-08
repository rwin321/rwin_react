import React, { useState } from 'react'
import styles from "./Paginator.module.css"
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = (props) => {

    const {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        portionSize = 10
    } = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1
    let rightPortionBorder = portionNumber * portionSize

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={ styles.paginator }>
        <div className={styles.leftPortionNumber}>
            { portionNumber > 1 &&
	        <button className={ styles.btn } onClick={ () => {
                setPortionNumber(portionNumber - 1)
            } }>prev</button>
            }
        </div>
        <div className={styles.pages}>
            {
                pages
                    .filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                    .map(p => {
                        return <span className = { cn({ [styles.selectedPage]: p === currentPage }, styles.pageNumber) }
                                     key={p}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    }
            )}
        </div>
        <div className={styles.rightPortionNumber}>
            { portionCount > portionNumber &&
	        <button className={styles.btn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>next</button>
            }
        </div>
        </div>
}
//currentPage === p && styles.selectedPage
export default Paginator

