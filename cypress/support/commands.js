// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openObesitySavingsForm', (url) => {
  cy.get('#onetrust-accept-btn-handler').click();
  cy.get('nav > a').click();
  cy.get('body > div.container.main > div.root.responsivegrid > div > div:nth-child(3) > section > div > div > div:nth-child(4) > section > div > div > div.contentbox.aem-GridColumn--default--none.aem-GridColumn--phone--none.aem-GridColumn--phone--6.aem-GridColumn.aem-GridColumn--offset--phone--0.aem-GridColumn--default--3.aem-GridColumn--offset--default--0 > section > div > div > div.buttonComponent.aem-GridColumn.aem-GridColumn--default--12 > div > a > span.icon-text > strong').click();
  cy.get(':nth-child(1) > :nth-child(3) > .cope-core-navigation-top-section-title > a > .cope-core-navigation-top-section-title-wrapper > .cope-core-navigation-top-section-text').click();
  cy.url().should('include', '/hcp/obesity/savings-and-support.html');
});

Cypress.Commands.add('nextFormQuickCheck', (url) => {
  cy.get('#quickcheck--1173156496').check({ force: true });
  cy.get('#quickcheckWegovy-1676754735').check({ force: true });
  cy.get('[data-name="NEXT QUICKCHECK"] > .aem-Grid > .buttonComponent > .media__body > .btn').click();
  cy.get('[data-name="form-quickcheck"] > :nth-child(1) > .registration-form > .registration-form-component > .row > :nth-child(2)').should('be.visible');

});

Cypress.Commands.add('nextFormEnrollment', (url) => {
  cy.get('#enrollment--1173156496').check({ force: true });
  cy.get('#enrollmentWegovy--1134398113').check({ force: true });
  cy.get('[data-name="NEXT ENROLLMENT"] > .aem-Grid > .buttonComponent > .media__body > .btn').click();
  cy.get('[data-name="form-enrollment"] > :nth-child(1) > .registration-form > .registration-form-component > .row > :nth-child(2)').should('be.visible');
});

Cypress.Commands.add('validateEmptyFieldWithError', (inputSelector, messageSelector, expectedText) => {
 

  cy.get(inputSelector).should('be.visible').and('have.value', '');

   
  cy.get(messageSelector).should('be.visible')
    .and('have.text', expectedText)
    .and('have.css', 'color', 'rgb(218, 62, 35)')
    .and('have.css', 'font-size', '16px');
});

Cypress.Commands.add('validateEmptyRadioGroupWithError', (radioSelectors = [], errorSelector, expectedText) => {
  radioSelectors.forEach(selector => {
    cy.get(selector).should('not.be.checked');
  });

  cy.get(errorSelector)
    .should('be.visible')
    .and('have.text', expectedText)
    .and('have.css', 'color', 'rgb(218, 62, 35)')
    .and('have.css', 'font-size', '16px');
});

Cypress.Commands.add('validateFieldSuccess', (inputSelector, expectedValue, successMessageSelector) => {
  cy.get(inputSelector).should('have.value', '');

  cy.get(inputSelector).type(expectedValue).blur();


  cy.get(successMessageSelector)
    .should('be.visible')
    .and('have.css', 'color', 'rgb(99, 158, 53)');
  }
);

Cypress.Commands.add('validateSelectSuccess', (selectSelector, optionValue, successMessageSelector) => {
  cy.get(selectSelector).select(optionValue).blur();

  cy.get(successMessageSelector)
    .should('be.visible')
    .and('have.css', 'color', 'rgb(99, 158, 53)');
});

Cypress.Commands.add('validateInvalidFieldError', (inputSelector, expectedValue, messageSelector, expectedText) => {
  cy.get(inputSelector).should('have.value', '');
  cy.get(inputSelector).type(expectedValue).blur();
   
  cy.get(messageSelector).should('be.visible')
    .and('have.text', expectedText)
    .and('have.css', 'color', 'rgb(218, 62, 35)')
    .and('have.css', 'font-size', '16px');
});


Cypress.Commands.add('nextFormInsuranceInfo', (qa, selectors) => {
  const s = selectors;
  const data = qa;

  cy.get(s.inputFirstNamePatientInfo).type(data.enterInformationFirstName).blur();
  cy.get(s.inputLastNamePatientInfo).type(data.enterInformationLastName).blur();
  cy.get(s.inputDateOfBirthPatientInfo).type(data.enterInformationDateBirth).blur();
  cy.get(s.radioButtonFemalePatientInfo).click({force: true})
  cy.get(s.radioButtonEnglishPatientInfo).click({force: true})
  cy.get(s.inputHomeAddressPatientInfo).type(data.enterInformationHomeAddress).blur();
  cy.get(s.inputCityPatientInfo).type(data.enterInformationCity).blur();
  cy.get(s.selectStatePatientInfo).select(data.enterInformationState);
  cy.get(s.inputZipPatientInfo).type(data.enterInformationZip).blur();
  cy.get(s.inputPreferredPhonePatientInfo).type(data.enterInformationPhone).blur();
  cy.get(s.radioButtonNoGuardianLegal);
  cy.get(s.nextButtonInsuranceInfo).click();
   
});