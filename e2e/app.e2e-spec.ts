import { F1StatsPage } from './app.po';

describe('f1-stats App', function() {
  let page: F1StatsPage;

  beforeEach(() => {
    page = new F1StatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
