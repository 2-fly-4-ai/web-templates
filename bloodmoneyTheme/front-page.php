<?php get_header(); ?>

<div class="index_hero_section">
    <div class="index_hero_section_innerDiv global_page_width">
    
        <h1><?php bloginfo("name") ?></h1>
        
        <h3>
        <?php bloginfo("description") ?>
        </h3>
    </div>

</div>

<div class="index_content_section global_page_width">
	<div class="home-linkhub-container">
		
	
<?php
$terms = get_terms('link_hub_taxonomy');
$choose_linkhub = get_field('choose_linkhub');
$index = 1;


foreach ($choose_linkhub as $choice) {
foreach ($terms as $term) {
if($choice->name == $term->name) { 
asort($terms);	
asort($choose_linkhub);
	echo '<div class="link-hub-container">';
	echo '<h3 onclick="toggle_visibility(' . $index . ');" class="blog-heading">' . $term->name . '</h3>';
		$linkhub_posts = array(
		'posts_per_page' => -1,
		'post_type' => array('top-picks', 'best', 'best-reviews'),
			'order' => 'ASC',
		  'orderby' => 'title',
		'tax_query' => array(
			array(
			'taxonomy' => 'link_hub_taxonomy',
			'field' => 'name', 
			'terms' => $term->name,
			)
		)
		);
$posts = get_posts($linkhub_posts);
echo '<div id="' . $index . '" class="blog-posts-container">';
foreach ( $posts as $post ) {
	echo "<div class='blog-link-container'><a class='blog-link' href='" . get_permalink($post) . "'" . $post->post_name . "/'>" . $post->post_title . "</a></div>";
}
echo '</div>';
echo '</div>';
echo '<div style="display: none;">' . $index++ . '</div>';

}	
}
}
?>
</div>
	
</div>



<?php get_footer();?>