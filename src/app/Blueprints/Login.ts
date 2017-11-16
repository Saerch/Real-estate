export class UserLogin{
    userId:number;
    userPass:string;
    ustat:boolean;

    constructor(a:number, b:string){
        this.userId=a;
        this.userPass=b;
    }
}

export class AdminLogin{
    adminId:number;
    adminPass:string;
    adstat:boolean;

    constructor(a:number, b:string){
        this.adminId=a;
        this.adminPass=b;
    }
}