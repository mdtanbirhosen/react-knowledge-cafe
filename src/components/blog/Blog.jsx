import PropTypes from "prop-types";
const Blog = ({blog}) => {
    const {title} = blog
    console.log(blog)
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;