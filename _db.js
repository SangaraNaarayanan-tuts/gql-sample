// this will be a sample data which will act as a db for now
let games = [
    {
        "id": "1",
        "title": "The Witcher 3: Wild Hunt",
        "platform": ["PlayStation 4", "Xbox One", "PC"]
    },
    {
        "id": "2",
        "title": "The Legend of Zelda: Breath of the Wild",
        "platform": ["Nintendo Switch", "Wii U"]
    },
    {
        "id": "3",
        "title": "Red Dead Redemption 2",
        "platform": ["PlayStation 4", "Xbox One", "PC"]
    },
    {
        "id": "4",
        "title": "Super Mario Odyssey",
        "platform": ["Nintendo Switch"]
    },
    {
        "id": "5",
        "title": "Cyberpunk 2077",
        "platform": ["PlayStation 4", "Xbox One", "PC"]
    },
    {
        "id": "6",
        "title": "Minecraft",
        "platform": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"]
    },
    {
        "id": "7",
        "title": "Final Fantasy VII Remake",
        "platform": ["PlayStation 4"]
    },
    {
        "id": "8",
        "title": "Animal Crossing: New Horizons",
        "platform": ["Nintendo Switch"]
    },
    {
        "id": "9",
        "title": "Assassin's Creed Valhalla",
        "platform": ["PlayStation 4", "Xbox One", "PC"]
    },
    {
        "id": "10",
        "title": "Fortnite",
        "platform": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "iOS", "Android"]
    }
];

let reviews = [
    {
        "id": "1",
        "rating": 9,
        "content": "Amazing story and graphics. A must-play for RPG fans.",
        "authorId": "1",
        "gameId": "1"
    },
    {
        "id": "2",
        "rating": 10,
        "content": "An absolute masterpiece in open-world exploration and gameplay.",
        "authorId": "1",
        "gameId": "2"
    },
    {
        "id": "3",
        "rating": 8,
        "content": "Great storyline with stunning visuals, but some performance issues on older consoles.",
        "authorId": "3",
        "gameId": "3"
    },
    {
        "id": "4",
        "rating": 9,
        "content": "Incredibly fun and creative, perfect for all ages.",
        "authorId": "4",
        "gameId": "4"
    },
    {
        "id": "5",
        "rating": 7,
        "content": "Highly ambitious with a rich world, but plagued by numerous bugs.",
        "authorId": "5",
        "gameId": "5"
    },
    {
        "id": "6",
        "rating": 10,
        "content": "An endlessly creative and engaging sandbox experience.",
        "authorId": "6",
        "gameId": "6"
    },
    {
        "id": "7",
        "rating": 8,
        "content": "Beautifully crafted remake with modern graphics and gameplay enhancements.",
        "authorId": "7",
        "gameId": "7"
    },
    {
        "id": "8",
        "rating": 9,
        "content": "Charming and addictive, perfect for casual gaming sessions.",
        "authorId": "8",
        "gameId": "8"
    },
    {
        "id": "9",
        "rating": 8,
        "content": "Epic Viking adventure with solid combat and exploration mechanics.",
        "authorId": "9",
        "gameId": "9"
    },
    {
        "id": "10",
        "rating": 9,
        "content": "Fast-paced and constantly evolving, a top choice for battle royale enthusiasts.",
        "authorId": "10",
        "gameId": "10"
    }
];

let authors = [
    {
        "id": "1",
        "name": "John Doe",
        "verified": true
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "verified": false
    },
    {
        "id": "3",
        "name": "Alice Johnson",
        "verified": true
    },
    {
        "id": "4",
        "name": "Bob Brown",
        "verified": false
    },
    {
        "id": "5",
        "name": "Charlie Davis",
        "verified": true
    },
    {
        "id": "6",
        "name": "Diana Evans",
        "verified": false
    },
    {
        "id": "7",
        "name": "Frank Green",
        "verified": true
    },
    {
        "id": "8",
        "name": "Grace Harris",
        "verified": false
    },
    {
        "id": "9",
        "name": "Henry Lee",
        "verified": true
    },
    {
        "id": "10",
        "name": "Ivy Martin",
        "verified": false
    }
];

export default { games, reviews, authors};