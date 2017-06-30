import { AngularTddPage } from './app.po';

describe('angular-tdd App', () => {
  let page: AngularTddPage;

  beforeEach(() => {
    page = new AngularTddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
