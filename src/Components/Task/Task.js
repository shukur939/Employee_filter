import React from 'react'

const Task = () => {
    const [post, setPost] = React.useState([])
    const [postHead, setPostHead] = React.useState([])
    const requestPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const dataPost = await res.json();
        setPost(dataPost)
        setPostHead(Object.keys(dataPost[0]))
    }

    React.useEffect(() => {
        requestPosts()
    }, [])
    return (
        <>
        <div className='d-flex justify-content-cneter p-3'>
            <label className='me-2'>All</label>
            <input type="checkbox"  />
        </div>
            <table className='table table-bordered p-3'>
                <thead>
                    <tr>
                        {
                            postHead.map((item, key) => (
                                <th key={key}>{item}</th>
                            ))
                        }
                    </tr>

                </thead>
                <tbody>

                    {post.map((item) => (
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.body}</td>
                            <td>{item.title}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </>
    )
}
export default Task
