export class Thesis {
    status = {} as ThesisStatus;
    topic : string = "";
    advisorInfo = {} as AdvisorInfo;
}

export class ThesisStatus 
{
    statusId : number = 0;
    desc : string = "";
}

export class AdvisorInfo
{
    fullName : string = "";
}