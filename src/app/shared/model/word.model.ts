export interface Word {
  speech?: String;
  phrase?: String;
  derivative?: String;
  synonym?: String;
  antonym?: String;
  note?: String;
  _id?: String;
  word?: String;
  chinese?: String;
  lesson?: Number;
  level?: String;
  sentence?: String;
  sentenceChinese?: String;
  audio?: String;
  updated?: Date;
  created?: Date;
}

export interface ErorMsg {
  statusCode?: Number;
  message?: String;
}

export interface Message {
  message?: String;
  _id?: String;
}

export interface RouterData {
  describe?: String;
  level?: Number;
  name?: String;
  score?: String;
  subtitle?: String;
  title?: String;
}