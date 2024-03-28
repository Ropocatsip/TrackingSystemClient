import { StudentStatus } from "./StudentStatus";
import { Course } from "./course";
import { UserInfo } from "./userInfo";

export class Student {
    objectId : string = "";
    name : string = "";
    lastName : string = "";
    email : string = "";
    studentId : string = "";
    course = {} as Course;
    gpax : number = 0;
    status = {} as StudentStatus;
    userInfo = {} as UserInfo;
}