<?php


add_action('wp_enqueue_scripts', function() {

  // wp_dequeue_style( 'twentyseventeen-style' );
  // wp_deregister_style( 'twentyseventeen-style' );

  wp_register_style('twentyseventeen-style', get_template_directory_uri(). '/style.css');
  wp_enqueue_style('twentyseventeen-style', get_template_directory_uri(). '/style.css');

  // wp_enqueue_style( 'neverending-posts-demo-style', get_stylesheet_directory_uri().'/style.css');

  // wp_enqueue_script('turbolinks', 'https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.min.js', null, '', false);

});
