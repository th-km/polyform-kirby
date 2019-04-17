<?php
$images = $data->images()->shuffle();
$last = $images->last();
?>

<section class="gallery w-full lg:fixed lg:w-1/2">
  <figure class="relative max-w-4xl h-screen mx-auto">
    <?php foreach($images as $image): ?>
      <img class="absolute w-full h-full opacity-0 select-none pointer-events-none<?= $image == $last ? ' is-last' : '' ?>" src="<?= $image->url() ?>">
    <?php endforeach ?>
  </figure>
</section>
