/**
* En este archivo se va a crear el SERVIDOR de la aplicación, en donde
* escuchara en el puerto 9000, recibira parametros, para hacer el redireccionamiento
*
* @author Slack(Oscar Ivan Muñoz Barajas)
* @version 0.0.1
*/

  /**
    * En la siguiente funcion se crea las instancias necesarias, para arrancar el servidor
    * esta funcion se va a poder exportar, para su uso en otro archivo
    * @param app
    * @param express
    * @param port
    * @acess public
    * @author Slack
  */
  function serv( app, express, port ) {
    app = express();console.log( 'Se arranco el servidor en el puerto: '+port);
    return app.listen( port );
  }
exports.serv = serv;
