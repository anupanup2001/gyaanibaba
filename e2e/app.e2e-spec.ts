import { GyaanibabaPage } from './app.po';

describe('gyaanibaba App', function() {
  let page: GyaanibabaPage;

  beforeEach(() => {
    page = new GyaanibabaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
