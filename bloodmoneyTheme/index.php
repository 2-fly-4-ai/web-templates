<?php get_header(); ?>

<section class="archive_section global_page_width">

<div class="heading_div">
 <h1>   
<?php 
   $tax = $wp_query->get_queried_object();
   echo ''. $tax->name . '';
?>
</h1>
<p><span class="hero_text_div_span1">Handpicked</span> <span class="hero_text_div_span2">Quality-Checked</span> <span class="hero_text_div_span3">Generated From 25K+ Reviews!</span></p>
<p>There is a large variety of items that are suitable for boaters of all types at Powerboat Centre.  As a leading authority in the field run by top boating experts, you can shop with confidence while browsing our catalogs. We took the time to find the most sought after items for you. If you want to save time and money, check out our collection of boating products, starting with the best fishing, saling and boating gear! </p>
</div>

<div class="archive_list">
<?php 

global $post;
$page_slug = get_post_field( 'post_name', $post_id );
$my_query_args = array(
    'post_type' => array('top-picks', 'best-reviews', 'best'),
    'posts_per_page' => -1, // change this to any number or '0' for all
    'tax_query' => array(
        array(
            'taxonomy' => 'archive_page_taxonomy',
            'field' => 'slug',
            'terms' => $tax->name ,
            
         )
    )
);
// a new instance of the WP_query class   
$my_query = new WP_Query( $my_query_args );

if( $my_query->have_posts() ) : while( $my_query->have_posts() ) : $my_query->the_post(); ?>

    <li><a href="<?php the_permalink() ?>"><?php the_title() ?></a></li>

<?php endwhile; endif; wp_reset_postdata(); ?>
    
</div>
</section>
<?php get_footer();?>


<!-- /*why the fuck is it writtten like this??*/ -->
 

