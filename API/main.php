<?php 
	require_once("./config/Config.php");

	$db = new Connection();
	$pdo = $db->connect();
	$gm = new GlobalMethods($pdo);
	$post = new Post($pdo);
	$get = new Get($pdo);
	$auth = new Auth($pdo);

	if (isset($_REQUEST['request'])) {
		$req = explode('/', rtrim($_REQUEST['request'], '/'));
	} else {
		$req = array("errorcatcher");
	}

	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':			

			switch($req[0]) {

      // User and Auth Operations

        case 'pullAllUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullAllUser($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllUser($d), JSON_PRETTY_PRINT);
					}
				break;

				case 'pullSpecUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecUser($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecUser($d), JSON_PRETTY_PRINT);
					}
				break;

		case 'regUser': // Do not Touch
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->regUser($d), JSON_PRETTY_PRINT);
				break;

        case 'delUser': // Incomplete
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delUser($d), JSON_PRETTY_PRINT);
				break;

        case 'editUser': // Incomplete
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editUser($d), JSON_PRETTY_PRINT);
				break;

		case 'editUser': // Incomplete
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editUser($d), JSON_PRETTY_PRINT);
				break;

		case 'loginUser': // Do not Touch
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->loginUser($d), JSON_PRETTY_PRINT);
				break;

		// Prod Operations

        case 'pullAllProd':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllProd($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllProd($d), JSON_PRETTY_PRINT);
					}
				break;

		case 'delCart':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCart($d), JSON_PRETTY_PRINT);
				break;

		// Cart Operations

        case 'addCart':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addCart($d), JSON_PRETTY_PRINT);
				break;

        case 'pullAllCart':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllCart($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllCart($d), JSON_PRETTY_PRINT);
					}
				break;

		case 'addOrder':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addOrder($d), JSON_PRETTY_PRINT);
				break;

		case 'editOrder':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editOrder($d), JSON_PRETTY_PRINT);
				break;

		case 'pullAllOrders':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllOrders($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllOrders($d), JSON_PRETTY_PRINT);
					}
				break;

		// Emp Operations

        case 'pullAllEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllEmp($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllEmp($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'pullSpecEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecEmp($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecEmp($d), JSON_PRETTY_PRINT);
					}
				break;  

		case 'editEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editEmp($d), JSON_PRETTY_PRINT);
				break;

		case 'addEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addEmp($d), JSON_PRETTY_PRINT);
				break;

		case 'delEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delEmp($d), JSON_PRETTY_PRINT);
				break;

		case 'editEmp':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editEmp($d), JSON_PRETTY_PRINT);
				break;

		//Attendance Operations

		case 'pullAllAtt':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllAtt($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllAtt($d), JSON_PRETTY_PRINT);
					}
				break;

		//Wage Operations

		case 'pullAllWage':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllWage($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllWage($d), JSON_PRETTY_PRINT);
					}
				break;

		//Dump Operations

		case 'cumDump':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($gm->cumDump($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($gm->cumDump($d), JSON_PRETTY_PRINT);
					}
				break;

		//CHEATSHEET
				
		case 'pullAllAdd':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullAllEmp($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAllEmp($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'pullSpecAdd':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo $d;
            if(count($req)>1) {                       
						echo json_encode($get->pullSpecEmp($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullSpecEmp($d), JSON_PRETTY_PRINT);
					}
				break; 

        case 'addReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addReq($d), JSON_PRETTY_PRINT);
				break;

        case 'delReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delReq($d), JSON_PRETTY_PRINT);
				break;

        case 'editReq':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editReq($d), JSON_PRETTY_PRINT);
				break;

      // Comment Operations

        case 'pullCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
          if(count($req)>1) {                       
						echo json_encode($get->pullCom($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCom($d), JSON_PRETTY_PRINT);
					}
				break;

        case 'addCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->addCom($d), JSON_PRETTY_PRINT);
				break;

        case 'delCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCom($d), JSON_PRETTY_PRINT);
				break;

        case 'editCom':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->editCom($d), JSON_PRETTY_PRINT);
				break;

		// TO BE REMOVED      

		case 'reqs':
			$d = json_decode(base64_decode(file_get_contents("php://input")));
			if(count($req)>1) {
						   
				echo json_encode($get->pullReqs($d), JSON_PRETTY_PRINT);
			} else {
				echo json_encode($get->pullReqs($d), JSON_PRETTY_PRINT);
			}	
		break;

        case 'reqt':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					if(count($req)>1) {
						   
						echo json_encode($get->pullReqt($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullReqt($d), JSON_PRETTY_PRINT);
					}	
				break;

        // TO BE REMOVED 
				
			}
		break;

		case 'GET':
			switch ($req[0]) {

				default:
				http_response_code(400);
				echo "Bad Request";
				break;
			}
		break;

		default:
			http_response_code(403);
			echo "Please contact the Systems Administrator";
		break;
	}

?>
