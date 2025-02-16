describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h2') // <-- Vérifie que le sélecteur est correct avec Selector Playground
      .contains('This is a bare-bones Angular project that has everything you need to quickly deploy it to Netlify'); // <-- Vérifie que le texte est EXACTEMENT le même (copie-colle)
  })

  it('renders the image', () => {
    cy.get('img') // <-- Vérifie que le sélecteur est correct avec Selector Playground
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      })
  })
})