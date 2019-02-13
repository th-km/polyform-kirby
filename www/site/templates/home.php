<?php
snippet('header');

  foreach($pages->listed() as $section) {
    snippet($section->uid(), ['data' => $section]);
  }

snippet('footer');
?>
