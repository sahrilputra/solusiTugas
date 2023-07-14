import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

import styles from '../../styles/blog.module.scss'
import { BlogCard } from '../../components/home/blogCard';
export default function Blog({ posts }) {
    console.log(posts)
    return (
        <>
            <div className={styles.order}>
                <div className={styles.order__hero}>
                    <div className={styles.order__hero__img}>
                        <img src="../../figure/orders.png" alt="cara orderss" />
                    </div>
                    <div className={styles.order__hero__text}>
                        <div className="site-heading">
                            <h4>Blog</h4>
                            <h2 className=' text-3xl'>Kumpulan Tulisan Kami</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>

                <div className={styles.order__logo}>
                    <img src="../../logo.png" alt="logo solusitugasku" />
                    <div className={styles.order__logo__text}>
                        <h1>Solusi Tugasku</h1>
                        <p>Solusi Tugasku adalah Jasa Pengerjaan Tugas Kuliah Bidang Fakultas Ekonomi & Bisnis dengan memprioritaskan Kualitas Jawaban, Ketepatan Waktu & Kepuasan Nilai.</p>
                    </div>
                </div>
                <div className={styles.order__timeline}>
                    <div className="site-heading text-center">
                        <h4>Blog</h4>
                        <h2 className=' text-3xl'>Lihat Kumpulan Tulisan Kami</h2>
                        <div className="devider" />
                    </div>
                    <div className={styles.order__blogPage}>

                        {posts.map((post, index) => (
                            <>
                                <BlogCard post={post} />
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>

    )
}


export async function getStaticProps() {
    const files = fs.readdirSync(path.join('post'))
    console.log(files)
    // get Slug
    const posts = files.map(filename => {
        // create Slug
        const slug = filename.replace('.md', '')

        // meta 
        const markdownMeta = fs.readFileSync(
            path.join('post', filename), 'utf-8'
        )

        const { data: frontmatter } = matter(markdownMeta)
        return {
            slug,
            frontmatter
        }
    })
    return {
        props: {
            posts,
        }
    }

}
