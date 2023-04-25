import React from 'react'
import styles from '../styles/SinglePost.module.css'

const SinglePost = ({postItem}) => {
  return (
    <div className={styles.container}>
        <div className={postItem.cover}>
            <img src={cover} alt="" />
        </div>
        <div className={styles.content}>
            <span>{postItem.createdAt}</span>
            <h1>{postItem.title}</h1>
            <p>{postItem.content}</p>
        </div>
    </div>
  )
}

export default SinglePost
