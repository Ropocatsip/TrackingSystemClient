export class UserInfo {
    objectId : string = "";
    title : string = "";
    name : string = "";
    lastName : string = "";
    email : string = "";
    user = {} as User;
    role: string = "";
}

export class User {
    userName : string = "";
    password : string = "";
}