export class User {
    readonly _id: string | undefined;
    name: string | undefined;
    email: string | undefined;

    constructor(user: Partial<User>) {
        if (user) {
            this._id = user?._id;
            this.name = user?.name;
            this.email = user?.email;
        }

    }
}