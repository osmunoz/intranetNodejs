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
  var path        =     require( 'path' );

  // view engine setup
  app.use( express.static(  path.join( __dirname, '../views' ) ) );
  app.set( 'views', __dirname + '/../views' );
  app.set( 'view engine', 'html' );

  app.get( '/', function( req, res ) {
    res.render( __dirname + '../views/index.html' );
  });
  //Error 404
  app.get( '*', function( req, res ) {
    res.send('What???',404);
  });
  iniciar.serv(app, '8081');
