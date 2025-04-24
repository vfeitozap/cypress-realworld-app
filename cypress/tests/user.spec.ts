import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import NewUserPage from '../pages/signUpPage'
import UserDataPage from '../pages/userPage'

const loginPage = new LoginPage()
const signUpPage = new NewUserPage()
const userDataPage = new UserDataPage()

describe('Cypress Realworld User Scenarios', () => {
    
    it('Creating Bank Account', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        cy.get('[data-test="user-onboarding-dialog-title"]')
        cy.get('[data-test="user-onboarding-next"]').click()
        cy.get('[data-test="user-onboarding-dialog-title"]')
        cy.get('#bankaccount-bankName-input').type("American Trust Bank")
        cy.get('#bankaccount-routingNumber-input').type("074000078")
        cy.get('#bankaccount-accountNumber-input').type("050013409871")
        cy.get('[data-test="bankaccount-form"] > .MuiGrid-container > .MuiGrid-root')
    })
    
  })