import express from "express";

const app = express()

const port = process.env.PORT|| 3000
app.use(express.static('dist'))
const jokes = [
    {
        id: 1,
        title: "joke 1",
        content: "this is joke"
    },
    {
        id: 2,
        title: "joke 2",
        content: "this is joke"
    },
    {
        id: 3,
        title: "joke 3",
        content: "this is joke"
    }
]

app.get('/api/jokes', (req,res)=>{
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`server ready ${port}`);
})