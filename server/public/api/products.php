
<?php 
  require_once 'functions.php';
  require_once 'db_connection.php';
  set_exception_handler('error_handler');
  startup();
  if (!$conn) {
    throw new Exception(mysqli_connect_error($conn));
    exit();
  }
  if (empty($_GET['id'])){
  $query = "SELECT * FROM `wicked-sales-products`";
  }
  else {
  $query = "SELECT * FROM `wicked-sales-products` WHERE `id` = {$_GET['id']}";
  }
  $result = mysqli_query($conn, $query);
  if(!$result) {
    throw new Exception (mysqli_error($conn));
    exit();
  }
  $output = [];
  if (mysqli_num_rows($result) === 0) {
    print([]);
    exit();
  }
  while ($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
  }
  $json_output = json_encode($output);
  print($json_output);
?>
