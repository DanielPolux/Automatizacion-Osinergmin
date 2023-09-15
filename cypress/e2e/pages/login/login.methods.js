import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUserName(username){
        LoginElements.tetxboxes.username.invoke('val',username)
    }

    static insertPassword(password){
        LoginElements.tetxboxes.password.invoke('val',password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }   

    static clickOnIngresarButton(){
        LoginElements.buttons.ingresar.click()
    }
}