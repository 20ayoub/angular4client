import { Point } from './Point';

export class Shop {
  _id: string;
  picture: string;
  name: string;
  email: string;
  city: string;
  location : Point;

  constructor(_id: string, picture: string, name: string, email: string, city: string, location: Point)
  {
  this._id = _id;
  this.picture = picture;
  this.name = name;
  this.email = email;
  this.city = city;
  this.location = location;
}
}
