describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://novocare.prb.nnittest.com/')
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('nav > a').click();
    cy.get('body > div.container.main > div.root.responsivegrid > div > div:nth-child(3) > section > div > div > div:nth-child(4) > section > div > div > div.contentbox.aem-GridColumn--default--none.aem-GridColumn--phone--none.aem-GridColumn--phone--6.aem-GridColumn.aem-GridColumn--offset--phone--0.aem-GridColumn--default--3.aem-GridColumn--offset--default--0 > section > div > div > div.buttonComponent.aem-GridColumn.aem-GridColumn--default--12 > div > a > span.icon-text > strong').click();
    cy.get(':nth-child(1) > :nth-child(3) > .cope-core-navigation-top-section-title > a > .cope-core-navigation-top-section-title-wrapper > .cope-core-navigation-top-section-text').click();
  })
})