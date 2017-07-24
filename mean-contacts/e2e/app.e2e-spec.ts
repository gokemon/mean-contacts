import { MeanContactsPage } from './app.po';

describe('mean-contacts App', () => {
  let page: MeanContactsPage;

  beforeEach(() => {
    page = new MeanContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
