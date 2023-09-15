export class LoginElements{
    static get tetxboxes(){
        return{
            get username(){
                return cy.get('input#vtbUsuario');
            },
            get password(){
                return cy.get('input#tbPassword');
            }
        }
    }

    static get buttons(){
        return{
            get login(){
                return cy.get('span[id="submitPreLoginBtn_label"] span')
            },
            get ingresar(){
                return cy.get('span#botonIngresar_label')
            }
        }
    }

}