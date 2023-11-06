describe("create plan spec", () => {
  it.only("should create a plan", () => {
    cy.visit("");
    cy.get("#create").click();
    cy.get("#name").type("Plano Cypress");
    cy.get("#value").type(120);
    cy.get("#save").click();
  });
});
