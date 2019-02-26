<section class="gallery w-full lg:fixed lg:w-1/2">
  <div class="relative max-w-lg h-screen mx-auto text-blue">
    <?php foreach($data->images()->shuffle() as $image): ?>
      <img class="absolute w-full h-full bg-black" src="<?= $image->url() ?>">
    <?php endforeach ?>
  </div>
</section>
