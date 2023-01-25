import { gql } from "graphql-tag"

export const LOGIN_USER = gql`
mutation LoginUser($loginInput: LoginInput) {
  loginUser(loginInput: $loginInput) {
    email
    username
    token
    id
  }
}
`

export const SIGNUP_USER =  gql`
  mutation Mutation($userInput: NewUserInput!) {
    createUser(userInput: $userInput) {
      email
      username
      token
      id
    }
}
`

export const REGISTER_CAT = gql`
  mutation registerCat($id: ID!, $input: RegisterAndUpdateCatInput!) {
    registerCat(ID: $id, input: $input) {
      email
      username
      token
      id
      cats {
        breed
        name
        age
        owner
        weight
      }
    }
}
`