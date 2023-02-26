const baseAPI="/api/login";

export const loginController = () =>{
    
    app.get(baseAPI + "/alive", async(req,res) => {
        console.log("get alive req camming");
        res.send({msg:"im alive"});
    });
    
    app.listen(8080, () => {
        console.log("login controller listen")
    })
}