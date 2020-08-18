const { gql } = require('apollo-server-express');

const typeDefs = gql`
<<<<<<< HEAD
  type Query {

  },

  type Mutation {
    
=======
  scalar Date

  type WorkoutCategory {
    _id: ID
    name: String
  }
 

  input exerciseInput {
    _id: ID
    name: String
    description: String
    videoLink: String
    reps: Int
    trackReps: Boolean
    weight: Float
    trackWeight: Boolean
    distance: Float
    trackDistance: Boolean
    time: Float
    trackTime: Boolean
    # workoutCategory: String
  }

  type IndividualExercise {
    _id: ID
    name: String
    description: String
    videoLink: String
    trackReps: Boolean
    trackWeight: Boolean
    trackDistance: Boolean
    trackTime: Boolean
    workoutCategory: WorkoutCategory
  }

  type RoutineExercise {
    _id: ID
    name: String
    description: String
    videoLink: String
    reps: Int
    trackReps: Boolean
    weight: Float
    trackWeight: Boolean
    distance: Float
    trackDistance: Boolean
    time: Float
    trackTime: Boolean
    workoutCategory: WorkoutCategory
  }

  type WorkoutRoutine {
    _id: ID
    # need to figure out how to add Date as type
    workoutDate: Date
    exercises: [RoutineExercise]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [WorkoutRoutine]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    exercises: [IndividualExercise]
    exercise(_id: ID!): IndividualExercise
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRoutine(input: [exerciseInput], workoutId: ID): User
    # saveRoutine(input: [exerciseInput], name2: String, description2: String, videoLink2: String, trackReps2: Boolean, trackWeight2: Boolean, trackDistance2: Boolean, trackTime2:Boolean, workoutId: ID): User

>>>>>>> 7d3b9dac1db48f7f490788aca4dc2da5810b79a4
  }
`;

module.exports = typeDefs;