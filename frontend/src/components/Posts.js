import React from "react";


function Posts({posts, user}){
    return(
        <>
            <div className='lg:pl-10'>
                <h1 className='font-bold mb-4'>Posts from {user.name}</h1>\
                {
                    posts.map(post => (
                        <div key={post.id} className='border-b border-gray-400 mb-4 pb-4'>
                            <h2 className='font-bold text-lg mb-2'>{post.title}</h2>
                            <p className='text-gray-700'>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Posts;