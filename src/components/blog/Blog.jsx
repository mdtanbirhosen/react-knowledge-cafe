import PropTypes from "prop-types";
const Blog = ({ blog }) => {
    const { title, cover, author_img, reading_time, hashtags, author, posted_date } = blog
    console.log(blog)
    return (
        <div>
            <img  src={cover} alt={`cover picture of  the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time}</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="">
                {hashtags.map((hash, idx) => <span key={idx} className="mr-4"><a href="">#{hash}</a></span>)}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;