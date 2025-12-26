
const postHomeController = (req,res) =>{
    const data = req.body;
    if(!data){
        return res.status(400).send({Error:"Message is required"})
    }
    res.json({ message: "Home POST received successfully", data })
}

export default postHomeController;