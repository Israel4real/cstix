import { CstixPage } from './app.po';

describe('cstix App', () => {
  let page: CstixPage;

  beforeEach(() => {
    page = new CstixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
