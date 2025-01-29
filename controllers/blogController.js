import blogModel from '../models/blogModel.js'
import userModel from '../models/user.models.js'


const getAllBlogController = async (req, res) => {
    try {
        const allBlogs = await blogModel.find({}).populate("user");
        if (!allBlogs) {
            res.status(200).send({
                success: false,
                message: "Koi Blog Nhi milla"
            })
        }
        return res.status(200).send({
            success: true,
            countBlog: allBlogs.length,
            message: " Usad idher to Blogs hi Blogs hai ",
            allBlogs
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Ustaad All Blogs gaib hoee parai hai ",
            error
        })
    }
}

const createBlogController = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;
        if (!title || !description || !image || !user) {
            return res.status(400).send({
                success: false,
                message: "All Fields are Required",

            })
        }
        const existingUser = await userModel.findById(user);
        if (!existingUser) {
            return res.status(400).send({
                message: "Unable to Find User ",
                success: false

            })
        }
        const newBlog = await new blogModel({ title, description, image, user });
        // const session = await mongoose.startSession();
        // session.startTransaction();

        // await newBlog.save({ session });
        existingUser.blog.push(newBlog);
        await existingUser.save();
        // await existingUser.save({ session });
        // await session.commitTransaction();
        await newBlog.save();

        return res.status(201).send({
            success: true,
            message: "Mubarakan Blog Ban gya ha ",
            newBlog
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Ustad Blog Create Nhi ho rha ",
            error
        })
    }
}

const updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "Apna Blog Update hogia ha ",
            blog
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: " ",
            error
        })
    }
}

const getBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);
        if (!blog) {
            res.status(200).send({
                success: false,
                message: "Koi Blog Nhi milla"
            })
        }
        return res.status(200).send({
            success: true,
            message: " Usad Apna 1 blog mill gya  ",
            blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: " Ustad Apna Blog to Gaib hogia nhi mIll rha  ",
            error
        })
    }
}

const deleteBlogController = async (req, res) => {
    try {

        const blog = await blogModel.findById(req.params.id).populate("user");

        if (!blog) {
            res.status(200).send({
                success: false,
                message: "Koi Blog Nhi milla"
            })
        }
        if (blog.user) {
            // Remove the blog reference from the user's blogs array
            blog.user.blog.pull(blog._id);
            await blog.user.save();
        }

        // Delete the blog

        await blogModel.deleteOne({ _id: req.params.id });

        return res.status(200).send({
            success: true,
            message: " Ustad Blog Delete Hugia   ",
            blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Ustad Dellete Nhi ho rha ",
            error
        })
    }
}

const userBlogController = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.id).populate("blog");
        if (!userBlog) {
            res.status(400).send({
                success: false,
                message: "Iss ID sai koi User BLog nhi mila "
            })
        }
        await res.status(200).send({
            success: true,
            message: "User Blog Controller kmall ha ",
            userBlog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "UserBlog Controller chal hi nhi rha  ",
            error
        })
    }
}
export { getAllBlogController, createBlogController, updateBlogController, getBlogController, deleteBlogController, userBlogController }
{/* {isLogin && ( */}
 // blogs = {
          // title = {blog.title}
          // description = {blog.description}
        // }
        
      
     

      
    {/* )} */}