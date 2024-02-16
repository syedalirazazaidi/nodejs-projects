class ApiResponse {
    statusCode: any
    data: any
    message: string
    success: boolean
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }