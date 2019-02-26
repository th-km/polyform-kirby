<div class="mt-24">
  <h2 class="headline"><?= t('services') ?></h2>

  <div class="accordion-container">
    <?php foreach ($data->categories()->toStructure() as $category): ?>
      <div class="accordion border-b-2 border-current">
        <div class="accordion-header">
          <h3>
            <button class="btn flex justify-between items-center">
              <?= $category->title()->html() ?>
              <span class="icon expand">+</span>
              <span class="icon collapse">-</span>
            </button>
          </h3>
        </div>
        <div class="accordion-content overflow-hidden h-0 p-0">
          <div class="pb-12">
            <?= $category->text()->kt() ?>
            <ul class="mt-6 list-reset">
              <?php foreach($category->tags()->split(',') as $tag): ?>
                <li class="text-current"><?= $tag ?></li>
              <?php endforeach ?>
            </ul>
          </div>
        </div>
      </div>
    <?php endforeach ?>
  </div>
</div>
