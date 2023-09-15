<?php get_header(); ?>

<section class="global_page_width global_page_padding top_of_section">

<!-- Start Of product_hero_div-->
<div class="product_hero_div">

<div class="hero_heading_div">
<h1><?php 
$title = get_the_title();
echo $title; ?></h1>
</div>
<div class="hero_text_div">
<p>By Author Name Here</p>
<p><span class="hero_text_div_span1">Handpicked</span> <span class="hero_text_div_span2">Quality-Checked</span> <span class="hero_text_div_span3">Generated From 25K+ Reviews!</span></p>

</div>
<div class="hero_div_breadcrumb">
<div class= "hero_div_breadcrumb_text">
<?php
$currentID = get_the_ID();
$archives = get_the_terms( $post->$currentID, 'archive_page_taxonomy' );
echo "<div><a class='breadcrumb-automated' href='/'>Home</a>&nbsp;&nbsp;>&nbsp;&nbsp;";
if (!empty($archives)) {
asort($archives);
foreach ($archives as $archive) {
	echo '<a class="breadcrumb-automated" href="' . get_term_link( $archive ) . '">' . $archive->name . '</a>&nbsp;&nbsp;>&nbsp;&nbsp;';
}
}
echo the_title() . "</div>";


?>
</div>


<div class="product_hero_div_breadcrumb_info_icon">
<img class="open_me" src="https://staging-powerboatcentre.kinsta.cloud/wp-content/uploads/2021/11/NicePng_mouse-pointer-png_158682.png">
<div class="modal_div">
<p>
This website is a participant in the Amazon Services LLC Associates Program. We are reader-supported. If you buy something through links on our site, we may earn an affiliate commission at no additional cost to you. This doesn't affect which products are included in our content. It helps us pay to keep this site free to use while providing you with expertly-researched unbiased recommendations.
</p>
</div>
</div>
</div>
</div>
<!-- END OF product_hero_div-->


<div class=list_info_section>
	<div class="info_article_intro">
	<?php 
	$list_intro = get_field("intro");
	echo $list_intro;
	?>
	</div>
	
	<div class="info_article_Image">
	
<?php if( get_field('list_image') ): ?>
    <img src="<?php the_field('list_image'); ?>" />
<?php endif; ?>
	</div>

	<div class="info_article_text">
	<?php 
	$list_text = get_field("body_text");
	echo $list_text;
	?>
	</div>

</div>


<div class="lp-products-all-container">
<!-- START OF CONDITIONAL LOGIC -->
<?php
$all_asins = get_field("list_all_asins");
$new_asins = explode("," , $all_asins);
$index = 1;
$activate_custom = get_field("activate_custom_list_post");
if (empty($activate_custom)) {
foreach ($new_asins as $aawp_asin) {
?>


<!-- END OF CONDITIONAL LOGIC -->



<!-- START OF ASIN LIST -->
<div class="lp-ag-aawp-products switch-off">
	<div class="lp-ag-aawp-product-container">
	
    <div class="thumbnail-outter">  
	<div class="lp-ag-aawp-thumbnail">
			<?php if($all_asins != null){echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="thumb" image_size="large" image_alt=""]');}?>
		</div>

		<div class="lp-button-container">
		<a class="ag-pinterest-button" data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>
		<?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="button" button_text="See on Amazon"]');?>
		
		</div>
		</div>  

		<a href="<?php if($all_asins != null){echo aawp_get_field_value($aawp_asin, 'url');?>">	  
        <div class="lp-ag-title-container">
			<div class="lp-ag-aawp-product-title">
				<span class="lp-ag-aawp-rank-number"><?php echo $index++ . ". " ?></span>
				<h2 class="lp-ag-aawp-title"><?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="title" title_length="1000"]') ;}?></h2>
			</div>
		</div>
	</a>
<div>
	    <div class ="lp-ag-product-description">
        	<?php if($all_asins != null){echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="description" description_length="1000"]');}?>
        </div>
		
		
	</div>
</div>
<!-- END OF ASIN LIST -->


</div>

<!-- BEGINNING Of MANUAL LIST -->
<?php }} 
$list_repeater = get_field("list_product");

if (!empty($activate_custom)) {
if ($list_repeater) {
foreach ($list_repeater as $product) {

$single_asin = $product["list_asin"];
$custom_title = $product["list_title"];
$custom_image = $product["list_image"];
$custom_description = $product["list_description"];

?>
<script async defer src="//assets.pinterest.com/js/pinit.js"></script>
<div class="lp-ag-aawp-products">
	<div class="lp-ag-aawp-product-container">
		
	<div class="thumbnail-outter"> 
		<div class="lp-ag-aawp-thumbnail">
			<?php if(empty($custom_image)) {
			echo do_shortcode('[amazon fields="'.$single_asin.'" value="thumb" image_size="large"]'); }
			if(!empty($custom_image)) { ?>
			<img src="<?php echo $custom_image; ?>">
			<?php } ?>
		</div>

	
		<div class="lp-button-container">
		<a class="ag-pinterest-button" data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>
		<?php echo do_shortcode('[amazon fields="'.$single_asin.'" value="button" button_text="See on Amazon"]');?>
		
		</div>


		</div>	

		
		<a href="<?php echo aawp_get_field_value($single_asin, 'url');?>">
				  
				  <div class="lp-ag-title-container">
					  <div class="lp-ag-aawp-product-title">
						  <span class="lp-ag-aawp-rank-number"><?php echo $index++ . ". " ?></span>
						  <h2 class="lp-ag-aawp-title"><?php if(empty($custom_title)) {
						  echo do_shortcode('[amazon fields="'.$single_asin.'" value="title" title_length="1000"]') ; }
						  if(!empty($custom_title)) {
						  echo $custom_title; } ?></h2>
					  </div>
				  </div>
			  </a>	
	
	    <div class ="lp-ag-product-description2">
			<?php if(empty($custom_description)) {
        	echo do_shortcode('[amazon fields="'.$single_asin.'" value="description" description_length="1000"]'); }
			if(!empty($custom_description)) { 
			echo $custom_description; } ?>
      	</div>

	
	</div>
</div>
<?php }}} ?>
<!-- END OF MANUAL LIST -->
</div>

<!-- START OF AUTO GEN ROUNDUP -->
<div class="best-sellers-autogen global_page_width global_page_padding">
<?php
	$term = get_the_title();
	$item_count = get_field('item_count_list');
	if($all_asins == null){ echo '<style>.switch-off { display:none;}</style>';}
	if($all_asins == null && $activate_custom == null){echo '<div class="amazon-bestseller">'.'<div>'. do_shortcode('[amazon bestseller="'.$term.'" items="'.$item_count.'"  button_detail="https://www.pinterest.com/pin/create/button/"]').'</div>'.'</div>';
	}?>
<!-- END OF AUTO GEN ROUNDUP -->
</div>
	

<!-- START OF PRODUCT INFO SECTION -->
<div class="product_info_section">
<div class="buyers-guide">
	<?php 
	
	$buyersGuide = get_field("buyers_guide");
	echo $buyersGuide;
	?>
</div>
<div class="info-article">
	<?php 
	
	$infoArticle = get_field("info_article");
	echo $infoArticle;
	?>
</div>
</div>
<!-- END OF PRODUCT INFO SECTION -->




</section>

<script type="text/javascript">
  (function (d) {
    var f = d.getElementsByTagName('SCRIPT')[0],
      p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
  })(document);
</script>
<?php get_footer();?>
