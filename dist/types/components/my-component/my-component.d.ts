export declare class MyCarousel {
    el: HTMLElement;
    apiUrl: string;
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
    errorMessage: string;
    componentWillLoad(): Promise<void>;
    nextItem(): void;
    prevItem(): void;
    getVisibleItems(): any[];
    render(): any;
}
