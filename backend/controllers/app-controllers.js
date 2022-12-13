import { response } from 'express';
import User from '../models/app-model.js'

export const getUsers = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
    }
}

export const getUserById = async(req, res) =>{
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
    }catch(error){
        console.log(error.message)
    }
}


export const createUser = async(req, res) =>{
    try{
        await User.create(req.body)
        res.status(201).json({msg: 'user added successfully'})
    }catch(error){
        console.log(error.message)
    }
}

export const updateUser = async(req, res) =>{
    try{
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: 'user updated successfully'})
    }catch(error){
        console.log(error.message)
    }
}

export const deleteUser = async(req, res) =>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: 'user deleted successfully'})
    }catch(error){
        console.log(error.message)
    }
}