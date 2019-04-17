<?php
$categories = $data->categories()->toStructure();
$first = $categories->first();
?>

<div class="mt-16 md:mt-40">
  <div class="accordion-container">
    <?php foreach ($categories as $category): ?>
      <div class="accordion border-b-2 border-gray<?= $category == $first ? ' border-t-2' : '' ?>">
        <div class="accordion-header">
          <h3>
            <button class="w-full flex justify-between items-center py-16 md:py-24 focus:outline-none">
              <?= $category->title()->html() ?>
              <span class="expand">+</span>
              <span class="collapse">-</span>
            </button>
          </h3>
        </div>

        <div class="accordion-content overflow-hidden h-0 p-0">
          <div class="pb-16 md:pb-24">
            <?= $category->text()->kt() ?>
            <span class="inline-block mt-10 text-gray"><?= $category->tags() ?></span>
          </div>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</div>
