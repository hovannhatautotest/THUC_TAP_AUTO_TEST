/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { date_of_birth, email, fullname, password, position, retype_password, role, sdt, start_date } from "../../support/const"

describe('Verify validation text', () => {
    
    //TEST CASE 01
    it('Verify that validation text when CRUD USER with all fields empty ', () => {
        cy.get('#idSubmit').click()
        cy.wait(2000)
        cy.get('#name_help > .ant-form-item-explain-error').should('have.text','Please enter full name')
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text','Please enter email')
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text','Please enter password')
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should('have.text','Please enter retype password')
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text','Please enter số điện thoại')
        cy.get('#dob_help > .ant-form-item-explain-error').should('have.text','Please choose date of birth')
        cy.get('#positionCode_help > .ant-form-item-explain-error').should('have.text','Please choose position')
        cy.get('#startDate_help > .ant-form-item-explain-error').should('have.text','Please choose start date')
        cy.get('#roleCode_help > .ant-form-item-explain-error').should('have.text','Please choose role')
    })

    //TEST CASE 02
    it('Verify that validation text of "Full Name" field display when CRUD USER with "Full Name" field empty', () => {
        cy.get('#name').click()
        cy.get('#email').type(email)
        cy.get('#name_help > .ant-form-item-explain-error').should('have.text','Please enter full name')
        cy.wait(2000)
    })

    //TEST CASE 03
    it('Verify that validation text of "Full Name" field display when CRUD USER with "Email" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').click()
        cy.get('#password').type(password)
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text','Please enter email')
        cy.wait(2000)
    })

    // TEST CASE 04
    it('Verify that the Email field validation text is displayed when CRUD USER with Email invalid format and less than 6 characters long.', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type('text')
        cy.get('#password').type(password)
        cy.get('#email_help > :nth-child(1)').should('have.text','Please enter a valid email address!')
        cy.get('#email_help > :nth-child(2)').should('have.text','Please enter at least 6 characters!')
        cy.wait(2000)
    })

    //TEST CASE 05
    it('Verify that the Email field validation text is displayed when CRUD USER with Email invalid format and greater than 6 characters long.', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type('text_user')
        cy.get('#password').type(password)
        cy.get('#email_help > .ant-form-item-explain-error').should('have.text','Please enter a valid email address!')
        cy.wait(2000)
    })
    
    //TEST CASE 06
    it('Verify that validation text of "Password" field display when CRUD USER with "Password" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').click()
        cy.get('#retypedPassword').click()
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text','Please enter password')
        cy.wait(2000)
    })

    //TEST CASE 07
    it('Verify that validation text of "Password" field display when CRUD USER with "Password" field less than 6 characters', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type('12345')
        cy.get('#retypedPassword').click()
        cy.get('#password_help > :nth-child(1)').should('have.text','Please enter at least 6 characters!')
        cy.get('#password_help > :nth-child(2)').should('have.text','Please enter at least 6 number characters!')
        cy.wait(2000)
    })

    //TEST CASE 08
    it('Verify that validation text of "Password" field display when CRUD USER with "Password" field not enough security', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type('text_user')
        cy.get('#retypedPassword').click()
        cy.get('#password_help > .ant-form-item-explain-error').should('have.text','Password needs to have at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character')
        cy.wait(2000)
    })

    //TEST CASE 09
    it('Verify that validation text of "Retype Password" field display when CRUD USER with "Retype Password" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').click()
        cy.get('#phoneNumber').click()
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should('have.text','Please enter retype password')
        cy.wait(2000)
    })

    //TEST CASE 10
    it('Verify that validation text of "Retype Password" field display when CRUD USER with "Password" and "RetypePassword" fields is inconsistent', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type('Nhat@01101999a')
        cy.get('#phoneNumber').click()
        cy.get('#retypedPassword_help > .ant-form-item-explain-error').should('have.text','Two passwords that you enter is inconsistent!')
        cy.wait(2000)
    })

    //TEST CASE 11
    it('Verify that validation text of "Số điện thoại" field display when CRUD USER with "Số điện thoại" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').click()
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .click()
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text','Please enter số điện thoại')
        cy.wait(2000)
    })

    //TEST CASE 12
    it('Verify that validation text of "Số điện thoại" field display when CRUD USER with "Số điện thoại" field invalid format', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type('text_user123')
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .click()
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text','Please enter only number')
        cy.wait(2000)
    })
    
    //TEST CASE 13
    it('Verify that validation text of "Số điện thoại" field display when CRUD USER with "Số điện thoại" field more than 12 numbers characters', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type('1234567891011')
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .click()
        cy.get('#phoneNumber_help > .ant-form-item-explain-error').should('have.text','Please enter maximum 12 number characters!')
        cy.wait(2000)
    })

    //TEST CASE 14
    it('Verify that validation text of "Date of birth" field display when CRUD USER with "Date of birth" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .click()
        cy.get('#positionCode').click()
        cy.get('#dob_help > .ant-form-item-explain-error').should('have.text','Please choose date of birth')
        cy.wait(2000)
    })
    
    //TEST CASE 15
    it('Verify that validation text of "Position" field display when CRUD USER with "Position" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get(':nth-child(7) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(start_date).type('{enter}')
        cy.get('#roleCode').type(role).wait(3000).type('{Enter}')
        cy.get('#idSubmit').click()
        cy.get('#positionCode_help > .ant-form-item-explain-error').should('have.text','Please choose position')
        cy.wait(2000)
    })

    //TEST CASE 16 
    it('Verify that validation text of "Start Date" field display when CRUD USER with "Start Date" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get('#positionCode').type(position).wait(3000).type('{enter}')
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .click()
        cy.get('#roleCode').click()
        cy.get('#startDate_help > .ant-form-item-explain-error').should('have.text','Please choose start date')
        cy.wait(2000)
    })

    //TEST CASE 17
    it('Verify that validation text of "Role" field display when CRUD USER with "Role" field empty', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get('#positionCode').type(position).wait(3000).type('{enter}')
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(start_date).type('{Enter}')
        cy.get('#roleCode').click()
        cy.get('#idSubmit').click()
        cy.get('#roleCode_help > .ant-form-item-explain-error').should('have.text','Please choose role')
        cy.wait(2000)
    })
})

