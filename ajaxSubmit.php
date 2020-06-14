
<?php
if (isset($_POST['submit'])) {
  $name = $_POST['nombre'];
  $mailFrom = $_POST['email'];
  $message = $_POST['mensaje'];


  $mailTo = "contacto@landscapemexico.com"; //* contacto@landscapemexico.com */
  $headers = "From: ".$mailFrom;
  $txt = "Has recibido un nuevo correo de: ".$name.".\n\n".$message;

  mail($mailTo, "Informacion para proyecto", $txt, $headers);

  header("Location: index.php?mailsend");

}
