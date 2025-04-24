class NewUserPage {

    SelectorsList() {
        const selectors = {
            usernameField: '#firstName',
            passwordField: '#lastName',
            loginButton: "[type='submit']",
            dailogAlert: "[role='alert']",
            saveCredentialsCheckbox: "[type='checkbox']"
        }
        return selectors
    }

    accessSignupPage() {
        cy.visit("http://localhost:3000/signup/")
    }
 
    createNewUser(firstName, lastName, nickname, password) {
        cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
        cy.get('#username').type (nickname)
        cy.get('#password').type(password)
        cy.get('#confirmPassword').type(password)
        cy.get('[data-test="signup-submit"]').click()
    }
}

export default NewUserPage