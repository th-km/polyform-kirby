<?php

$langOrder = ['en', 'fr', 'cn'];
$languages = $kirby->languages();
$orderedLanguages = new Kirby\Cms\Languages();

foreach($langOrder as $code) {
  $language = $languages->findBy('code', $code);
  $orderedLanguages->add($language);
}

foreach($orderedLanguages as $language) {
  $language->code();
}
?>

<nav class="relative w-48 md:w-auto md:max-w-xs">
  <ul class="flex justify-between">
    <?php foreach($orderedLanguages as $language): ?>
      <li <?php e($kirby->language() == $language, 'class="active"') ?>>
        <a href="<?= $page->url($language->code()) ?>"><?= html($language->name()) ?></a>
      </li>
    <?php endforeach ?>
    <span class="indicator"></span>
  </ul>
</nav>
