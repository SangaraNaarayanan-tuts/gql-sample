import _db from "./_db.js" 

export const resolvers = {
    Query: {
        games: (parent, args) =>{
            return _db.games;
        },
        reviews: () => {
            return _db.reviews;
        },
        authors: () => {
            return _db.authors;
        },
        review: (parent, args) => {
            return _db.reviews.find((review)=> review.id === args.id)
        },
        game: (parent, args) => {
            return _db.games.find((review)=> review.id === args.id)
        },
        author: (parent, args) => {
            return _db.authors.find((review)=> review.id === args.id)
        }
    },
    Game: {
        reviews: (parent, args)=>{
            return _db.reviews.filter((review)=> parent.id === review.gameId)
        }
    },
    Author:{
        reviews: (parent, args)=>{
            return _db.reviews.filter((review)=> parent.id === review.authorId)
        }
    },
    Review: {
        author: (parent,args) =>{
            return _db.authors.find((author)=> author.id === parent.id)
        },
        game: (parent,args) =>{
            return _db.games.find((game)=> game.id === parent.id)
        } 
    },
    Mutation:{
        deleteGame: (parent,args) =>{
            _db.games =  _db.games.filter((game)=>game.id !== args.id);
            return _db.games
        },
        createGame: (parent,args) =>{
            let newGame= {
                ...args.gameInfor,
                id: Math.floor(Math.random() * 1000).toString(),
                reviews: []
            }
            _db.games.push(newGame)
            return newGame
        },
        editGame:(parent,args) =>{
            _db.games = _db.games.map((game)=>{
                if(game.id === args.id) {
                    return {...game, ...args.gameInfor}
                }
                return game
            })  
        
            return _db.games.find((game)=> game.id === args.id)
        },
    }
}