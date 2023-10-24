
type Posts=
{
  "userId": number,
  "id": number,
  "title":string,
  "body": string
}

type Users = {
    "id": number,
    "name": string,
    "username":string,
    "email":string,
    "address": {
      "street":string,
      "suite": string,
      "city": string,
      "zipcode":string,
      "geo": {
        "lat": number,
        "lng": number
      }
    },
    "phone": number,
    "website":string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}