import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts, date}) {

  // const [posts, setPosts] = useState([])
  // useEffect(()=>{
  //   const data = fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  //     .then(r => r.json())
  //     .then(data => setPosts(data))
  //     // .then(setPosts)

  // }, [])


  const [count, setCount] = useState(0)

  useEffect(()=>{
    const timer = setInterval(() => setCount(n => n + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  },[])

  return (
    <>
      <Head>
        <title>Mon Super Blog</title>
      </Head>
      <h1>Count : {count} - {date}</h1>
      <ul>
        {posts.map(post => <li>
          <Link href={`/blog/${post.id}`}>
              <h3 key={post.id}>{post.id} - {post.title}</h3>
          </Link>
        </li>)}
      </ul>
    </>
  )
}



// export async function getStaticProps(){
//   const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
//       .then(r => r.json())

//     return {
//       props: {
//         posts
//       }
//     }
// }



// export async function getServerSideProps(){

export async function getStaticProps(){
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then(r => r.json())

    return {
      props: {
        posts,
        date: (new Date()).toString()
      },
      revalidate: 5
    }
}