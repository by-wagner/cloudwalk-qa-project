describe("QR Code Test", () => {
  it("Should visit the page and verify the QR code functionality", () => {
    cy.visit("https://app.infinitepay.io/");
    cy.get("#react-qrcode-logo").should("be.visible");
  });
});
