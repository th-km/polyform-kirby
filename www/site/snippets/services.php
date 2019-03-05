<div class="mt-24">
  <h2 class="headline text-secondary"><?= t('services') ?></h2>

  <div class="accordion-container">
    <?php foreach ($data->categories()->toStructure() as $category): ?>
      <div class="accordion border-b-2 border-secondary">
        <div class="accordion-header">
          <h3>
            <button class="btn flex justify-between items-center">
              <span class="text-5xl"><?= $category->title()->html() ?></span>
              <span class="expand text-secondary">+</span>
              <span class="collapse text-secondary">-</span>
            </button>
          </h3>
        </div>
        <div class="accordion-content overflow-hidden h-0 p-0">
          <div class="pb-12">
            <?= $category->text()->kt() ?>
            <span class="inline-block mt-12 text-secondary"><?= $category->tags() ?></span>
          </div>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</div>
