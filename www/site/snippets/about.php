<section class="w-full ml-0 min-h-0 lg:w-1/2 lg:ml-half lg:min-h-full">
  <div class="p-4 xl:p-8 xl:max-w-3xl xl:mx-auto">

    <?php snippet('navigation') ?>

    <div class="mt-24">
      <h2 class="headline"><?php echo t('approach') ?></h2>
      <?= $data->intro()->kt() ?>
    </div>

    <div class="services mt-24">
      <h2 class="headline"><?php echo t('services') ?></h2>

      <?php foreach ($data->categories()->toStructure() as $category): ?>
        <div class="accordion border-b border-grey">
          <div class="accordion__header overflow-hidden">
            <h3 class="accordion__title">
              <button class="btn w-full flex justify-between">
                <?= $category->title()->html() ?>
                <span class="expand block text-grey">+</span>
                <span class="collapse hidden text-grey">-</span>
              </button>
            </h3>
          </div>
          <div class="accordion__content overflow-hidden h-0 p-0">
            <div class="accordion__inner pb-12">
              <?= $category->text()->kt() ?>
              <ul class="mt-6 list-reset">
                <?php foreach($category->tags()->split(',') as $tag): ?>
                    <li class="text-grey"><?= $tag ?></li>
                <?php endforeach ?>
              </ul>
            </div>
          </div>
        </div>
      <?php endforeach ?>
    </div>

    <div class="mt-24">
      <h2 class="headline"><?php echo t('contact') ?></h2>

      <ul class="list-reset">
        <li><?= Html::email($data->email(), null, ['class' => 'link']) ?></li>
        <?php foreach ($data->network()->toStructure() as $network): ?>
          <li><?= Html::a($network->url(), $network->platform(), ['class' => 'link']) ?></li>
        <?php endforeach ?>
      </ul>
    </div>

    <div class="mt-24">
      <p class="mb-6 text-sm text-grey">
         &copy; <?= date('Y') ?> <?= $site->titletag() ?>
      </p>
    </div>

  </div>
</section>
