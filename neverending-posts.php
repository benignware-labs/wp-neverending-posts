<?php

/**
 Plugin Name: Neverending Posts
 Plugin URI: http://github.com/benignware/wp-neverending-posts
 Description: Ajaxify next posts link
 Version: 0.0.2
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
  $options = apply_filters('neverending_posts_options', array(
    'updateMode' => 'append'
  ));
  $options_serialized = urlencode(json_encode($options));

  if (strpos($attrs, "data-neverending-posts=") !== FALSE) {
    $attrs = preg_replace('~data-neverending-posts=["\']([^"\']*)["\']~', '$1 ' . $options_serialized);
  } else {
    $attrs.= ' data-neverending-posts="' . $options_serialized . '"';
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

add_filter('neverending_posts_options', function($options) {
  return array_merge($options, array(
    'containerSelector' => '*[role=\'main\']'
  ));
});
