export const typeDefs = `#graphql
type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
    reviews: [Review!]
}

type Review{
    id: ID!,
    rating: Int!,
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
    reviews: [Review!]
    
}

type Query {
    reviews: [Review]
    authors: [Author]
    games: [Game]
    review(id: ID!): Review
    author(id: ID!): Author
    game(id: ID!): Game
}

type Mutation {
    deleteGame(id: ID!): [Game!]
    createGame(gameInfor: addGameType!): Game!
    editGame(id: ID!,gameInfor: editGameType!): Game!
}

input addGameType{
    title: String!,
    platform: [String!]!
}

input editGameType{
    title: String,
    platform: [String!]
}
`