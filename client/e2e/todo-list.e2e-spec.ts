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

  // it('should type something in filter owner box and check that it returned correct element', () => {
  //   page.navigateTo();
  //   page.typeAName("Fr");
  //   expect(page.getUniqueTodo("Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.")).toEqual("Fry");
  //   page.backspace();
  //   page.typeAName("Blan")
  //   expect(page.getUniqueTodo("In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.")).toEqual("Blanche");
  // });

  // it('should click on the age 27 times and return 3 elements', () => {
  //   page.navigateTo();
  //   page.getTodoByCategory();
  //
  //   expect(page.getUniqueTodo("stokesclayton@momentia.com")).toEqual("Stokes Clayton");
  //
  //   expect(page.getUniqueTodo("merrillparker@escenta.com")).toEqual("Merrill Parker");
  // });
});
