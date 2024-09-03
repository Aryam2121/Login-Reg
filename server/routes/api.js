// import { Router } from "express";
// import { assignProjectToUser,getAllUsers,getUserById } from "../controllers/user.controller.js";
// import { createProject,getProjects,deleteProject,updateProject } from "../controllers/project.controller.js";
// import { createTask,getTasks,updateTask,deleteTask } from "../controllers/tasks.controller.js";
// import { createMessage,deleteMessage,getMessageById,getMessagesByDiscussion } from "../controllers/message.controller.js";
// import { createDiscussion,getDiscussions,addMessage } from "../controllers/discussion.controller";
// import { authorizeRoles } from "../middlewares/auth.middleware.js"
// import { verifyJWT } from "../middlewares/auth.middleware.js";

// const router=Router();

// router.route('/assignProjectToUser').post(
//     authorizeRoles('Main Admin','Project Admin'),
//     assignProjectToUser
// )

// router.route('/users').get(
//     authorizeRoles('Main Admin'),
//     getAllUsers
// )

// router.route('/getUserById').get(
//     authorizeRoles('Main Admin'),
//     getUserById
// )

// router.route('/project').post(
//     authorizeRoles('Main Admin'),
//     createProject
// )

// router.route('/getProject').get(
//     authorizeRoles('Main Admin'),
//     getProjects
// )

// router.route('/project/task').post(
//     authorizeRoles('Project Admin'),
//     createTask
// )

// export default router



