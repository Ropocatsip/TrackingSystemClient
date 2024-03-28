import { StudentStatus } from "./student-status";
import { Course } from "./course";
import { UserInfo } from "./user-info";

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