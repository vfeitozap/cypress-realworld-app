class LoginPage {

    SelectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            dailogAlert: "[role='alert']",
            saveCredentialsCheckbox: "[type='checkbox']"
        }
        return selectors
    }
   
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }
    loginWithAnyUser(username, password) {
        cy.get(this.SelectorsList().usernameField).type(username)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().loginButton).click()
    } 
    wrongCredentials() {
        cy.get(this.SelectorsList().dailogAlert)
    }
    rememberCredetials() {
        cy.get(this.SelectorsList.saveCredentialsCheckbox).click()
    }
}  
export default LoginPage