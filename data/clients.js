class Client {
    constructor(name, desc, src) {
        this.name = name;
        //this.date = date;
        this.desc = desc;
        this.src = src;
    } 
}

let clients = []
clients.push(new Client('Youtopia', 'Super fun time', 'zoo.jpg'));
clients.push(new Client('Purple 33', 'Best underground in LA', 'index.jpg'));
clients.push(new Client('Youtopia', 'Super fun time', 'zoo.jpg'));
clients.push(new Client('Purple 33', 'Best underground in LA', 'index.jpg'));
clients.push(new Client('Youtopia', 'Super fun time', 'zoo.jpg'));
clients.push(new Client('Purple 33', 'Best underground in LA', 'index.jpg'));
clients.push(new Client('Youtopia', 'Super fun time', 'zoo.jpg'));
clients.push(new Client('Purple 33', 'Best underground in LA', 'index.jpg'));

module.exports = clients;
