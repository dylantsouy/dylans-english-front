export interface DailyWord {
  word?: String,
  chinese?: String,
  speech?: String,
  sentence?: String,
  sentenceChinese?: String,
  showDate?: String,
  updated?: Date,
  created?: Date,
}

export interface DailyArticle {
  title?: String,
  english?: String,
  chinese?: String,
  words?: Array<any>,
  showDate?: String,
  updated?: Date,
  created?: Date,
}

export interface DailySentence {
  _id?: any,
  english?: String,
  chinese?: String,
  words?: Array<any>,
  showDate?: String,
  updated?: Date,
  created?: Date,
}

export interface ErorMsg {
  statusCode: Number;
  message: String;
}

export interface Message {
  message: String;
  _id: String;
}