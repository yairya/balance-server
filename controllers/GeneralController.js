export const isAlive = async(req,res) => {
    console.log("get alive req camming");
    res.send({msg:"im alive"});
};