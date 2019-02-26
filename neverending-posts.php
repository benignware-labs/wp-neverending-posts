<?php

/**
 Plugin Name: Neverending Posts
 Plugin URI: http://github.com/benignware/wp-neverending-posts
 Description: Ajaxify next posts link
 Version: 0.0.1
 Author: Rafael Nowrotek, Benignware
 Author URI: http://benignware.com
 License: MIT
*/

// Enqueue plugin scripts
add_action('wp_enqueue_scripts', function() {
  wp_enqueue_script( 'sticky-widget-area', plugin_dir_url( __FILE__ ) . 'dist/neverending-posts.js' );
  //wp_enqueue_style( 'sticky-widget-area', plugin_dir_url( __FILE__ ) . 'dist/neverending-posts.css' );
});

// Next posts link class
add_filter('next_posts_link_attributes', function($attrs = '') {
  $update_mode = 'append';

  if (strpos($attrs, "data-remote=") !== FALSE) {
    $attrs = preg_replace('~data-remote=["\']([^"\']*)["\']~', '$1 ' . $update_mode);
  } else {
    $attrs.= ' data-remote="' . $update_mode . '"';
  }

  return trim($attrs);
});

// Previous posts link class
add_filter('previous_posts_link_attributes', function($attrs = array()) {
  $hidden_style = 'display: none';

  if (strpos($attrs, "style=") !== FALSE) {
    $attrs = preg_replace('~style=["\']([^"\']*);?["\']~', '$1; ' . $hidden_style);
  } else {
    $attrs.= ' style="' . $hidden_style . '"';
  }

  return trim($attrs);
});
