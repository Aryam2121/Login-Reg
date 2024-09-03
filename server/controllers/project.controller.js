// import { Project } from '../models/project.model.js';
// import {User} from '../models/user.model.js'

// export const createProject = async (req, res) => {
//     try {
//         const { name, description, departments, projectAdminId, workerIds } = req.body;

//         const projectAdmin = await User.findById(projectAdminId);
//         if (!projectAdmin) return res.status(404).json({ error: 'Project admin not found' });

//         const workers = await User.find({ _id: { $in: workerIds } });
        
//         const newProject = new Project({
//             name,
//             description,
//             departments,
//             projectAdmin: projectAdminId,
//             workers: workerIds,
//         });

//         await newProject.save();
//         res.status(201).json(newProject);
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// export const updateProject = async (req, res) => {
//     try {
//         const { projectId } = req.params;
//         const updates = req.body;
//         const updatedProject = await Project.findByIdAndUpdate(projectId, updates, { new: true });
//         res.json({ message: "Project updated successfully", updatedProject });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating project", error });
//     }
// };

// export const deleteProject = async (req, res) => {
//     try {
//         const { projectId } = req.params;
//         await Project.findByIdAndDelete(projectId);
//         res.json({ message: "Project deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting project", error });
//     }
// };

// export const getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find().populate('departments').populate('projectAdmin').populate('workers');
//         res.json({ projects });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching projects", error });
//     }
// };
