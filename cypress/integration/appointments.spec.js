describe("appointments", () => {

  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit('/');

    cy.contains("Monday");
  });

  it("should book an interview", () => {

    cy.get("[alt=Add]")
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones");

    cy.get("[alt='Sylvia Palmer']").click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");


  });

  it("should edit an interview", () => {

    cy.contains("Archie Cohen")
    .get("[alt='Edit']").invoke('show').click()
    

  cy.get("[data-testid=student-name-input]")
    .clear()
    .type("Darth Vader");

  cy.get("[alt='Tori Malcolm']").click();

  cy.contains("Save").click();

  cy.contains(".appointment__card--show", "Darth Vader");
  cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    cy.contains("Archie Cohen")
    .get("[alt='Delete']").invoke('show').click()

    cy.contains("Confirm").click()

    cy.contains("You're making a huge mistake!!").should("exist")
    cy.contains("You're making a huge mistake!!").should("not.exist")

    cy.contains(".appointment__card--show", "Archie Cohen").should('not.exist');

  });
});