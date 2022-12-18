export interface Credentials {
    username: string,
    password: string
}

export interface JwtToken {
    jwtToken: string
}

export interface Register {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    mail: string,
    isActivated ?: boolean,
    isActive ?: boolean,
    createdDate : string,
    updatedDate: string
}