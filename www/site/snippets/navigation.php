<nav>
  <ul class="list-reset flex">
    <?php foreach($kirby->languages() as $language): ?>
      <li <?php e($kirby->language() == $language, ' class="active"') ?>>
        <a class="pr-10" href="<?= $page->url($language->code()) ?>"><?= html($language->name()) ?></a>
      </li>
    <?php endforeach ?>
  </ul>
</nav>
