export class Thesis {
    status = {} as ThesisStatus;
    topic : string = "";
    advisorInfo = {} as AdvisorInfo;
    committeeInfo = {} as CommitteeInfo;

}

export class ThesisStatus 
{
    statusId : number = 0;
    desc : string = "";
    appointmentDate: string = "";
}

export class AdvisorInfo
{
    fullName : string = "";
}

export class CommitteeInfo
{
    userName : string = "";
    fullName : string = "";
}