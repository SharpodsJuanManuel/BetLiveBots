const express = require('express');
const { kickChatMember } = require('../controllers/functions.handler');
const router = express.Router();
const usedEmail = require('../models/UsedEmail')

router.post("/", async (req, res) => {
    const { telegram_id, email } = req.body;
    console.log(telegram_id, email)
    const emailmin = email.toLowerCase();
    console.log(emailmin)
    try{
        const propertyChange = await usedEmail.findOneAndUpdate({ email : emailmin }, { isActive: false });
        console.log(propertyChange);
        if (propertyChange) {
            console.log("Se ha actualizado la propiedad isActive");
            await kickChatMember(telegram_id);
            res.status(200).send("Se ha actualizado la propiedad isActive y el usuario ha sido expulsado exitosamente.");
        } else {
            console.log("No se ha actualizado la propiedad isActive");
            res.status(400).send("No se ha actualizado la propiedad isActive");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Error al actualizar la propiedad isActive");
    }
});

module.exports = router