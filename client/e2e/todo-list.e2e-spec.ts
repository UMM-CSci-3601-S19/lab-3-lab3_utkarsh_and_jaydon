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
    return protractor.promise.delayed(5);
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



  it('should type something in filter owner box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeAOwner("f");
    expect(page.getUniqueTodo("58895985ae3b752b124e7663")).toEqual("Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.");
    page.backspace();
    page.typeAOwner("Blan")
    expect(page.getUniqueTodo("58895985f1d5fb5cdab2c125")).toEqual("Aliqua ut proident sunt minim. Sunt cupidatat ullamco reprehenderit sit Lorem.");
  });


  it('should type in filter category box and check that it returned correct element', () => {
    page.navigateTo();
    page.typeACategory("home");
    expect(page.getUniqueTodo("58895985c32328e015584db2")).toEqual("Proident cupidatat exercitation id ullamco magna do qui aliquip id. Eiusmod labore non nostrud culpa duis incididunt incididunt esse occaecat amet officia.");

    for (let i = 0; i < 4; i++) {
      page.backspace();
    }

    page.typeACategory("Video Ga");
    expect(page.getUniqueTodo("588959857b092c39a681b077")).toEqual("Culpa velit exercitation aute quis nisi nulla. Ex ipsum ut aute exercitation id proident proident.");
  });


  it('should type in filter body box and check that it returned correct element. For second typeABody, checks that 2 different bodies are returned', ()=> {
    page.navigateTo();
    page.typeABody("repre");
    expect(page.getUniqueTodo("588959858d6f5457cb2b779f")).toEqual("Reprehenderit aute ad voluptate aute sit sint. Dolor commodo voluptate excepteur id excepteur culpa commodo non occaecat voluptate et.");

    for (let i = 0; i < 5; i++) {
      page.backspace();
    }

    page.typeABody("esse est");
    expect(page.getUniqueTodo("58895985c1849992336c219b")).toEqual("Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.");
    expect(page.getUniqueTodo("5889598502d8a80d0ee55da5")).toEqual("Consectetur id quis esse est dolore duis non nulla commodo dolor. Anim aliquip pariatur tempor dolor.");

  })

});
