<link rel="stylesheet" href="view/css/public/itemImgText.css">
<?php
function getItemImgText ($src, $description) {
  return "
    <div class='item'>
      <div class='row'>
        <img src='$src' alt='Image service' />
        <p>$description</p>
      </div>
    </div>
  ";
}
?>
