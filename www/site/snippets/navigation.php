<nav>
  <ul class="list-reset flex text-xl">
    <?php foreach($kirby->languages()->flip() as $language): ?>
      <li <?php e($kirby->language() == $language, ' class="active"') ?>>
        <a class="pr-10 text-grey" href="<?= $page->url($language->code()) ?>"><?= html($language->name()) ?></a>
      </li>
    <?php endforeach ?>
  </ul>
</nav>
