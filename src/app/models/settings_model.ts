export class EditProfile{
    user_id:number;
    first_name:string;
    last_name:string;
    email:string;
    address:string;
    city:number;
    state_province:string;
    country:string;
    postal_code:string;
    phone:string;
}


export class ChangePassword{
    user_id:number;
    oldpassword:string;
    newpassword:string;
}

export class NotificationSettings{
    user_id:number;
    scan_alert:boolean;
    counterfeit_alert:boolean;
    recal_alert:boolean;
}