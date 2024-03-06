import { Component, State, h, Host, Element, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyCarousel {
  @Element() el: HTMLElement;

  @Prop() apiUrl: string; // new prop

  @State() items: { image: { url: string }; tiers: { awardLong: string }; text: string }[] = [];
  @State() currentIndex: number = 0;
  @State() errorMessage: string = ''; // here we define the message that we want to show

  async componentWillLoad() {
    const options: RequestInit = {
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
      } else {
        this.errorMessage = 'No offers found';
      }
    } catch (error) {
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
    return (
      <Host>
        <div class="carousel-container">
          {this.errorMessage === '' && (
            <button class="prev-button" onClick={() => this.prevItem()}>
              &#8592;
            </button>
          )}
          {this.errorMessage ? (
            <div class="error-message">{this.errorMessage}</div>
          ) : (
            visibleItems.map(item => (
              <div class="carousel-item">
                <div class="image-container">
                  <img src={item.image.url} alt="image-content" />
                  <div class="image-text">{item.tiers[0]?.awardLong || 'No tier info'}</div>
                </div>
              </div>
            ))
          )}
          {this.errorMessage === '' && (
            <button class="next-button" onClick={() => this.nextItem()}>
              &#8594;
            </button>
          )}
        </div>
      </Host>
    );
  }
}
