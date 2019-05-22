
<?php 
  require_once 'functions.php';
  require_once 'db_connection.php';
  set_exception_handler('error_handler');
  if (!$conn) {
    throw new Exception('Error: ' . mysqli_connect_error($conn));
  }
  $query = "SELECT `id`, `name`, `price`, `image`, `shortDescription` FROM `wicked-sales-products`";
  $result = mysqli_query($conn, $query);
  if(!$result) {
    print('Error: ' . mysqli_error($conn));
    exit();
  }
  $output = [];
  if (mysqli_num_rows($result) === 0) {
    print('No data available');
    exit();
  }
  while ($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
  }
  $json_output = json_encode($output);
  print($json_output);
?>
