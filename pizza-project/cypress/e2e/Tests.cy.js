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
    //dropdown
    //dropdown
    // cy.get(':nth-child(1) > [data-cy="checkbox-input"]', { multiple: true })
    //   .click()
    //   .should("have.checked");
    // cy.get("#name").click().should("have.value", "Ahmet Can Yalçınkaya");
    // cy.get("#phone").click().should("have.value", "5340684100");
    // cy.get("#address")
    //   .click()
    //   .should("have.value", "Akbilek Mah. Furkan Sk. No:7");
    // cy.get('[data-cy="submit-button"]').click();
  });
});
