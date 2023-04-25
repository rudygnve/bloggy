import React from 'react'
import styles from '../styles/PostCard.module.css'
import Link from 'next/link'
import moment from 'moment/moment'

const PostCard = ({ post }) => {

  console.log(post)

  return (
    <div className={styles.container}>
        <Link className={styles.cover} href={`/blog/${post.slug}`}>
            <img title={post.title} src={post.cover.url} alt="" />
        </Link>
        <div className={styles.content}>
            <Link  className={styles.title} href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <span className={styles.date}>Published on {moment(post.publishedOn).format('MMM DD, YYYY')}</span>
            <p className={styles.desc}>{post.content.text.substring(0, 140)}...</p>
            <Link className={styles.btn} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard
