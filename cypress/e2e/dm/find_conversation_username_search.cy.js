describe("DM username search", () => {
  it("finds an org member and restores the normal DM list when cleared", () => {
    const baseUrl = Cypress.env("baseUrl");
    const email = Cypress.env("email");
    const password = Cypress.env("password");
    const username = Cypress.env("username");

    expect(baseUrl, "baseUrl").to.be.a("string").and.not.be.empty;
    expect(email, "email").to.be.a("string").and.not.be.empty;
    expect(password, "password").to.be.a("string").and.not.be.empty;
    expect(username, "username").to.be.a("string").and.not.be.empty;

    cy.viewport(1280, 900);
    cy.visit(`${baseUrl.replace(/\/$/, "")}/auth/login`);
    cy.get('input[placeholder="Enter your email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password, { log: false });
    cy.contains("button", "Login").click();

    cy.get('[data-sidebar-preview="dms"]').should("be.visible").click();
    cy.get('input[placeholder="Find a conversation"]').should("be.visible");
    cy.get('[data-testid="dm-list-row"]')
      .should("exist")
      .its("length")
      .then((normalDmCount) => {
        cy.get('input[placeholder="Find a conversation"]').type(username);
        cy.contains('[data-testid="dm-list-row"]', username, {
          timeout: 10000,
        }).should("be.visible");

        cy.get('input[placeholder="Find a conversation"]').clear();
        cy.get('[data-testid="dm-list-row"]').should(
          "have.length",
          normalDmCount
        );
      });
  });
});
