export const createUserResolver = {
  Mutation: {
    createUser: async () => {
      return {
        id: 1,
        name: 'Guilherme'
      }
    }
  }
}
