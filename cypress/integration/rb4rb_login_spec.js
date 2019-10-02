describe('Login Page', function() {
  it('should contain a client logo, header, and copyright info', function() {
    cy.visit('https://rb4rb.redbrickhealth.com')

    // Logo
    cy.get('#logo-image')

    // Welcome header
    cy.get('.form-prompt')
        .first()
        .should('have.text', 'Welcome')

    // Copyright
    cy.get('.copyright')
        .first()
        .should('contain.text', '© 2019 RedBrick Health. All Rights Reserved.')
    cy.get('.copyright a')
        .should('contains.text', 'Privacy Policy')
        .and('have.attr', 'href')
        .and('include', 'https://home.redbrickhealth.com/privacy')
  })

  it('should contain forgot username or password links', function() {
    cy.visit('https://rb4rb.redbrickhealth.com')

    cy.get('#forgotPassword-content a')
        .should('have.text', 'Forgot your password?')
        .and('have.attr', 'href')
        .and('include', 'https://rb4rb.redbrickhealth.com/portal/login/forgotPassword')

    cy.get('#forgotUsername-content a')
        .should('have.text', 'Forgot your username?')
        .and('have.attr', 'href')
        .and('include', 'https://rb4rb.redbrickhealth.com/portal/login/forgotUsername')
  })

  it('should contain a registration header and link', function() {
    cy.visit('https://rb4rb.redbrickhealth.com')

    cy.get('#registration-content h4')
        .should('have.text', "Don't have a username?")

    cy.get('#registration-content p a')
        .should('have.text', 'Activate your account to get started')
        .and('have.attr', 'href')
        .and('include', 'https://rb4rb.redbrickhealth.com/portal/registration')
 })

  it('should contain contact information', function() {
    cy.visit('https://rb4rb.redbrickhealth.com')

    cy.get('#help-content h4')
        .should('have.text', 'Need help? Contact us')

    cy.get('#contact-info #phone')
        .should('have.text', '1-877-680-4060')

    cy.get('#hours-expanded .item')
        .should('have.text', 'Monday7:00 a.m.–10:00 p.m. CTTuesday7:00 a.m.–10:00 p.m. CTWednesday7:00 a.m.–10:00 p.m. CTThursday7:00 a.m.–10:00 p.m. CTFriday7:00 a.m.–7:00 p.m. CTSaturday7:00 a.m.–2:00 p.m. CT')
  })

  it('should display error with invalid credentials', function() {
    cy.visit('https://rb4rb.redbrickhealth.com')

    cy.populateField('#username', 'fake_username')
    cy.populateField('#password', 'fake_password')

    cy.contains('Log In').click()

    cy.get('p[class="text alert-error"]')
        .first()
        .should('have.text', "You've used an invalid username or password. Try again or activate your account.")
  })
})
