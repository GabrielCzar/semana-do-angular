import { FundamentalsPage } from './app.po';

describe('fundamentals App', () => {
  let page: FundamentalsPage;

  beforeEach(() => {
    page = new FundamentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
