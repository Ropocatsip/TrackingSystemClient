export class Thesis {
    status = {} as Status;
    topic : string = "";
    advisor = {} as Advisor;
}

export class Status 
{
    statusId : number = 0;
    desc : string = "";
}

export class Advisor
{
    advisorId : string = "";
    fullName : string = "";
}