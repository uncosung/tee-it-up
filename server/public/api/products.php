<!-- <?php

// header('Content-Type: application/json');

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }

?> -->

<?php 
  require_once 'functions.php';
  set_exception_handler('error_handler');
  dostuff();
  $output = file_get_contents('dummy-products-list.json');
  print($output);
?>
