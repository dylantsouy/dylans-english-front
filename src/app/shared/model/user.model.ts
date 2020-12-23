export interface User {
  username?: String,
  password?: String,
  name?: String,
  email?: String,
  level?: String,
  avatar?: String,
  gender?: String,
  updated?: Date,
  created?: Date,
  loginDate?: Date,
}

export interface ErorMsg {
  statusCode?: Number;
  message?: String;
}

export interface Message {
  message?: String;
  _id?: String;
}