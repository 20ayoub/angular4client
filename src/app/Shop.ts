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
class Point {
  coordinates = Array<{coor:number}>(2);
  
  constructor(coordinates : Array<{coor : number}>){

    this.coordinates=coordinates;  
  }
}