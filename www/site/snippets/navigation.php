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

<nav class="relative pt-12">
  <ul class="list-reset max-w-xs flex justify-between">
    <?php foreach($orderedLanguages as $language): ?>
      <li <?php e($kirby->language() == $language, ' class="active"') ?>>
        <a class="text-current no-underline" href="<?= $page->url($language->code()) ?>"><?= html($language->name()) ?></a>
      </li>
    <?php endforeach ?>
  </ul>
  <span class="indicator"></span>
</nav>
