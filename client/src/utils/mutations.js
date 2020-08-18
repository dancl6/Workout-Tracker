import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const SAVE_ROUTINE = gql`
mutation saveRoutine($input: [exerciseInput], $workoutId: ID) {
  saveRoutine(input: $input, workoutId: $workoutId ) {
    _id
    username
    email
    workouts {
      _id
      workoutDate
      exercises {
        name
        description
        videoLink
        weight
        reps
        distance
        time
      }
      }
    }
  }
`;