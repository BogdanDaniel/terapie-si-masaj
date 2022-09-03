import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { isEmpty } from "lodash";
import { ReviewModel } from "../../models/review.model";

@Injectable()
export class TestimonialsService {
    constructor(private http: HttpClient) {

    }

    get(payload?: { userId?: string }) {
        const query = [];
        if (!isEmpty(payload?.userId)) {
            query.push('userId=' + (payload?.userId));
        }
        const api = query.length > 0 ? `/api/review?` + query.join('&') : '/api/review'
        return this.http.get<ReviewModel[]>(api)
    }

    save(payload: ReviewModel) {
        return this.http.post<ReviewModel>('api/review', payload);
    }
}