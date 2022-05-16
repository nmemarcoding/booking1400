import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router()

// creat
router.post("/", async(req, res) => {

    const newHotel = new Hotel(req.body)

    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json
    }
})

// update
router.put("/:id", async(req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (err) {
        res.status(500).json
    }
})

// delete
router.delete("/:id", async(req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndDelete(req.params.id, { $set: req.body })
        res.status(200).json("Hotel has benn deleted")
    } catch (err) {
        res.status(500).json
    }
})

// Get
router.get("/:id", async(req, res) => {

        try {
            const hotel = await Hotel.findById(req.params.id)
            res.status(200).json(hotel)
        } catch (err) {
            res.status(500).json
        }
    })
    //Get all 
router.get("/", async(req, res) => {

    try {
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json
    }
})

export default router