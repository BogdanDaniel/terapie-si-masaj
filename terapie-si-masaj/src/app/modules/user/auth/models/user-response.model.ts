import { User } from "src/app/shared/models/user.model";

export interface UserResponse {
    readonly token: string;
    readonly user: User;
}