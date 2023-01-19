 import Post from '../models/Posts.js'
import User from '../models/User.js';

 /* CREATE*/

export const createPost=async(req,res)=>
{
    try {
        const {userId,description,picturePath}= req.body;
        const user= await User.findById(userID);
        const newPost= new Post({
            userId,
            firstName:user.firstname,
            lastName:user.lastname,
            location:user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })
        new Post.save();
        
        const post= await Post.find(); //this will update the list of post in frontend
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({msg: error.message})
    }
}

/*Read*/
export const getFeedPosts=async(req,res)=>
{
    try {
        const post= await Post.find(); //this will update the list of post in frontend
        res.status(200).json(post);
    
    } catch (error) {
        res.status(409).json({msg: error.message})        
    }

}

export const getUserPosts=async(req,res)=>
{
    try {
        const {userId}= req.params;
        const post= Post.find({userId});
        res.status(200).json(post);        
    } catch (error) {
        res.status(409).json({msg: error.message})     
        
    }
    
}

/*UPDATE */
export const likePost= async(req,res)=>
{
    try {
        const {id}= req.params; //id of the psot genereted by mongo
        const {userId}= req.body;
        const post= await Post.findById({id});
        const isliked= post.likes.get(userId);
        if(isliked)
        {
            post.likes.delete(userId);
        }
        else
        {
            post.likes.set(userId,true);
        }
        const updatedPost= await Post.findByIdAndUpdate(id, {likes: post.likes},{new:true});

        res.status(200).json(updatedPost);        
    } catch (error) {
        res.status(409).json({msg: error.message})     
        
    }
    


}