/// <reference types="cypress" />


describe("App Dashboard", () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
  
  })

  it("should have header", () => {
    cy.get(".app-title")
      .contains("Turing Cafe Reservations")
  })

  it("should have form inputs", () => {
    cy.get(".name")
    cy.get(".name")
    cy.get(".date")
    cy.get(".time")
    cy.get(".number")

  })

  it("should have a reservation container", () => {
    cy.get(".res-container")
  })

  it("should have a 9 reservations", () => {
    cy.get(".res-container").children().should("have.length", 9)
  })

})


describe("Check form functionality", () => {
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

  it("should find the reservation button and click", () => {
    cy.get(".name").type("trish")
    cy.get(".date").type("8/10")
    cy.get(".time").type("2:00")
    cy.get(".number").type("3")
    cy.get(".res-button").click()
    cy.get(".card")
      .contains("trish")
    cy.get(".card")
      .contains("8/10")
    cy.get(".card")
      .contains("2:00")
    cy.get(".card")
      .contains("3")

  })
})