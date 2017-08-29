declare module "nativescript-messenger" {
    import frameModule = require("ui/frame");

    export interface SendResult {
        response: string;
        message: string;
    }

    export function send(numbers: Array<string>, message: string, subject?: string): Promise<SendResult>;
    
}
