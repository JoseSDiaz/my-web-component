import { h, Host } from "@stencil/core";
export class MyCarousel {
    constructor() {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "apiUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "api-url",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "items": {},
            "currentIndex": {},
            "errorMessage": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=my-component.js.map
