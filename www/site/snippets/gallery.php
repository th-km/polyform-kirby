<section class="gallery w-full lg:fixed lg:w-1/2">
  <div class="relative w-full max-w-3xl h-screen mx-auto">
    <?php foreach($data->images()->shuffle() as $image): ?>
      <img class="absolute w-full h-full opacity-0" src="<?= $image->url() ?>">
    <?php endforeach ?>
  </div>
</section>
