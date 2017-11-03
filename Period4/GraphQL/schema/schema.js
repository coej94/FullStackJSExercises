const graphql = require("graphql");
const _ = requre("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    {id: '23', firstName: 'Bill', age: 22},
    {id: '47', firstName: 'Samantha', age: 21}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt} 
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        User:{
            type: UserType,
            args: {id: {type: GraphQLString} },
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.export = new GraphQLSchema({
    query: RootQuery
})