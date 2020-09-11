
export class SendPushNotification {
    constructor() {
        this.token = [];      
        this.message_titile = "";
        this.message_description = "";
        this.user_id=[];

    }
    hasValues(): boolean {
        return (this.token.length == 0) || this.user_id.length==0 ?
            false :
            true;

    }
   
    token: any[];
    message_titile: string;
    message_description: string;
    user_id:any[];
}