<?php get_header(); ?>

<section class="gallery_page_width global_page_padding top_gallery">

<!-- Start Of product_hero_div-->
<div class="product_hero_div">

<div class="hero_heading_div">
<h1>Best <?php 
$title = get_the_title();
echo $title; ?></h1>
</div>
<div class="hero_text_div">
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
<a class="g-pinterest-button" data-pin-do="buttonBookmark" data-pin-tall="true" href="https://www.pinterest.com/pin/create/button/"></a>

<div class="g-products-all-container">
<!-- START OF CONDITIONAL LOGIC -->
<?php
$all_asins = get_field("list_all_asins");
$new_asins = explode("," , $all_asins);
$index = 1;
$activate_custom = get_field("activate_custom_list_post");
if (empty($activate_custom)) {
foreach ($new_asins as $aawp_asin) {
?>
<script async defer src="//assets.pinterest.com/js/pinit.js"></script>

<!-- END OF CONDITIONAL LOGIC -->



<!-- ASINGALLERY -->
<div class="g-ag-aawp-products switch-off2">
	<div class="g-ag-aawp-product-container">
	
        <div class="g-ag-aawp-thumbnail">
			<?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="thumb" image_size="large" image_alt=""]');?>
		</div>

		<a href="<?php echo aawp_get_field_value($aawp_asin, 'url');?>">	  
        <div class="g-ag-title-container">
			<h2 class="g-ag-aawp-product-title">
				<?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="title" title_length="1000"]') ;?>
			</h2>
		</div>
	</a>

	    <div class ="g-ag-product-description">
        	<?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="description" description_length="1000"]');?>
        </div>
		
		<div class="g-ag-aawp-button">
			<?php echo do_shortcode('[amazon fields="'.$aawp_asin.'" value="button" button_text="See on Amazon"]');?>
			
		</div>
		
	</div>
</div>
<!-- END OF AUTO GALLERY -->




<!-- BEGINNING Of CUSTOM LIST GALLERY -->
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

<div class="g-ag-aawp-products">
	<div class="g-ag-aawp-product-container">
		
		<div class="g-ag-aawp-thumbnail">
			<?php if(empty($custom_image)) {
			echo do_shortcode('[amazon fields="'.$single_asin.'" value="thumb" image_size="large"]'); }
			if(!empty($custom_image)) { ?>
			<img src="<?php echo $custom_image; ?>">
			<?php } ?>
		</div>

		
		<a href="<?php echo aawp_get_field_value($single_asin, 'url');?>">
				  <div class="g-ag-title-container">
					  <div class="g-ag-aawp-product-title">
						  <h2 class="g-ag-aawp-title"><?php if(empty($custom_title)) {
						  echo do_shortcode('[amazon fields="'.$single_asin.'" value="title" title_length="1000"]') ; }
						  if(!empty($custom_title)) {
						  echo $custom_title; } ?></h2>
					  </div>
				  </div>
			  </a>	
	

		
	    <div class ="g-ag-product-description">
			<?php if(empty($custom_description)) {
        	echo do_shortcode('[amazon fields="'.$single_asin.'" value="description" description_length="1000"]'); }
			if(!empty($custom_description)) { 
			echo $custom_description; } ?>
      	</div>

		<div class="g-ag-aawp-button">
			<?php echo do_shortcode('[amazon fields="'.$single_asin.'" value="button" button_text="See on Amazon"]');?>
		</div>
	</div>
</div>
<?php }}} ?>
<!-- END OF AUTO GALLERY -->


<!-- START OF AUTO GEN ROUNDUP -->
<div class="g-best-sellers-autogen gallery_page_width  switch-off3">
<?php
	$term = get_the_title();
	$item_count = get_field('item_count_list');
	if($all_asins == null){ echo '<style>.switch-off2 { display:none;}</style>';}
	if($all_asins != null){ echo '<style>.switch-off3 { display:none;}</style>';}
	if($single_asin != null){ echo '<style>.switch-off3 { display:none;}</style>';}
	if($all_asins == null){ echo '<style>.rr-t3-aawp-product-container { display:none;}</style>';}
	if($all_asins == null && $activate_custom == null){echo '<div class="amazon-bestseller">'.'<div>'. do_shortcode('[amazon bestseller="'.$term.'" template="vertical" items="'.$item_count.'"]').'</div>'.'</div>';
	}?>
<!-- END OF AUTO GEN ROUNDUP -->
</div>




</div>
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
