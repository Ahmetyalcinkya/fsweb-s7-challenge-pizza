describe("Success Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Get success", () => {
    cy.get('[data-cy="aciktim-button"]')
      .click()
      .url()
      .should("include", "/pizza");
    cy.visit("http://localhost:3000/pizza");
    cy.get('[data-cy="dropdown"]').click();
    cy.get('[data-cy="dropdown-item2"]')
      .click()
      .should("have.class", "selected");
    cy.get('[data-cy="checkbox-input"]').click().should("have.checked");
  });
});
