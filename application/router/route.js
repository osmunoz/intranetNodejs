/**
* Archivo dedicado para el routeo de las URL's de la página, aqui se va a
* redireccionar, dependiendo de que url sea la que se mande, ademas
* que en esta parte, se le va a decir que archivos debe de abrir
* en cada petición.
*
* @author Slack(Oscar Ivan Muñoz Barajas)
* @version 0.0.1
*/
  var express     =     require( 'express' );
  var app         =     express();
  var iniciar     =     require( '../app/app' );
  var router      =     express.Router();

  
  app.get( '/', function( req, res ) {console.log( 'Hola mundote' );
    res.render( '../views/index' );
  });
  iniciar.serv(app, '8081')
