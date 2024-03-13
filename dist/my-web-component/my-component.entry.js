import { r as registerInstance, h, a as Host, g as getElement } from './index-02eac31b.js';

const myComponentCss = ":host{display:block;width:90%;margin:0 auto}.carousel-container{position:relative;width:100%;display:flex;align-items:center;justify-content:center}.carousel-items{display:flex;overflow:hidden;width:100%}.carousel-item{flex:none;width:calc(100% / 5);text-align:center;}.image-container{position:relative;text-align:center}.carousel-item img{width:100%;display:block}.image-text{position:relative;bottom:0;left:50%;transform:translateX(-50%);width:100%;height:150px;display:flex;justify-content:center;align-items:center;overflow:hidden}";

const MyCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.apiUrl = undefined;
        this.items = [];
        this.currentIndex = 0;
        this.errorMessage = '';
    }
    async componentWillLoad() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await fetch(this.apiUrl, options);
            if (!response.ok) {
                throw new Error('Response was not ok or api url must be wrong..');
            }
            const data = await response.json();
            if (data.offers && data.offers.length > 0) {
                this.items = data.offers;
            }
            else {
                this.errorMessage = 'No offers found';
            }
        }
        catch (error) {
            console.error('Could not load data:', error);
            this.errorMessage = error.message;
        }
    }
    nextItem() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
    prevItem() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
    getVisibleItems() {
        let itemsToShow = [];
        for (let i = 0; i < 5; i++) {
            itemsToShow.push(this.items[(this.currentIndex + i) % this.items.length]);
        }
        return itemsToShow;
    }
    render() {
        const visibleItems = this.getVisibleItems();
        return (h(Host, { key: 'df5ccabe6e694df61928fe00df7726cdff318ae1' }, h("div", { key: '0ec349e36af91e198b6b294a2b053858faa548a6', class: "carousel-container" }, this.errorMessage === '' && (h("button", { class: "prev-button", onClick: () => this.prevItem() }, "\u2190")), this.errorMessage ? (h("div", { class: "error-message" }, this.errorMessage)) : (visibleItems.map(item => {
            var _a;
            return (h("div", { class: "carousel-item" }, h("div", { class: "image-container" }, h("img", { src: item.image.url, alt: "image-content" }), h("div", { class: "image-text" }, ((_a = item.tiers[0]) === null || _a === void 0 ? void 0 : _a.awardLong) || 'No tier info'))));
        })), this.errorMessage === '' && (h("button", { class: "next-button", onClick: () => this.nextItem() }, "\u2192")))));
    }
    get el() { return getElement(this); }
};
MyCarousel.style = myComponentCss;

export { MyCarousel as my_component };

//# sourceMappingURL=my-component.entry.js.map