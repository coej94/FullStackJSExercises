const graphql = require('graphql');
const axios = require('axios');

// To use GraphQL methods we need to define them in a constant
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
                .then(res => res.data)
            }
        }
    })
});

// We define a Type with the name User, in fields we define what parameters
// our ObjectType has
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLString},
        firstName: {type: GraphQLString} ,
        age: {type: GraphQLInt},
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                //Parentvalue giveer os i dette tilfælde company ID
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                .then(res => res.data);    
            }
        }
    })
});

// Here we define our query, which take the id from our user ObjectType and 
// resolve it whith the get request from our backend. 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: {type: GraphQLString} },
            // resolve crawls over the schemas, and looks for the first node with the given argument
            resolve(parentValue, args) {
                // We use axios instead of fetch, because its simpler.
                return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data)
            }
        },
        company: {
            type: CompanyType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                .then(res => res.data)
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {   //graphqlNonNull betyder at værdien ikke må være null - så giver den fejl.
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                companyId: {type: GraphQLString}
            },
            resolve(parentValue, { firstName, age }) {
                return axios.post(`http://localhost:3000/users`, {firstName, age})
                .then(res => res.data );
            }
        },
        deleteUser: {
            type: UserType,
            args: { 
                id: {type: new GraphQLNonNull(GraphQLString)} 
            },
            resolve(parentValue, { id }) {
                return axios.delete(`http://localhost:3000/users/${id}`)
                .then(res => res.data)
            }
        },
        editUser: {
            type: UserType,
            args: {   //graphqlNonNull betyder at værdien ikke må være null - så giver den fejl.
                id: {type: new GraphQLNonNull(GraphQLString)},
                firstName: {type:GraphQLString},
                age: {type: GraphQLInt},
                companyId: {type: GraphQLString}
            },
            resolve(parentValue, args){
                //Put laver et nyt object og erstatter, mens patch kun ændrer de værdier man specificerer
                return axios.patch(`http://localhost:3000/users/${args.id}`, args)
                .then(res => res.data);
            }
        }
    }
})

//then we create our schema and tell which queries we have in our shcema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});