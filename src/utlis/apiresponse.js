class apiresponse{
    constructor(statusCode,message="sucess"){
        // super(message) super is written where we want soemething from the parent element,no parent no super
        this.message=message
        this.statusCode=statusCode
        this.success=statusCode< 400

    }
}
export {apiresponse}







