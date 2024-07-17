class apierror extends Error{

    constructor(statuscode,message,stack="",error=[]){
        super(message)
        this.statuscode=statuscode
        this.message=message
        this.data=null
        this.sucess=false
    }



}
export {apierror}