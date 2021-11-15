export interface UserResponse{
    payload: {
        email: String,
        firstName: String,
        lastName: String,
        profileImage: String,
        role: String,
        userName: String,
    }
        
    status: String,
    token: String
}