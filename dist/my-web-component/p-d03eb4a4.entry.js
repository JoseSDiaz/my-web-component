import { r as t, h as e, H as i, g as s } from './p-c71b9504.js';
const o =
  ':host{display:block;width:90%;margin:0 auto}.carousel-container{position:relative;width:100%;display:flex;align-items:center;justify-content:center}.carousel-items{display:flex;overflow:hidden;width:100%}.carousel-item{flex:none;width:calc(100% / 5);text-align:center;}.image-container{position:relative;text-align:center}.carousel-item img{width:100%;display:block}.image-text{position:relative;bottom:0;left:50%;transform:translateX(-50%);width:100%;height:150px;display:flex;justify-content:center;align-items:center;overflow:hidden}';
const n = o;
const a = class {
  constructor(e) {
    t(this, e);
    this.apiUrl = undefined;
    this.items = [];
    this.currentIndex = 0;
    this.errorMessage = '';
  }
  async componentWillLoad() {
    const t = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
    try {
      const e = await fetch(this.apiUrl, t);
      if (!e.ok) {
        throw new Error('Response was not ok or api url must be wrong..');
      }
      const i = await e.json();
      if (i.offers && i.offers.length > 0) {
        this.items = i.offers;
      } else {
        this.errorMessage = 'No offers found';
      }
    } catch (t) {
      console.error('Could not load data:', t);
      this.errorMessage = t.message;
    }
  }
  nextItem() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
  getVisibleItems() {
    let t = [];
    for (let e = 0; e < 5; e++) {
      t.push(this.items[(this.currentIndex + e) % this.items.length]);
    }
    return t;
  }
  render() {
    const t = this.getVisibleItems();
    return e(
      i,
      { key: 'df5ccabe6e694df61928fe00df7726cdff318ae1' },
      e(
        'div',
        { key: '0ec349e36af91e198b6b294a2b053858faa548a6', class: 'carousel-container' },
        this.errorMessage === '' && e('button', { class: 'prev-button', onClick: () => this.prevItem() }, '←'),
        this.errorMessage
          ? e('div', { class: 'error-message' }, this.errorMessage)
          : t.map(t => {
              var i;
              return e(
                'div',
                { class: 'carousel-item' },
                e(
                  'div',
                  { class: 'image-container' },
                  e('img', { src: t.image.url, alt: 'image-content' }),
                  e('div', { class: 'image-text' }, ((i = t.tiers[0]) === null || i === void 0 ? void 0 : i.awardLong) || 'No tier info'),
                ),
              );
            }),
        this.errorMessage === '' && e('button', { class: 'next-button', onClick: () => this.nextItem() }, '→'),
      ),
    );
  }
  get el() {
    return s(this);
  }
};
a.style = n;
export { a as my_component };
//# sourceMappingURL=p-d03eb4a4.entry.js.map
