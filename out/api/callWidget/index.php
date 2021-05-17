<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) || empty($_POST['phone'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = 'Prośba o kontakt telefoniczny';
	$to = "biuro@lexell.com.pl";
	$from = $_POST['name'];

	// data

	$msg = 'Ze strony Lexell.pl wysłano prośbę o kontakt telefoniczny.' . '<br /> Imię klienta:' . $_POST['name'] . '<br /> Numer telefonu:' . $_POST['phone'] ;

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>