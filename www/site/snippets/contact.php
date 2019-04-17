<div class="mt-16 md:mt-40">
  <ul>
    <li><?= Html::email($data->email(), null, ['class' => 'link']) ?></li>
    <?php foreach ($data->network()->toStructure() as $network): ?>
      <li><?= Html::a($network->url(), $network->platform(), ['class' => 'link']) ?></li>
    <?php endforeach ?>
  </ul>
</div>

<div class="mt-16 md:mt-40">
  <p class="text-xs text-gray">
    <?= $site->copyright()->kti() ?>
  </p>
</div>
