import { Router } from "express";
import {
  createBlog,
  updateBlog,
  getBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
  getAllBlog,
  CommentBlog,
  RepCommentBlog,
} from "../controller/blogController.js";
import { blogImgResize, uploadPhoto } from "../middleware/uploadImages.js";

const router = Router();

router.post("/create", createBlog);
router.patch(
  "/upload/:id",
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.patch("/update/:id", updateBlog);
router.get("/allblogs", getAllBlog);
router.delete("/:id", deleteBlog);
router.patch("/likes", likeBlog);
router.patch("/dislikes", dislikeBlog);
router.post("/comment/:id", CommentBlog);
router.post("/rep/comment/:id", RepCommentBlog);
router.get("/:id", getBlog);
// ProductRouter.post("/pin/comment/:id", PinCommentProduct);

export default router;
