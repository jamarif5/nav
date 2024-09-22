const express =require('express')
require('./config')

const products =require('./products')
const app =express()
app.use(express.json())
app.post('/create', async (req,res) => {
    let data = new products(req.body)
    let result = await data.save()
res.send(result)
console.log(result);

})

app.get('/list' ,async (req,res) => {
    let data = await products.find()
    res.send(data)
})

app.put('/update/:_id' ,async (req,res) => {
    let data = await products.updateOne(
        req.params,
        
        
            {$set:req.body}
        )
         console.log(data);
   res.send(data)
})
    app.get('/search/:key',async(req,res)=>{
        console.log(req.params.key);
        
let data = await products.find(
{

    "$or":[

{name:{$regex:req.params.key}}



    ]

}
)
res.send(data)
console.log(data);

    })
    app.listen(4000)