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
        return (h(Host, { key: 'cfa7f22cebf7e19f51c5b1d6bd2325f1d2f353f0' }, h("div", { key: 'dd0fdb28ef54cbb6afbe5675ed444de867349546', class: "carousel-container" }, h("button", { key: '5b9e611672653bad70b3593e2a4de6fdbb5faffb', class: "prev-button", onClick: () => this.prevItem() }, "\u2190"), visibleItems.map(item => (h("div", { class: "carousel-item" }, h("div", { class: "image-container" }, h("img", { src: item.image.url, alt: "image-content" }), h("div", { class: "image-text" }, item.tiers[0].awardLong))))), h("button", { key: '0d72d226e07dc5ce149af3fec84703421efc7520', class: "next-button", onClick: () => this.nextItem() }, "\u2192"))));
    }
    get el() { return getElement(this); }
};
MyCarousel.style = myComponentCss;

export { MyCarousel as my_component };

//# sourceMappingURL=my-component.entry.js.map