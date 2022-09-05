import {useParams} from 'react-router-dom'

const Blog = () => {
    const getParams = useParams();
    return (
        <>
            <h1>
                Blog page : {getParams.id}
            </h1>
        </>
    )
}

export default Blog;
