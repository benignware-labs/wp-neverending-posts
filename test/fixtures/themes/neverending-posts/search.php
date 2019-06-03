<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Kicks_App
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<?php
	global $wp_query;

	$query_vars = $wp_query->query_vars;

	// Add user-defined post-types

	if ($query_vars['post_type'] && $query_vars['post_type'] !== 'any') {
		$post_types = array($query_vars['post_type']);
	} else {
		$post_types = array_merge([ 'post', 'page' ], get_post_types([
	  	'public'   => true,
	  	'_builtin' => false
	 	], 'names', 'and'));
	}


 $query_args = array_merge(
	 $wp_query->query_vars,
	 array(
		 'nopaging' => true,
		 'post_type' => $post_types,
		 'suppress_filters' => false
	 )
 );
 $wp_query = new WP_QUERY($query_args);

 $main_query = $wp_query;
?>
<div class="wrap container">
	<header class="page-header archive-header">
        <h1 class="page-title display-1"><?=__('Search', 'dfl-intranet')?></h1>
		<?php if ( have_posts() ) : ?>
			<h2><?php printf( __( 'Search Results for: %s', 'dfl-intranet' ), '<span>' . get_search_query() . '</span>' ); ?></h2>
		<?php else : ?>
			<h2><?php __( 'Nothing Found', 'dfl-intranet' ); ?></h2>
		<?php endif; ?>

	</header><!-- .page-header -->

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php if (have_posts()): ?>
				<?php foreach( $post_types as $type ): ?>
					<?php

						$current_page = get_query_var('paged');
						$current_post_type = get_query_var('post_type');
						// Get the label
						$post_type_object = get_post_type_object($type);

						$label = $type->label;
						if ($post_type_object) {
							$label = $post_type_object->label;
						}

						if ($type === 'post') {
							$label = __('Posts');
						}

						// Filter post-type
						$query_args = array_merge(
							$wp_query->query_vars,
							array(
								'nopaging' => false,
								'post_type' => $type,
								'suppress_filters' => false
							)
						);
						$wp_query = new WP_QUERY($query_args);

            $current_page = $wp_query->get('paged') ?: 1;
            $items_per_page = $wp_query->get('posts_per_page');

						$total_pages = $wp_query->max_num_pages;
						$found_posts = $wp_query->found_posts;
						$rest_posts = $found_posts - ($current_page * $items_per_page);
					?>
					<?php if (have_posts()): ?>
						<section class="section section-search">
							<h1><?= $label ?></h1>
							<div class="row" id="remote-container-<?= $type; ?>">
				        <?php
									$template_path = 'template-parts/card/card';
								?>
								<?php while( have_posts()) : the_post() ?>
	                <?php if (get_post_type() === $type): ?>
	                  <div class="<?= $column_class; ?> mb-2 mb-lg-3">
	                    <?php get_template_part( 'template-parts/post/content', 'excerpt' ); ?>
	                  </div>
	            		<?php endif; ?>
			        	<?php endwhile; ?>

								<?php if ($rest_posts > 0): ?>
										<?php
											$more_label = sprintf(__('More %s (%d)'), $label, $rest_posts);
										?>
										<?= get_next_posts_link($more_label, $total_pages); ?>
								<?php endif; ?>
								<?php wp_reset_query(); ?>
							</div>
						</section>
					<?php endif; ?>
					<?php rewind_posts(); ?>
				<?php endforeach; ?>
			<?php endif; ?>

		<?php
		if ( $main_query->have_posts() ) :
			/* Start the Loop */
			/*
			while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/card/card', get_post_type() );

			endwhile; // End of the loop.
			*/
			/*
			the_posts_pagination( array(
				'prev_text' => kicks_app_get_icon_html( array( 'icon' => 'arrow-left' ) ) . '<span class="screen-reader-text">' . __( 'Previous page', 'kicks-app' ) . '</span>',
				'next_text' => '<span class="screen-reader-text">' . __( 'Next page', 'kicks-app' ) . '</span>' . kicks_app_get_icon_html( array( 'icon' => 'arrow-right' ) ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'kicks-app' ) . ' </span>',
			) );
			*/
		else : ?>
			no matches
			<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'dfl-intranet' ); ?></p>
			<?php
				get_search_form();

		endif;
		?>

		</main><!-- #main -->
	</div><!-- #primary -->
	<?php get_sidebar(); ?>
</div><!-- .wrap -->

<?php get_footer();
