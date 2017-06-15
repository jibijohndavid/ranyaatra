import { AngularRanyaatraPage } from './app.po';

describe('angular-ranyaatra App', () => {
  let page: AngularRanyaatraPage;

  beforeEach(() => {
    page = new AngularRanyaatraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
