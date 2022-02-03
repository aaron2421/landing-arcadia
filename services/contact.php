<?php
error_reporting(E_ALL);

if(
	trim($_POST['nombre']) == false   ||
	trim($_POST['telefono']) == false ||
    trim($_POST['empresa']) == false ||
	trim($_POST['correo']) == false
	)
   {
    echo $_POST['nombre'];
    echo $_POST['telefono'];
    echo $_POST['empresa'];
    echo $_POST['correo'];
    echo "Sin información";
	return false;
   }
$name = $_POST['nombre'];
$number = $_POST['telefono'];
$enterprice = $_POST['empresa'];
$email_address = $_POST['correo'];

$to = "arturo.chavez@arcadia-almacenadoras.com";
$email_subject = "Nuevo contacto";
$email_body = "Un usuario esta interesado: \n\n".
				  "Nombre: $name \n ".
				  "Numero: $number \n ".
				  "Correo: $email_address \n ".
                  "Empresa: $enterprice \n ";
$headers = "From: arturo.chavez@arcadia-almacenadoras.com \n";

$success = mail($to,$email_subject,$email_body,$headers);

if (!$success) {
    echo'
    <script type="text/javascript">
        alert("Error al enviar el correo electronico, intentelo de nuevo mas tarde");
        window.location.href="/index.php"
    </script>';
}
else{
    echo'
    <script type="text/javascript">
        alert("Correo enviado con éxito")
        window.location.href="/index.php";
    </script>';
}
?>