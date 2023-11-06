describe("create plan spec", () => {
  it("should create a plan", () => {
    cy.visit("");
    cy.intercept(
      {
        url: "http://localhost:3000/plan/find-all",
      },
      []
    ).as("getPlans");
    cy.get("#create").click();
    cy.get("#name").type("Plano Cypress");
    cy.get("#value").type(120);
    cy.get("#save").click();
  });

  it("verify created plan", () => {
    cy.visit("");
    cy.intercept(
      {
        url: "http://localhost:3000/plan/find-all",
      },
      [{ id: 0, name: "Plano de Teste", value: 130 }]
    ).as("getPlans");
  });
});
