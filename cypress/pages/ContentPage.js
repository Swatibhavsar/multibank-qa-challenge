export class ContentPage {

    locators = {
       // marketingheader1: 'h3:has-text',
        featurebutton: 'section[class*="pt-"] > div.flex > div.flex',
        downloadbutton: 'a[href="https://mbio.go.link/6OW91"',
        p1belowh2: 'div.hidden > div[class*="pb-"] > p[class*="mb-"]',
        threebox: 'div.animate-in > section[class*="pt-"] > div.flex',
        threeboxItems: 'div.animate-in > section[class*="pt-"] > div.flex > div[class*="bg-light"]',
        statics: 'div.overflow-x-hidden > section.relative > div.flex',
        regulation:'section[class*="gap-"] > div[class*="flex-wrap"]'
    }

    // Individual element methods
    marketingheader1() {
        return cy.get(this.locators.marketingheader1);
    }

    featurebutton() {
        return cy.get(this.locators.featurebutton);
    }

    downloadbutton() {
        return cy.get(this.locators.downloadbutton);
    }

    marketingheader2() {
        return cy.get(this.locators.marketingheader2);
    }

    p1belowh2() {
        return cy.get(this.locators.p1belowh2);
    }

    getElementByText(text) {
        return cy.contains(text);
    }
    getThreeBox() {
        return cy.get(this.locators.threebox);
    }

    getThreeBoxItems() {
        return cy.get(this.locators.threeboxItems);
    }
    getstatics() {
        return cy.get(this.locators.statics);
    }
    getregulation() {
        return cy.get(this.locators.regulation);
    }
    

}