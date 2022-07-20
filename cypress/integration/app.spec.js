/// <reference types="cypress" />

describe("App Dashboard", () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
  
  })

  it("should have text field for name",() => {
    cy.get(".name").type("trish")
  })

  it("should have text field for date",() => {
    cy.get(".date").type("8/10")
  })

  it("should have text field for time",() => {
    cy.get(".time").type("2:00")
  })

  it("should have text field for number of guests",() => {
    cy.get(".number").type("3")
  })
})