import { allPosts } from ".contentlayer/generated";
import BlogContent from "./BlogContent";


export async function generateStaticParams() {
    const posts = await allPosts;

    return posts.map((blog) => ({slug: blog.slug}));
};

export const generateMetadata = async ({ params}) => {
    const blog = allPosts.find((blog) => blog._raw.flattenedPath === 
    'blog/' + params.slug);
    return {title: blog?.title, excerpt: blog?.excerpt };
};

const page = ({ params}) => { 
    const blog = allPosts.find((blog) => blog._raw.flattenedPath === 
    'blog/' + params.slug);
    
    return (
        <>
        <BlogContent blog={blog} />
        </>
    );
};

export default page;