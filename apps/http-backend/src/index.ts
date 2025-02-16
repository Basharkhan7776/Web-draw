import jwt from "jsonwebtoken"
import express from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware/createRoom";
import {CreateUserSchema} from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
    const data=CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect inputs"
        })
        return;
    }
    //db call
    res.json({
        userId:"123"
    })
})

app.post("/signin", (req, res) => {

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);
    res.json({
        token
    });

})

app.get("/room", middleware, (req, res) => {
    res.json({
        roomId: 123
    })
})


app.listen(3001);