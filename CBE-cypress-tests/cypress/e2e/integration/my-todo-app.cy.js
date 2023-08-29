describe("my todo app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it("should have empty todos", () => {
        cy.get(".todo-list li").should("have.length", 0);
    });
    // it.only("...", () => {}); ) lässt nur diesen einen Test ausführen
    it("add a new todo", () => {
        cy.get("#new-todo").type("Learn CSS");
        cy.get("#add-todo").click();
        cy.get(".todo-list li").should("have.length", 1);
    });
});

describe('Todo App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Ändere die URL entsprechend deiner Anwendung
    });
  
    it('should add and delete a todo', () => {
      // Füge einen neuen Todo hinzu
      cy.get('#new-todo').type('Buy groceries');
      cy.get('#add-todo').click();
  
      // Überprüfe, ob der Todo in der Liste angezeigt wird
      cy.get('.todo-list').should('contain', 'Buy groceries');
  
      // Markiere den Todo als erledigt
      cy.contains('.todo-list li', 'Buy groceries')
        .find('input[type="checkbox"]')
        .check();
  
      // Überprüfe, ob der Todo als erledigt markiert wurde
      cy.contains('.todo-list li', 'Buy groceries')
        .should('have.class', 'done');
  
      // Lösche alle erledigten Todos
      cy.get('#delete-todos').click();
  
      // Überprüfe, ob der Todo aus der Liste entfernt wurde
      cy.get('.todo-list').should('not.contain', 'Buy groceries');
    });
  
    it.only('should filter todos', () => {
      // Füge mehrere Todos hinzu
      cy.get('#new-todo').type('Do laundry{enter}');
      cy.get('#add-todo').click();
      cy.get('#new-todo').type('Clean the house{enter}');
      cy.get('#add-todo').click();
      cy.get('#new-todo').type('Walk the dog{enter}');
      cy.get('#add-todo').click();

      // markiere ein todo als erledigt

      cy.get('.todo-list li').first().find('input[type="checkbox"]').check();
  
      // Filtere nach erledigten Todos
      cy.get('#filter-done').click();
      cy.get('.todo-list li').should('have.length', 3);
  
      // Filtere nach offenen Todos
      cy.get('#filter-open').click();
      cy.get('.todo-list li').should('have.length', 3);
  
      // Filtere nach allen Todos
      cy.get('#filter-all').click();
      cy.get('.todo-list li').should('have.length', 3);
    });
  });
  