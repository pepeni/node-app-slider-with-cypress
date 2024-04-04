describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slides have correct description', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can change slides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});

describe('Swiper Gallery Test', () => {
  const devices = ['iphone-6', 'ipad-2', 'macbook-15'];

  devices.forEach(device => {
    it(`Should work well on every device ${device}`, () => {
      // Krok 1: Otwórz stronę z galerią na danym urządzeniu
      cy.viewport(device);

      cy.visit('http://localhost:3000');
      cy.get('.swiper-button-next').click();
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    });
  });
});