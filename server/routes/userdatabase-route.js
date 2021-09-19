var express = require("express");
const router = express.Router();
const db = require("../firebase");


router.get("/get", async(req, res) => {
    const snapshot = await db.collection("Users").get();
    const Users = [];
    snapshot.forEach((user) => {
        Users.push({...user.data(), doc_id: user.id});
    });
    res.json(Users);
});






module.exports = router;
