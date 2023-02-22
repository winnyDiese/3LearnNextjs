
import Link from 'next/link'

export default function Post({post}){
    return <>
        <main>
            <Link href="/">Acceuil</Link>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    </>
}



// export async function getStaticProps ({params}){

//     const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//         .then(r => r.json())

//     return {
//         props: {
//             post
//         }
//     }

// }

// // Prepare l'id de tout les articles
// // Pour creer les pages individuel (genre : page3.js, âge5.js)
// export async function getStaticPaths(){
//     const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
//         .then(r => r.json())
  
//       return {
//         paths : posts.map(post => ({
//             params:{id: post.id.toString()}
//         })),
//         fallback: false,
//       }
//   }



    //   En cas où on va devoir recevoir chaque temps 
    // les datas provenant du server
  export async function getServerSideProps ({params}){

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(r => r.json())

    return {
        props: {
            post
        }
    }
    
}