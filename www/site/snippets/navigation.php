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

<nav>
  <ul class="list-reset flex">
    <?php foreach($orderedLanguages as $language): ?>
      <li <?php e($kirby->language() == $language, ' class="active"') ?>>
        <a class="pr-6 text-xl text-grey" href="<?= $page->url($language->code()) ?>"><?= html($language->name()) ?></a>
      </li>
    <?php endforeach ?>
  </ul>
</nav>
