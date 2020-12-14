export interface User {
  username?: String,
  password?: String,
  name?: String,
  email?: String,
  level?: String,
  avatar?: String,
  updated?: Date,
  created?: Date,
}

export interface ErorMsg {
  statusCode?: Number;
  message?: String;
}

export interface Message {
  message?: String;
  _id?: String;
}