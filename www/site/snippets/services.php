<div class="mt-24">
  <h2 class="headline"><?= t('services') ?></h2>

  <div class="accordion-container">
    <?php foreach ($data->categories()->toStructure() as $category): ?>
      <div class="accordion border-b">
        <div class="accordion-header">
          <h3>
            <button class="btn flex justify-between items-center">
              <?= $category->title()->html() ?>
              <span class="expand">+</span>
              <span class="collapse">-</span>
            </button>
          </h3>
        </div>

        <div class="accordion-content overflow-hidden h-0 p-0">
          <div class="pb-12">
            <?= $category->text()->kt() ?>
            <span class="inline-block mt-12"><?= $category->tags() ?></span>
          </div>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</div>
