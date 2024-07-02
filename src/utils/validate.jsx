export const checkValidData=(email,password,Name)=>{
    const isEmailValid=/^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/.test(email)
    const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
    const isNamevalid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(Name)
    if (!isEmailValid) {
        return "Email-Id is not Valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    if(!isNamevalid){
        return "Name is not Valid"
    }
    return null;
}