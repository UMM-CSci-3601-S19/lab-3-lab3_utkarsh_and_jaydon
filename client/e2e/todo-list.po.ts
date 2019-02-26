import {browser, by, element, Key} from 'protractor';

export class TodoPage {
  navigateTo() {
    return browser.get('/todos');
  }

  //http://www.assertselenium.com/protractor/highlight-elements-during-your-protractor-test-run/
  highlightElement(byObject) {
    function setStyle(element, style) {
      const previous = element.getAttribute('style');
      element.setAttribute('style', style);
      setTimeout(() => {
        element.setAttribute('style', previous);
      }, 200);
      return "highlighted";
    }

    return browser.executeScript(setStyle, element(byObject).getWebElement(), 'color: red; background-color: yellow;');
  }

  getTodoTitle() {
    let title = element(by.id('todo-list-title')).getText();
    this.highlightElement(by.id('todo-list-title'));

    return title;
  }

  typeAOwner(owner:string) {
    let input = element(by.id('ownerName'));
    input.click();
    input.sendKeys(owner);
  }

  typeABody(body: string){
    let input = element(by.id('bodyContent'));
    input.click();
    input.sendKeys(body);
  }

  typeACategory(category: string){
    let input = element(by.id('categoryTitle'));
    input.click();
    input.sendKeys(category);
  }


  backspace(){
    browser.actions().sendKeys(Key.BACK_SPACE).perform();
  }


  getUniqueTodo(body: string) {
    let todo = element(by.id(body)).getText();
    this.highlightElement(by.id(body));

    return todo;
  }
}
