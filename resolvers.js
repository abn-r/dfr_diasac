export default {
    Query: {
      holaMundo: (parent, args, context, info) => "Mi primer query de GraphQL!!!",
      abner: (parent, args, context, info) => "Mi segundo query en Graphql"
    }
  }