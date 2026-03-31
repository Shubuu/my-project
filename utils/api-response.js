class ApiResponse {
  constructor(statusCode, message, data = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;