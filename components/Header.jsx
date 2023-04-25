import React, { useState } from 'react'
import styles from '../styles/Header.module.css'
import PostCard from './PostCard'
import ReactPaginate from 'react-paginate'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

const Header = ({posts}) => {

    const [pageNumber, setPageNumber] = useState(0)

    const postsPerPage = 3
    const pagesVisited = pageNumber * postsPerPage

    const pageCount = Math.ceil(posts.length / postsPerPage);


    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const handleScrollTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0;
    }

  return (
    <header className={styles.header}>

        <div className={styles.container}>
            {/* {postItems.slice(pagesVisited, pagesVisited + postsPerPage).map((postItem)=>(
                <PostCard posts={posts} key={postItem.title} postItem={postItem} />
            ))} */}
            {posts.slice(pagesVisited, postsPerPage + pagesVisited).map((post)=>( <PostCard post={post.node} /> ))}
        </div>
                
        <div className={styles.pagination}>
            <ReactPaginate onClick={handleScrollTop}

                previousLabel={<BsChevronDoubleLeft />}
                nextLabel={<BsChevronDoubleRight />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginate}
                previousLinkClassName={styles.prevBtn}
                nextLinkClassName={styles.nextBtn}
                activeClassName={styles.activeBtn}
                disabledClassName={styles.disabledBtn}

            />
        </div>        

    </header>
  )
}

export default Header