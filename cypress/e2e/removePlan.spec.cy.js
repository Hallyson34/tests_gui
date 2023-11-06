describe("remove plan spec", () => {
  it("should remove a plan", () => {
    cy.visit("");
    cy.get("#row0").click();
    cy.get("#remove").click();
  });
});
