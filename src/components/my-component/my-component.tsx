import { Component, State, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyCarousel {
  @Element() el: HTMLElement;

  @State() items: { image: { url: string }; tiers: { awardLong: string }; text: string }[] = [];
  @State() currentIndex: number = 0;

  async componentWillLoad() {
    const apiUrl = 'http://localhost:8080/api/proxy';
    const options: RequestInit = {
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
    } catch (error) {
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
    return (
      <Host>
        <div class="carousel-container">
          <button class="prev-button" onClick={() => this.prevItem()}>
            &#8592;
          </button>
          {visibleItems.map(item => (
            <div class="carousel-item">
              <div class="image-container">
                <img src={item.image.url} alt="image-content" />
                <div class="image-text">{item.tiers[0].awardLong}</div>
              </div>
            </div>
          ))}
          <button class="next-button" onClick={() => this.nextItem()}>
            &#8594;
          </button>
        </div>
      </Host>
    );
  }
}
