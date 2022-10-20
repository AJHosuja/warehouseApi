# API For the warehouse inventory app


## Endpoints
List of all endpoints.

| Method | URL | Description | Request Body |
| :---         |     :---:      |          ---: |   ---: |
| POST          | /login       | Retrieve token    | user, password |

| Method | URL | Description | Request Body |
| :---         |     :---:      |          ---: |   ---: |
| GET          | /product/       | Retrieve all products    |  |
| GET          | /product/ean/{ean}       | Retrieve products by ean code    |  |
| GET     | /product/elguide/{elguide}       | Retrieve products by elguide code      | |
| POST     | /product/       | Add product      | productEAN |
| DELETE     | /product/{id}       | Delete item by ID      |  |
| GET     | /product/eanelguide       | Retrieve ean and elguide data      | |
| POST     | /product/updateRack       | Update rack position      | id, newRack |
| ---         |     ---     |          --- |    |
| GET          | /lastfive/       | Retrieve last five items    |  |
| ---         |     ---     |          --- |    |
| GET     | /usermgn       | Gets all users   ||
| DELETE          | /usermgn/{id}       | Delete user by ID   |   |
| POST     | /usermgn/       | Add user      | userName, password |
| POST     | /usermgn/resetPass      | Reset user password   | id, newPassword |
| POST     | /usermgn/changePass      | Change password   |user, password, newPassword|

