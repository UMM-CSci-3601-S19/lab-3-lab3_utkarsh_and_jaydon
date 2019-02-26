import {TodoPage} from './todo-list.po';
import {browser, protractor} from 'protractor';

let origFn = browser.driver.controlFlow().execute;

//https://hassantariqblog.wordpress.com/2015/11/09/reduce-speed-of-angular-e2e-protractor-tests/
browser.driver.controlFlow().execute = function () {
  let args = arguments;

  // queue 100ms wait between test
  //This delay is only put here so that you can watch the browser do its' thing.
  //If you're tired of it taking long you can remove this call
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(10);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('Todo list', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should get and highlight Todo Owner attribute ', () => {
    page.navigateTo();
    expect(page.getTodoTitle()).toEqual('Todos');
  });

/*  it('should type something in filter owner box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAOwner("Fr");
    expect(page.getUniqueTodo("Excepteur anim mollit magna amet in cillum. Elit quis aliqua elit mollit eu.")).toEqual("Fry");
    page.backspace();
    page.typeAOwner("Blan")
    expect(page.getUniqueTodo("Id culpa adipisicing in do ea et. Id tempor fugiat dolore nisi laborum exercitation..")).toEqual("Blanche");
  });


  it('should type in filter category box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeACategory("Vid");
    expect(page.getUniqueTodo("Culpa velit exercitation aute quis nisi nulla. Ex ipsum ut aute exercitation id proident proident.")).toEqual("video games");
    page.backspace();
    page.typeACategory("homew")
    expect(page.getUniqueTodo("Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.")).toEqual("homework");
  });*/

});
