import express from 'express'
import { createBlogController, deleteBlogController, getAllBlogController, getBlogController, updateBlogController, userBlogController } from '../controllers/blogController.js';

const router = express.Router();

// Fot getting all Blogs
router.get('/all-blog', getAllBlogController)

// For Creating Blog we use Post Method
router.post('/create-blog', createBlogController)

// For Updating Blogs
router.put('/update-blog/:id', updateBlogController)

// For geting Single Blog 
router.get('/get-blog/:id', getBlogController)

// For Delete Blog
router.delete('/delete-blog/:id', deleteBlogController)

router.get('/user-blog/:id', userBlogController)
export default router