<?php

Kirby::plugin('polyform/customtag', [
  'tags' => [
    'fs' => [
      'attr' => [
        'class'
      ],
      'html' => function($tag) {
        $class =  !empty($tag->class)? $tag->class : "font-lt";
        return '<span class="' . $class . '">' . $tag->value() .'</span>';
      }
    ]
  ]
]);
