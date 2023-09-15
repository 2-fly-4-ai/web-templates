<?php

function cashMoneyAffiliates_files()
{
    wp_enqueue_style("cashmoney_styles", get_stylesheet_uri());
    wp_enqueue_style("cashmoney_styles", get_stylesheet_uri());
}




function my_custom_metatags_fn()
{
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
}


// Alternative
// Fully Disable Gutenberg editor.
add_filter('use_block_editor_for_post_type', '__return_false', 10);
// Don't load Gutenberg-related stylesheets.
add_action('wp_enqueue_scripts', 'remove_block_css', 100);


function remove_block_css()
{
    wp_dequeue_style('wp-block-library'); // Wordpress core
    wp_dequeue_style('wp-block-library-theme'); // Wordpress core
    wp_dequeue_style('wc-block-style'); // WooCommerce
    wp_dequeue_style('storefront-gutenberg-blocks'); // Storefront theme
}


function get_link_by_slug($slug, $type = 'post')
{
    $post = get_page_by_path($slug, OBJECT, $type);
    return get_permalink($post->ID);
}

function gretathemes_meta_description()
{
    global $post;
    if (is_singular()) {
        $des_post = strip_tags($post->post_content);
        $des_post = strip_shortcodes($post->post_content);
        $des_post = str_replace(array("\n", "\r", "\t"), ' ', $des_post);
        $des_post = mb_substr($des_post, 0, 300, 'utf8');
        echo '<meta name="description" content="' . $des_post . '" />' . "\n";
    }
    if (is_home()) {
        echo '<meta name="description" content="' . get_bloginfo("description") . '" />' . "\n";
    }
    if (is_category()) {
        $des_cat = strip_tags(category_description());
        echo '<meta name="description" content="' . $des_cat . '" />' . "\n";
    }
}
add_action('wp_head', 'gretathemes_meta_description');

function cashMoneyAffiliates_features()
{
    add_theme_support('title-tag');
    register_nav_menu("headerMenuLocation", "Head Menu Location");
    register_nav_menu("headerFooterLocation1", "Head Footer Location 1");
    register_nav_menu("headerFooterLocation2", "Head Footer Location 2");
    register_nav_menu("headerFooterLocation3", "Head Footer Location 3");
    register_nav_menu("headerFooterLocation4", "Head Footer Location 4");
    register_nav_menu("headerFooterLocation5", "Head Footer Location 5");
}



add_action('wp_enqueue_scripts', 'themeprefix_slick_enqueue_scripts_styles');
// Enqueue Slick scripts and styles
function themeprefix_slick_enqueue_scripts_styles()
{

    wp_enqueue_script('slickjs', get_stylesheet_directory_uri() . '/js/slick.min.js', array('jquery'), '1.6.0', true);
    wp_enqueue_script('slickjs-init', get_stylesheet_directory_uri() . '/js/slick-init.js', array('slickjs'), '1.6.0', true);

    wp_enqueue_style('slickcss', get_stylesheet_directory_uri() . '/css/slick.css', '1.6.0', 'all');
    wp_enqueue_style('slickcsstheme', get_stylesheet_directory_uri() . '/css/slick-theme.css', '1.6.0', 'all');
}


add_action("wp_enqueue_scripts", "cashMoneyAffiliates_files");
add_action("after_setup_theme", "cashMoneyAffiliates_features");
add_action("my_custom_metatags", "my_custom_metatags_fn");
