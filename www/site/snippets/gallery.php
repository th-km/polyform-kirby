<section class="gallery relative w-full h-auto min-h-full lg:fixed lg:pin-t lg:pin-l lg:w-1/2 lg:h-full">
  <div class="relative pint-t w-full h-screen">
    <div class="relative w-full h-full max-w-lg mx-auto">
      <?php foreach($data->images()->shuffle() as $image): ?>
        <img class="absolute w-full h-full bg-black" src="<?= $image->url() ?>">
      <?php endforeach ?>
    </div>
  </div>
</section>
