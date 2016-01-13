# NativeScript Messenger

A NativeScript module providing sms messaging action for Android and iOS.

## Installation

Run `tns plugin add nativescript-messenger`

## Usage

To use the phone module you must first `require()` it.

```js
var messenger = require( "nativescript-messenger" );
```

### Method

####send: Sends a message to one or multiple recipients

##### Parameters
* numbers: An array of phone number strings. Supports just one or multiple.
* message: The body message.
* subject: The subject message.

```js
var messenger = require( "nativescript-messenger" );
var numbers = ["905-454-1234", "905-454-4321", "905-929-1122"];
messenger.groupMessage(numbers, "My message", "Subject of Message");
```

This method also returns a promise. Use as so to define actions after the user has either canceled or sent the message.

```js
    phone.groupMessage(["905-555-5555", "905-555-4444"], "this is body").then(function(args){
        console.log(args.response); 
        // either a string saying cancelled or sent
        console.log(args.message); 
        // just a string with more detail than response.
        
        /* you can do stuff here.. this happens back 
        in your app after the message window has 
        been dismissed */        
        
    }, function (e) {
        console.log("Error occurred " + e); 
        // e will show a vague error message.
    });    
```