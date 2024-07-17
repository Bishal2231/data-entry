


export const asynchandler=(requestHandler)=>{
    return(req,res,next)=> {
        Promise.resolve(asynchandler(req,res,next)).catch((err)=>{
            nexr(err)
        })
    }
}