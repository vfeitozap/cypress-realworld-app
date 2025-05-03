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
        cy.get('[data-test="user-onboarding-next"]').click()
        cy.get('.MuiListSubheader-root').contains("Public")
        cy.get('#bankaccount-bankName-input').type("ATB - American Trust Bank")
        cy.get('#bankaccount-routingNumber-input').type("121000248")
        cy.get('#bankaccount-accountNumber-input').type("50012349876")
        cy.get('[data-test="bankaccount-submit"]').click()
        
    })
    it('Request Money', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        cy.get('[data-test="sidenav-user-balance"]')
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-item-_XblMqbuoP"] > .MuiListItemText-root > .MuiTypography-body1').click()
        cy.get('#amount').type("100.00")
        cy.get('#transaction-create-description-input').type('Transaction Test')
        cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)').click()
        cy.get('.MuiAlert-message')
        cy.get('[data-test="new-transaction-create-another-transaction"]').click()
    })
    it('Send Money', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        cy.get('[data-test="sidenav-user-balance"]')
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body1').click()
        cy.get('#amount').type("1000.00")
        cy.get('#transaction-create-description-input').type('Send Money Test')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.get('.MuiAlert-message')
        cy.get('[data-test="new-transaction-create-another-transaction"]').click()
    })
    it('Check Balance Account', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        cy.get('[data-test="sidenav-user-balance"]')
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.get('.MuiListSubheader-root').contains("Personal")
    })
  })