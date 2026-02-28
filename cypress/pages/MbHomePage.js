export class MbHomePage {

  
    locators = {
        leftManuItems: 'header.sticky > div.flex > div.flex',
        rightMenuItems: 'header.sticky > div.flex > div.flex',
        icons: 'div.flex > div.flex > div.group',
        Links: 'a[href]',
        //downloadIcon: 'div.flex > div.flex > div.group',
        
    }

     // Individual element methods
    leftMenuItems() {
        return cy.get(this.locators.leftManuItems);
    }

    rightMenuItems() {
        return cy.get(this.locators.rightMenuItems);
    }
    icons() {
        return cy.get(this.locators.icons);
    }
    links() {
        return cy.get(this.locators.Links);
    }

  verifyLeftNavigation(items) {
    items.forEach((item) => {
      cy.get(this.locators.leftManuItems).contains(item).should('be.visible')
    })
  }

  verifyRightNavigationText(items) {
    items.forEach((item) => {
      cy.get(this.locators.rightMenuItems).contains(item).should('be.visible')
    })
  }

  verifyIcons(icons) {
    icons.forEach(icon => {
      cy.get(icon.selector).should('exist')
    })
  }

  verifyTopNavigation(fixtureData) {
    this.verifyLeftNavigation(fixtureData.leftMenuItems)
    this.verifyRightNavigationText(fixtureData.rightMenuItems)
    this.verifyIcons(fixtureData.icons)
  }
}

export default MbHomePage