import { r as registerInstance, h, a as Host, g as getElement } from './index-41b6188d.js';

const myComponentCss = ":host{display:block;width:90%;margin:0 auto}.carousel-container{position:relative;width:100%;display:flex;align-items:center;justify-content:center}.carousel-items{display:flex;overflow:hidden;width:100%}.carousel-item{flex:none;width:calc(100% / 5);text-align:center;}.image-container{position:relative;text-align:center}.carousel-item img{width:100%;display:block}.image-text{position:relative;bottom:0;left:50%;transform:translateX(-50%);width:100%;height:150px;display:flex;justify-content:center;align-items:center;overflow:hidden}";

const MyCarousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.currentIndex = 0;
    }
    async componentWillLoad() {
        const apiUrl = 'http://localhost:8080/api/proxy';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.items = data.offers;
            console.log(this.items);
        }
        catch (error) {
            console.error('Could not load data:', error);
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
        return (h(Host, { key: 'd6e2c33da5052fc60cbfc942ae2e4d439dbee58e' }, h("div", { key: '83db1b52b609873b48ef2fd5b2e4e0eee4c762ef', class: "carousel-container" }, h("button", { key: '453db2f8cc448e81576c69ef70765d79b3c38e79', class: "prev-button", onClick: () => this.prevItem() }, "\u2190"), visibleItems.map(item => (h("div", { class: "carousel-item" }, h("div", { class: "image-container" }, h("img", { src: item.image.url, alt: "image-content" }), h("div", { class: "image-text" }, item.tiers[0].awardLong))))), h("button", { key: 'c2d0c3b101ddff1ca96778bc743fed6776f3406a', class: "next-button", onClick: () => this.nextItem() }, "\u2192"))));
    }
    get el() { return getElement(this); }
};
MyCarousel.style = myComponentCss;

export { MyCarousel as my_component };

//# sourceMappingURL=my-component.entry.js.map