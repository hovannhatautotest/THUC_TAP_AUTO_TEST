// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './const'
import './commands'
require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent Cypress from failing the test
    return false;
});
beforeEach(()=>{
    cy.visit('http://duv23hk3u3y8m.cloudfront.net/vn/auth/login')
    cy.wait(1000)
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[4]/label/div').click()
    cy.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div').click()
    cy.wait(1000)
    const username = "admin@admin.com"
    const password = "Password1!"
    const Notification = "Success"
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('#idSubmit').click()
    cy.wait(10000)
    cy.xpath('/html/body/div/main/div[2]/div[2]').click() 
    cy.wait(2000)
    cy.xpath('/html/body/div/main/div[3]/ul/li[1]/div/div/div/div').click() 
    cy.wait(2000)
    cy.get('.ant-collapse-content-box > ul > :nth-child(2)').click()
});
//import { fullname, email, password, retype_password, sdt, date_of_birth, position, start_date, role } from './const';
// Alternatively you can use CommonJS syntax:
// require('./commands')