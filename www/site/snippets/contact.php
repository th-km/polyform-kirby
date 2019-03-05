<div class="mt-24">
  <h2 class="headline text-secondary"><?= t('contact') ?></h2>

  <ul class="list-reset">
    <li><?= Html::email($data->email(), null, ['class' => 'link']) ?></li>
    <?php foreach ($data->network()->toStructure() as $network): ?>
      <li><?= Html::a($network->url(), $network->platform(), ['class' => 'link']) ?></li>
    <?php endforeach ?>
  </ul>
</div>

<div class="mt-24">
  <p class="pb-12 text-sm text-secondary">
     &copy; <?= date('Y') ?> <?= $site->titletag() ?>
  </p>
</div>
