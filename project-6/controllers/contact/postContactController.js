
const postContactController = (req,res) =>{
    const data = req.body;
    if(!data){
        res.status(400).json({message:"Error happend during post"})
    }
    res.json({message:'Contact Page Data Posted Successfully',data:req.body});
}

export default postContactController;