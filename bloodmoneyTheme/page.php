<?php get_header();?>
<div class="page_hero_section page_banner_image;" >

<h1><?php the_title();?></h1>    
<div class="page_hero_section_overlay">
 <?php 
 $theParent = wp_get_post_parent_id(get_the_ID());
 ?>   
   
   </div>

</div>


<div class="legal_pages_Div global_page_width">
<div class="breadcrumbs_section ">
<div class="breadcrumbs">
    <ul class="breadcrumb_list">
    <?php

if($theParent){
$findChildrenOf = $theParent;
} else {
    $findChildrenOf = get_the_ID();
}

    wp_list_pages(array(
        "title_li" => NULL,
        "child_of" => $findChildrenOf
));
    ?>
</ul>
</div>
</div>

<div class="page_content_section ">
   <?php the_content(); ?>
  
</div>

</div>
 
<?php get_footer(); ?>
