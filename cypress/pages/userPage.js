class UserDataPage {
    SelectorsList() {
        const selectors = {
            initialScreenPopUp: '[data-test="user-onboarding-dialog-title"]',
            nextButton: '[data-test="user-onboarding-next"]',
            createBankAccountScreenPopUp: '[data-test="user-onboarding-dialog-title"]',
            bankAccountField: '#bankaccount-bankName-input',
            routingNumberField: '#bankaccount-routingNumber-input',
            accountNumberField: '#bankaccount-accountNumber-input',
            createAccountButton: '[data-test="bankaccount-form"] > .MuiGrid-container > .MuiGrid-root',
            ballanceAccountInofrmation: '.NavDrawer-amount',
            newTransactionButton: '[data-test="nav-top-new-transaction"]'

        }
        return selectors

    }
popupScreenContinuation() {
cy.get(this.initialScreenPopUp)
cy.get(this.nextButton).click()
}
userBankAccountInformation() {
    cy.get(this.createBankAccountScreenPopUp)
    cy.get(this.bankAccountField).type(bankName)
    cy.get(this.routingNumberField).type(routingNumber)
    cy.get(this.accountNumberField).type(accountNumber)
    cy.get(this.createAccountButton)
}
userBallanceAccoount() {
    cy.get(this.ballanceAccountInofrmation).check()
}
newTransaction() {
cy.get(this.newTransactionButton).click()
}
}

export default UserDataPage
