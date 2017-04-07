import { DfChallengePage } from './app.po';

describe('df-challenge App', function() {
  let page: DfChallengePage;

  beforeEach(() => {
    page = new DfChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
