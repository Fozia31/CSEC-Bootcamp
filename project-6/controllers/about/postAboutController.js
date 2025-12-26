
const postAboutController = (req,res) =>{
    const {name , info} = req.body;
    if(!name || !info){
        return res.status(400).send({Error:"Name and Info are required"})
    }
    res.json({message:'About Page Data Posted Successfully',data:req.body});
}
export default postAboutController;