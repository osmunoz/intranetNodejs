/**
* En el siguiente archivo, se configura el arranque de la aplicación
* este archivo, solo va a hacer llamado a otro, y pasara los parametros
* necesarios. Este es el único archivo que tendrá contacto con el funcionamiento
* interno.
* @author Slack(Oscar Ivan Muñoz Barjas)
* @version 0.0.1
*/

  //se exporta un modulo de app
  var iniciar     =   require( __dirname+ '/application/app/app' );
  var express     =   require( 'express' );
  var app;

  iniciar.serv( app, express, '9000' );
