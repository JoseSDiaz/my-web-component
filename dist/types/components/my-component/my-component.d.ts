export declare class MyCarousel {
    el: HTMLElement;
    items: {
        image: {
            url: string;
        };
        tiers: {
            awardLong: string;
        };
        text: string;
    }[];
    currentIndex: number;
    componentWillLoad(): Promise<void>;
    nextItem(): void;
    prevItem(): void;
    getVisibleItems(): any[];
    render(): any;
}
