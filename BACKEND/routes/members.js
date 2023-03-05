const router = require("express").Router();
const express = require("express");
let Member = require("../models/member");

//insert data to member entity
router.route("/add").post((req, res) => {

    const { name, gender, telephone, email, address, dateOfBirth } = req.body;

    const newMember = new Member({
        name,
        gender,
        telephone,
        email,
        address,
        dateOfBirth
    })

    newMember.save().then(() => {
        res.json("Member Added");
    }).catch((err) => {
        console.log(err)
    })
})

//read all data in the entity
router.route("/view").get((req, res) => {
    Member.find().then((members) => {
        res.json(members)
    }).catch((err) => {
        console.log(err)
    })
})

//update details of members
router.route("/update/:id").put(async(req,res) =>{
    let memberId = req.params.id;

    const { name, gender, telephone, email, address, dateOfBirth } = req.body;

    const updateMember = {
        name,
        gender,
        telephone,
        email,
        address,
        dateOfBirth
    }

    //check if the member to be updated exists
    const update = await Member.findByIdAndUpdate(memberId, updateMember)
    .then(() => {
        res.status(200).send({status: "Member Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error in updating member", error: err.message});
    })
})


//delete a member record
router.route("/delete/:id").delete(async(req,res)=>{
    let memberId = req.params.id;

    await Member.findByIdAndDelete(memberId)
    .then(() => {
        res.status(200).send({status: "Member Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in deleting member", error: err.message});
    })
})

//get a member by id
router.route("/get/:id").get(async(req,res)=>{
    let memberId = req.params.id;

    const member = await Member.findById(memberId)
    .then((member) => {
        res.status(200).send({status: "Member fetched", member});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in fetching member", error: err.message});
    })
})



module.exports = router;