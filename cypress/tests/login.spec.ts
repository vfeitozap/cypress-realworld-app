import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import NewUserPage from '../pages/signUpPage'

const loginPage = new LoginPage()
const signUpPage = new NewUserPage()

describe('Cypress Realworld Login', () => {
  
  it('Creating New User - Success', () => {
    signUpPage.accessSignupPage()
    signUpPage.createNewUser(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.nickname, userData.newUser.password)
  })
  it('Login - Fail User', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userSuccess.password)
  })
  it('Login - Fail Password', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
  })
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.get('.MuiListSubheader-root').contains("Public")
  })

})