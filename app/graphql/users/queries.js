const { gql } = require('apollo-server');
const serviceUsers = require('../../services/user');

module.exports = {
  queries: {
    users: () => serviceUsers.users,
  },
  schema: gql`
    extend type Query {
      users: [User]
    }
  `,
};
