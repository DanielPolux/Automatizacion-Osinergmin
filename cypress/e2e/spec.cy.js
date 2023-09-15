import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://srvcertsiged2.osinergmin.gob.pe/siged/login.action')
    LoginMethods.insertUserName('SQUITO'), 
    LoginMethods.insertPassword('Peru2022%2')
    LoginMethods.clickOnLoginButton()
    cy.get('div[id="widget_roleFilteringSelect"] input').eq(0).click()
    cy.contains('Siged - Usuario Final').click()
    cy.wait(5000)
    LoginMethods.clickOnIngresarButton()
    // cy.get('span[dojoattachpoint="containerNode"]').eq(2).click()
    cy.wait(1500)

    cy.get('a.poniter').eq(0)
      
    cy.wait(5000)


  })
})