describe('Verify error message', () => {
    
    //TEST CASE 18
    it('Verify that error message display when CRUD USER with Email is already taken', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type('staff@gmail.com')
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get('#positionCode').type(position).wait(3000).type('{enter}')
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(start_date).type('{Enter}')
        cy.get('#roleCode').type(role).wait(3000).type('{Enter}')
        cy.get('#idSubmit').click()
        cy.wait(2000)
        cy.get('#swal2-title').should('have.text','Fail')
        cy.xpath('/html/body/div[2]/div/div[2]').should('have.text','Email is already taken')
        cy.wait(2000)
    })
})

describe('Verify Crud user successfuly', () => {

    //TEST CASE 19
    it('Verify that Crud user is successful when Enter complete information with no already existing on the system', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get('#positionCode').type(position).wait(3000).type('{enter}')
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(start_date).type('{Enter}')
        cy.get('#roleCode').type(role).wait(3000).type('{Enter}')
        cy.get('.ant-select-selection-overflow').click()
        cy.wait(2000)
        cy.xpath("//div[text()='Testing']").click()
        cy.get('#managerId').wait(2000).type('Hồ Văn Nhật').wait(5000).type('{Enter}')
        cy.get('#idSubmit').click()
        cy.get('#swal2-title').should('have.text','Success')
        cy.xpath('/html/body/div[2]/div/div[2]').should('have.text','Create Success')
    })
})

describe('Verify displays the password', () => {
    
    //TEST CASE 20
    it('Verify that the password can be displayed in text format when clicking on the "Eye" icon at "Password" field.', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#password').should('have.attr','type','password')
        cy.get('svg[id="Layer_1"]').eq(6).click()
        cy.get('#password').should('have.attr','type','text')
    })

    //TEST CASE 21
    it('Verify that the password can be displayed in text format when clicking on the "Eye" icon at "RetypePassword" field.', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#retypedPassword').should('have.attr','type','password')
        cy.get('svg[id="Layer_1"]').eq(7).click()
        cy.get('#retypedPassword').should('have.attr','type','text')
    })
})
describe('Verify refresh page', () => {
    //TEST CASE 22
    it('Verify entered data not showing when Refresh with F5', () => {
        cy.get('#name').type(fullname)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#retypedPassword').type(retype_password)
        cy.get('#phoneNumber').type(sdt)
        cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(date_of_birth).type('{Enter}')
        cy.get('#positionCode').type(position).wait(3000).type('{enter}')
        cy.get(':nth-child(8) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker')
        .type(start_date).type('{Enter}')
        cy.get('#roleCode').type(role).wait(3000).type('{Enter}')
        cy.get('.ant-select-selection-overflow').click()
        cy.wait(2000)
        cy.xpath("//div[text()='Testing']").click()
        cy.get('#managerId').wait(2000).type('Hồ Văn Nhật').wait(5000).type('{Enter}')
        cy.reload()
        cy.get('#name').should('be.empty')
        cy.get('#email').should('be.empty')
        cy.get('#password').should('be.empty')
        cy.get('#retypedPassword').should('be.empty')
        cy.get('#phoneNumber').should('be.empty')
        cy.get('#dob').should('be.empty')
        cy.get('#positionCode').should('be.empty')
        cy.get('#startDate').should('be.empty')
        cy.get('#roleCode').should('be.empty')
        cy.xpath("//span[text()='Choose team']").should('have.text','Choose team')
        cy.get('#managerId').should('be.empty')
    })
})