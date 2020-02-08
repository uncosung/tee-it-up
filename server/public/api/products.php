
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
    $query = 'SELECT * FROM `wicked-sales-products`';
  }
  else {
    if (is_numeric($_GET['id'])){
      $id = $_GET['id'];
      $query = "SELECT
                `wicked-sales-products`.*, 
                `wicked-sales-images`.`url` AS `extraImages` 
                FROM `wicked-sales-products` 
                JOIN `wicked-sales-images` 
                ON `wicked-sales-products`.`id` = `wicked-sales-images`.`wicked-sales-products-id`
                WHERE `wicked-sales-products`.`id` = $id
                ";
    }
    else {
      throw new Exception ('ID needs to be a number');
    }
  }
  $result = mysqli_query($conn, $query);
  if(!$result) {
    throw new Exception (mysqli_error($conn));
    exit();
  }
  $output = [];
  if (mysqli_num_rows($result) === 0) {
    if ($_GET['id']) {
      throw new Exception ("Invalid ID : {$_GET['id']}");
    }
    print([]);
    exit();
  }
  while ($row = mysqli_fetch_assoc($result)){
    $id = $row['id'];
    if (array_key_exists($id, $output)){
      if (!empty($output) && $output[$id]['id'] === $id) {
        if (empty($row['extraImages'])) {
          $output[] = $row;
        }
        else {
          $moveRows = $row['extraImages'];
          $keysToRemove = ['id', 'name', 'price', 'image', 'shortDescription', 'longDescription'];
          foreach($keysToRemove as $key){
            unset($row[$key]);
          }
          $output[$id]['extraImages'][] = $moveRows;
        }
      }
    }

    else {
      if (empty($row['extraImages'])) {
        $output[] = $row;
      }
      else {
        $firstMoveRows = $row['extraImages'];
        $keysToRemove = ['extraImages'];
        foreach($keysToRemove as $key){
          unset($row[$key]);
        }
        $row['extraImages'][] = $firstMoveRows;
        $output[$id] = $row;
      }
    }
  }
  $json_output = json_encode($output);
  print($json_output);
?>
