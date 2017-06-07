import { DancingWithDeathPage } from './app.po';

describe('dancing-with-death App', () => {
  let page: DancingWithDeathPage;

  beforeEach(() => {
    page = new DancingWithDeathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
