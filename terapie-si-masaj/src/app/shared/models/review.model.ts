export interface ReviewModel {
    _id?: string;
    text: string;
    rating: number;
    username: string;
    userId?: string;
    date?: string;
}