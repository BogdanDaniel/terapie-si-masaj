export interface Massage {
    id: string;
    title: string;
    pricing: { price: number, duration: number }[];
    duration: number;
    imageUrl: string;
    shortDescription: string;
    longDescription?: string;
    category: string;
    show: boolean;
}