import { ThesisStatus } from "./thesis";

export class AdvisoryRequest {
    thesisTopic : string = "";
    studentId : string = "";
    studentName : string = "";
    submitDate : string = "";
    updateDate : string = "";
    thesisStatus = {} as ThesisStatus;
}