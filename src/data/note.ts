export class Note { //this is 'export' because its bringing the class from other resource
    public title: string = 'title'
    public message: string = 'message'
    public owner: string = 'owner'

    constructor (title: string, message: string, owner: string){
        this.title = title
        this.message = message
        this.owner = owner
    }
}


// export class Memo {
//     public message: string
//     public time: Date | null
//     public sender: string
//     public subject: string

//     constructor(message: string, time: Date | null, sender: string, subject: string) {
//         this.message = message
//         this.time = time
//         this.sender = sender
//         this.subject = subject
//     }
// }