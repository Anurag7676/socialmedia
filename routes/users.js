import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriends
} from "../controllers/users.js"
import { verifytoken } from '../middleware/auth.js';

const router= express.Router();
/* Read */
router.get('/:id',verifytoken,getUser);
router.get('/:id/friends',verifytoken,getUserFriends);

/* Update */
router.patch("/:id/:friendid",verifytoken,addRemoveFriends);

export default router;

