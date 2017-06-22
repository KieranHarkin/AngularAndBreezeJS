import { PizzaAppPage } from './app.po';

describe('pizza-app App', () => {
  let page: PizzaAppPage;

  beforeEach(() => {
    page = new PizzaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
