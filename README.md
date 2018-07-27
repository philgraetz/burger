# burger
Node Express Handlebars with mySQL

This is a full stack web application. It uses:
- Handlebars to do "server side rendering"
- Express for URL routing and APIs
- MySQL to persist data

The application simulates a burger shop. You order a burger. It is first placed in the column 'To Be Eaten'. When you click on the 'Eat It!' button, it moves to the column 'Eaten' by changing a boolean flag in the record in the database.

## Dependencies
- express
- express-handlebars
- body-parser
- mysql

## Links
- Soure code repo is [here](https://github.com/philgraetz/burger)
- Deployed on Heroku [here](https://bc-burger-hw.herokuapp.com)

## Bootstrap Theme
The project also contains a custom Bootstrap theme. The cusomization is in file <code>scss/burger.scss</code>. You will need sass to compile this if you wish to change it. The compile script is in file <code>sass.compile</code>.
