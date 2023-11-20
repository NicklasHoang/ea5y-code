describe("Testing homepage", () => {
    //clicking on homepage button to see if you get to the homepage again
    it("Testing homebutton", () => {
        cy.visit("view/html/main.html")
            .get(".PI-button")
            .click()
            .url()
            .should("include", "/view/html/main.html");
    });

    //clicking on profile picture button to see if you get to the profile page
    it("Testing profile picture", () => {
        cy.visit("view/html/main.html")
            .get("#img-user")
            .click()
            .url()
            .should("include", "/view/html/user.html");
    });

    //clicking on settings button to see if you get to the setting page
    it("Testing settings button", () => {
        cy.visit("view/html/main.html")
            .get(".settings-button")
            .click()
            .url()
            .should("include", "/view/html/settings.html");
    });

    //clicking on the map button to see if you get to the process map
    it("Testing map button", () => {
        cy.visit("view/html/main.html")
            .get(".square-button")
            .click()
            .url()
            .should("include", "/view/html/landscape.html");
    });

    //searching with part of words
    it("Testing search bar", () => {
        cy.visit("view/html/main.html")
            //searching for process name
            .get("#searchInput")
            .type("plan")
            //<Erste Zeile muss Plan to Deliver stehen haben>
            .get("#searchInput")
            .clear()

            //searching for process group
            .get("#searchInput")
            .type("doku")
            //<Erste Zeile muss Dokumentation stehen haben>
            .get("#searchInput")
            .clear()

            //searching for ID
            .get("#searchInput")
            .type("5")
            //<Erste Zeile muss 5 stehen haben>
            .get("#searchInput")
            .clear()

            //searching with wrong input
            .get("#searchInput")
            .type("fafsa")
            //<keine Anzeige>
            .get("#searchInput")
            .clear()
            .get("#searchInput")
            .type("*$§")
            //<keine Anzeige>
            .get("#searchInput")
            .clear()
            .get("#searchInput")
            .type(" ")
            //<keine Anzeige>
            .get("#searchInput")
            .clear();
    });

    //sorting list in every way possible
    it("Testing sort function", () => {
        cy.visit("view/html/main.html")
            //sorting after process names
            .get("tbody > :nth-child(1) > :nth-child(1) > button")
            //<Process-Name muss alphabetisch sortiert sein>
            .get("tbody > :nth-child(1) > :nth-child(1) > button")
            //<Process-Name muss alphabetisch rückwärts sortiert sein>

            //sorting after process groups
            .visit("view/html/main.html")
            .get("tbody > :nth-child(1) > :nth-child(2) > button")
            //<Process-Group muss alphabetisch sortiert sein>
            .get("tbody > :nth-child(1) > :nth-child(2) > button")
            //<Process-Group muss alphabetisch rückwärts sortiert sein>

            //sorting after ID
            .get(":nth-child(3) > button")
            //<ID muss nach Größe sortiert sein>
            .get(":nth-child(3) > button");
        //<ID muss nach Größe rückwärts sortiert sein>
    });

    //testing every layer button
    it("Testing layer buttons", () => {
        cy.visit("view/html/main.html")
            //layer 1 button
            .get("#layer > :nth-child(2)")
            //<Tabelle soll nur Prozesse aus Layer 1 beinhalten>
            //layer 2 button
            .get("#layer > :nth-child(3)")
            //<Tabelle soll nur Prozesse aus Layer 2 beinhalten>
            //layer 3 button
            .get("#layer > :nth-child(4)");
        //<Tabelle soll nur Prozesse aus Layer 3 beinhalten>
    });
});
