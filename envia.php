<?php
$nome     = $_POST['nome'];
$telefone = $_POST['telefone'];
$email    = $_POST['email'];
$mensagem = $_POST['mensagem'];
$headers = "From: <contato@apartamentobomretiro.com.br>"."\n";
$corpo  .= "Nome: ".$nome."<br/>";
$corpo .= "Telefone: ".$telefone."<br/>";
$corpo .= "E-mail: ".$email."<br/>";
$corpo .= "Mensagem: ".$mensagem."<br/>";
$headers .= "MIME-Version: 1.0"."\n";
$headers .= "Content-type:text/html;charset=iso-8859-1"."\n";
mail("paulobaronista@gmail.com","Contato enviado pelo site www.apartamentobomretiro.com.br",$corpo,$headers);
?>
