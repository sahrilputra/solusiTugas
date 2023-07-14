import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { marked } from 'marked';
import Link from 'next/link';
import styles from '../../styles/post.module.scss'
const PostPage = ({
    frontmatter: { Title, Sub, image, Penulis, Tanggal },
    slug,
    content,

}) => {
    return (
        <>
            <div className={styles.blog}>

                <div className={styles.blog__wrap}>
                    <div className={styles.blog__container}>
                        <div className={styles.blog__image}>
                            <img src={image} alt="" />
                        </div>
                        <div className={styles.blog__date}>
                            <p>{Tanggal}</p>
                        </div>

                        <div className={styles.blog__contentWrapper}>
                            <div className={styles.blog__authors}>
                                <div className={styles.blog__roundedImg}>
                                    <img src={image} alt="" />
                                </div>
                                <p>By <span className=' text-light-blue-700 font-bold'> {Penulis} </span></p>
                            </div>
                            <div className={styles.blog__heading}>
                                <h1>{Title}</h1>
                            </div>
                            <div className={styles.blog__info}>

                            </div>
                            <div className={styles.blog__content}>
                                <div className="" dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('post'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params: { slug } }) {
    const markdownMeta = fs.readFileSync(path.join('post', slug + '.md'),
        'utf-8')

    const { data: frontmatter, content } = matter(markdownMeta)
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
export default PostPage