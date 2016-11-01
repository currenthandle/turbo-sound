class Client {
    constructor(name, desc) {
        this.name = name;
        //this.date = date;
        this.desc = desc;
    } 
}

let clients = []
clients.push(new Client('Youtopia', 'Super fun time'));
clients.push(new Client('Purple 33', 'Best underground in LA'));
clients.push(new Client('Youtopia', 'Super fun time'));
clients.push(new Client('Purple 33', 'Best underground in LA'));
clients.push(new Client('Youtopia', 'Super fun time'));
clients.push(new Client('Purple 33', 'Best underground in LA'));
clients.push(new Client('Youtopia', 'Super fun time'));
clients.push(new Client('Purple 33', 'Best underground in LA'));

module.exports = clients;
