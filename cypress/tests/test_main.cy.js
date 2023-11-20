describe("Testing homepage", () => {
    //clicking on homepage button to see if you get to the homepage again
    it("Testing homebutton", () => {
        cy.visit("view/html/main.html");
        cy.get(".PI-button").click();
        cy.url().should("include", "/view/html/main.html");
    });

    //clicking on profile picture button to see if you get to the profile page
    it("Testing profile picture", () => {
        cy.visit("view/html/main.html");
        cy.get("#img-user").click();
        cy.url().should("include", "/view/html/user.html");
    });

    //clicking on settings button to see if you get to the setting page
    it("Testing settings button", () => {
        cy.visit("view/html/main.html");
        cy.get(".settings-button").click();
        cy.url().should("include", "/view/html/settings.html");
    });

    //clicking on the map button to see if you get to the process map
    it("Testing map button", () => {
        cy.visit("view/html/main.html");
        cy.get(".square-button").click();
        cy.url().should("include", "/view/html/landscape.html");
    });

    //searching with part of words
    it("Testing search bar", () => {
        cy.visit("view/html/main.html");
        //searching for process name
        cy.get("#searchInput").type("plan");
        //<Erste Zeile muss Plan to Deliver stehen haben>
        cy.get("#searchInput").clear();

        //searching for process group
        cy.get("#searchInput").type("doku");
        //<Erste Zeile muss Dokumentation stehen haben>
        cy.get("#searchInput").clear();

        //searching for ID
        cy.get("#searchInput").type("5");
        //<Erste Zeile muss 5 stehen haben>
        cy.get("#searchInput").clear();

        //searching with wrong input
        cy.get("#searchInput").type("fafsa");
        //<keine Anzeige>
        cy.get("#searchInput").clear();
        cy.get("#searchInput").type("*$§");
        //<keine Anzeige>
        cy.get("#searchInput").clear();
        cy.get("#searchInput").type(" ");
        //<keine Anzeige>
        cy.get("#searchInput").clear();
    });

    //sorting list in every way possible
    it("Testing sort function", () => {
        cy.visit("view/html/main.html");
        //sorting after process names
        cy.get("tbody > :nth-child(1) > :nth-child(1) > button");
        //<Process-Name muss alphabetisch sortiert sein>
        cy.get("tbody > :nth-child(1) > :nth-child(1) > button");
        //<Process-Name muss alphabetisch rückwärts sortiert sein>

        //sorting after process groups
        cy.visit("view/html/main.html");
        cy.get("tbody > :nth-child(1) > :nth-child(2) > button");
        //<Process-Group muss alphabetisch sortiert sein>
        cy.get("tbody > :nth-child(1) > :nth-child(2) > button");
        //<Process-Group muss alphabetisch rückwärts sortiert sein>

        //sorting after ID
        cy.get(":nth-child(3) > button");
        //<ID muss nach Größe sortiert sein>
        cy.get(":nth-child(3) > button");
        //<ID muss nach Größe rückwärts sortiert sein>
    });

    //testing every layer button
    it("Testing layer buttons", () => {
        cy.visit("view/html/main.html");
        //layer 1 button
        cy.get("#layer > :nth-child(2)");
        //<Tabelle soll nur Prozesse aus Layer 1 beinhalten>
        //layer 2 button
        cy.get("#layer > :nth-child(3)");
        //<Tabelle soll nur Prozesse aus Layer 2 beinhalten>
        //layer 3 button
        cy.get("#layer > :nth-child(4)");
        //<Tabelle soll nur Prozesse aus Layer 3 beinhalten>
    });
});
