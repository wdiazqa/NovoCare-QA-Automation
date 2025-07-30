import { selectors } from '../../support/selectors/obesity-savings-support-selector';


describe('Obesity Savings and Support Form', () => {

  beforeEach(function () {
    cy.fixture('obesity-savings-support-form').as('qa');
    cy.visit('https://novocare.prb.nnittest.com/');    
    cy.openObesitySavingsForm();
  });

  it('validates functionality of the Requested service type section (QuickCheck)', function () {
     
   cy.get('[for="quickcheck--1173156496"] > .pl-2').should('be.visible')
      .and('have.text', this.qa.quickcheckLabel);
   cy.get('#quickcheck--1173156496').check({ force: true });
  
   cy.get('[data-name="pre-quickcheck"] > :nth-child(1) > .radiogroup > .radiogroup-component > .form-grouped > .control-label > :nth-child(1) > p').should('be.visible')
      .and('contain.text', this.qa.quickcheckTitle);

   cy.get('#quickcheckWegovy-1676754735').should('not.be.checked');
   cy.get('[for="quickcheckWegovy-1676754735"] > .pl-2').should('be.visible')
      .and('contain.text', this.qa.wegovyLabel);

   cy.get('#quickcheckSaxenda-1676754735').should('not.be.checked');
   cy.get('[for="quickcheckSaxenda-1676754735"] > .pl-2').should('be.visible')
      .and('contain.text', this.qa.saxendaLabel);

   cy.get('#quickcheckBoth-1676754735').should('not.be.checked');
   cy.get('[for="quickcheckBoth-1676754735"] > .pl-2').should('be.visible')
      .and('contain.text', this.qa.bothLabel);
    
   cy.get('#quickcheckWegovy-1676754735').check({ force: true });
   cy.get('[data-name="NEXT QUICKCHECK"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text', this.qa.nextButtonText);

   cy.get('#quickcheckSaxenda-1676754735').check({ force: true });
   cy.get('[data-name="NEXT QUICKCHECK"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text',  this.qa.nextButtonText);

   cy.get('#quickcheckBoth-1676754735').check({ force: true });
   cy.get('[data-name="NEXT QUICKCHECK"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text',  this.qa.nextButtonText);
    
   cy.get('[data-name="NEXT QUICKCHECK"] > .aem-Grid > .buttonComponent > .media__body > .btn').click();
   cy.get('[data-name="form-quickcheck"] > :nth-child(1) > .registration-form > .registration-form-component > .row > :nth-child(2)').should('be.visible');
   
   
  
  })

  it('validates functionality of the Requested service type section (NovaCare enrollment)', function () {

   cy.get('#enrollment--1173156496').check({ force: true });
   cy.get('[data-name="pre-enrollment"] > .aem-Grid > .radiogroup > .radiogroup-component > .form-grouped > .control-label > :nth-child(1) > p').should('be.visible')
      .and('contain.text', this.qa.enrollmentTitle);
   
   cy.get('#enrollmentWegovy--1134398113').should('not.be.checked')
   cy.get('[for="enrollmentWegovy--1134398113"] > .pl-2').should('be.visible')
      .and('contain.text', this.qa.wegovyLabel);

    cy.get('#enrollmentSaxenda--1134398113').should('not.be.checked');
    cy.get('[for="enrollmentSaxenda--1134398113"] > .pl-2').should('be.visible')
      .and('contain.text', this.qa.saxendaLabel);
    
    cy.get('#enrollmentBoth--1134398113').should('not.be.checked');
    cy.get('[for="enrollmentBoth--1134398113"] > .pl-2').should('be.visible')
    .and('contain.text', this.qa.bothLabel);

    cy.get('#enrollmentWegovy--1134398113').check({ force: true });
    cy.get('[data-name="NEXT ENROLLMENT"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text',  this.qa.nextButtonText);

    cy.get('#enrollmentSaxenda--1134398113').check({ force: true });
    cy.get('[data-name="NEXT ENROLLMENT"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text',  this.qa.nextButtonText);

    cy.get('#enrollmentBoth--1134398113').check({ force: true });
    cy.get('[data-name="NEXT ENROLLMENT"] > .aem-Grid > .buttonComponent > .media__body > .btn').should('be.visible')
      .and('contain.text',  this.qa.nextButtonText);

    cy.get('[data-name="NEXT ENROLLMENT"] > .aem-Grid > .buttonComponent > .media__body > .btn').click();
    cy.get('[data-name="form-enrollment"] > :nth-child(1) > .registration-form > .registration-form-component > .row > :nth-child(2)').should('be.visible');
  

  })

  it("Validates enter correct fields in Section 1: Patient Info (QuickCheck)", function () {

    cy.nextFormQuickCheck();

    cy.validateFieldSuccess(
      selectors.inputFirstNamePatientInfo,        
      this.qa.enterInformationFirstName,     
      selectors.messageSuccessFirstNamePatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputLastNamePatientInfo,        
      this.qa.enterInformationLastName,     
      selectors.messageSuccessLastNamePatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputDateOfBirthPatientInfo,        
      this.qa.enterInformationDateBirth,     
      selectors.messageSuccessDateOfBirthPatientInfo    
    );
    
    cy.get(selectors.radioButtonFemalePatientInfo).click({ force: true }),
    cy.get(selectors.radioButtonOtherPatientInfo).click({force: true}),
    

    cy.validateFieldSuccess(
      selectors.inputEnterLanguagePatientInfo,        
      this.qa.enterInformationLanguage,     
      selectors.messageSuccessLanguagePatientInfo    
    );
    
    cy.validateFieldSuccess(
      selectors.inputHomeAddressPatientInfo,        
      this.qa.enterInformationHomeAddress,     
      selectors.messageSuccessHomeAddressPatientInfo    
    );
    
     cy.validateFieldSuccess(
      selectors.inputHomeAddress2PatientInfo,        
      this.qa.enterInformationHomeAddress2,     
      selectors.messageSuccessHomeAddress2PatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputCityPatientInfo,        
      this.qa.enterInformationCity,     
      selectors.messageSuccessCityPatientInfo    
    );

    cy.validateSelectSuccess(
      selectors.selectStatePatientInfo,
      this.qa.enterInformationState,
      selectors.messageSuccessStatePatientInfo

    );

    cy.validateFieldSuccess(
      selectors.inputZipPatientInfo,        
      this.qa.enterInformationZip,     
      selectors.messageSuccessZipPatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputPreferredPhonePatientInfo,        
      this.qa.enterInformationPhone,     
      selectors.messageSuccessPreferredPhonePatientInfo    
    );


    cy.get(selectors.radioButtonYesGuardianLegal).click({force: true}),
    
    cy.validateFieldSuccess(
      selectors.inputGuardianFirstNamePatientInfo,        
      this.qa.enterInformationGuardianFirstName,     
      selectors.messageSuccessGuardianFirstNamePatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputGuardianLastNamePatientInfo,        
      this.qa.enterInformationGuardianLastName,     
      selectors.messageSuccessGuardianLastNamePatientInfo    
    );

    cy.validateFieldSuccess(
      selectors.inputRelationshipPatientInfo,        
      this.qa.enterInformationGuardianRelationship,     
      selectors.messageSuccessRelationshipPatientInfo    
    );
    

  });
   
  it("Validates required fields in Section 1: Patient Info (QuickCheck)", function () {

    cy.nextFormQuickCheck();

    cy.get(selectors.nextButtonPatientInfo).click();
     
    cy.validateEmptyFieldWithError(
      selectors.inputFirstNamePatientInfo,
      selectors.messageErrorFirstNamePatientInfo,
      this.qa.requiredMessageFirstName
    );
    
    cy.validateEmptyFieldWithError(
      selectors.inputLastNamePatientInfo,
      selectors.messageErrorLastNamePatientInfo,
      this.qa.requiredMessageLastName
    );

    cy.validateEmptyFieldWithError(
      selectors.inputDateOfBirthPatientInfo,
      selectors. messageErrorDateOfBirthPatientInfo,
      this.qa.requiredMessageDateBirth
    );

    cy.validateEmptyRadioGroupWithError(
      [
        selectors.radioButtonFemalePatientInfo,
        selectors.radioButtonMalePatientInfo
       
      ],
      selectors.messageErrorGenderPatientInfo,
      this.qa.requiredMessageGender
    );

    cy.validateEmptyRadioGroupWithError(
      [
       selectors.radioButtonEnglishPatientInfo,
       selectors.radioButtonSpanishPatientInfo,
       selectors.radioButtonOtherPatientInfo
      ],
      selectors.messageErrorGenderPatientInfo,
      this.qa.requiredMessageLanguage
    );

    cy.get(selectors.radioButtonOtherPatientInfo).click();
    cy.get(selectors.inputEnterLanguagePatientInfo).should("have.value", "");
      

    cy.validateEmptyFieldWithError(
      selectors.inputHomeAddressPatientInfo,
      selectors.messageErrorHomeAddressPatientInfo,
      this.qa.requiredMessageAddress
    );

    cy.get(selectors.inputHomeAddress2PatientInfo).should("have.value", "");
   

    cy.validateEmptyFieldWithError(
      selectors.inputCityPatientInfo,
      selectors.messageErrorCityPatientInfo,
      this.qa.requiredMessageCity
    );

    cy.validateEmptyFieldWithError(
      selectors.selectStatePatientInfo,
      selectors.messageErrorStatePatientInfo,
      this.qa.requiredMessageState
    );

    cy.validateEmptyFieldWithError(
      selectors.inputZipPatientInfo,
      selectors.messageErrorZipPatientInfo,
      this.qa.requiredMessageZipCode
    );

    cy.validateEmptyFieldWithError(
      selectors.inputPreferredPhonePatientInfo,
      selectors.messageErrorPreferredPhonePatientInfo,
      this.qa.requiredMessagePhone
    );

    cy.get(selectors.inputDateOfBirthPatientInfo).type('04061996');
    cy.get(selectors.nextButtonPatientInfo).click();
    cy.get(selectors.radioButtonYesGuardianLegal).check({ force: true });
    
    cy.validateEmptyFieldWithError(
      selectors.inputGuardianFirstNamePatientInfo,
      selectors.messageErrorGuardianFirstNamePatientInfo,
      this.qa.requiredMessageGuardianFirstName
    );
    
    cy.validateEmptyFieldWithError(
      selectors.inputGuardianLastNamePatientInfo,
      selectors.messageErrorGuardianLastNamePatientInfo,
      this.qa.requiredMessageGuardianLastName
    );

    cy.validateEmptyFieldWithError(
      selectors.inputRelationshipPatientInfo,
      selectors.messageErrorRelationshipPatientInfo,
      this.qa.requiredMessageRelationship
    );


  });

  it("Validates valid fields in Section 1: Patient Info (QuickCheck)", function () {

    cy.nextFormQuickCheck();

    cy.validateInvalidFieldError(
      selectors.inputFirstNamePatientInfo,              
      this.qa.enterIncorrectInformationFirstName,                     
      selectors.messageErrorFirstNamePatientInfo,       
      this.qa.invalidMessageFirstName 
    );

    cy.validateInvalidFieldError(
      selectors.inputLastNamePatientInfo,              
      this.qa.enterIncorrectInformationLastName,                     
      selectors.messageErrorLastNamePatientInfo,       
      this.qa.invalidMessageLastName 
    );

    cy.validateInvalidFieldError(
      selectors.inputZipPatientInfo,              
      this.qa.enterIncorrectInformationZip,                     
      selectors.messageErrorZipPatientInfo,       
      this.qa.invalidMessageZipCode
    );

    cy.validateInvalidFieldError(
      selectors.inputPreferredPhonePatientInfo,              
      this.qa.enterIncorrectInformationPhone,                     
      selectors.messageErrorPreferredPhonePatientInfo,       
      this.qa.invalidMessagePhone
    );

   });

   it("Validates enter correct fields in Section 2: Insurance Info (QuickCheck)", function () {

    cy.nextFormQuickCheck();
    cy.nextFormInsuranceInfo(this.qa, selectors);
   
    

  });

})