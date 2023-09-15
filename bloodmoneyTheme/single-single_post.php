<?php get_header(); ?>

<section class="gallery_page_width global_page_padding top_gallery">

<!-- Start Of product_hero_div-->
<div class="product_hero_div">

<div class="hero_heading_div">
<h1><?php 
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

<div class= "single_product_top">
<div class= "single_product_top_left">
	<div class = "single_product_image_box">
		<div class ="single_product_carousel"></div>
		<div class ="single_product_image">
			<img src="https://staging-powerboatcentre.kinsta.cloud/wp-content/uploads/2021/11/circle-fiji.jpg">
		</div>
	</div>
	<div class="single_product_top_left_button">
		<btn>View on Amazon</btn>
	</div>
	<div class = "single_product_details">
		<h3>Product Details</h3>
	</div>

</div>

<div class= "single_product_top_right"> 
	<div class="single_product_title-brandname-price">
		<h2 class="single_product_title">epson workforce wf-3520 wireless all-in-one-color</h2>
		<p class="single_product_brandname">Brand Name | Score</p>
		<p class="single_product_price">Price: 5000.00 FJD</p>
	</div>
<div class="single_product_description-about">
	<div class="single_product_description">
	<h3>Product Description</h3>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi inventore in reiciendis non quidem? Labore commodi dolorem quam maxime eos voluptatum incidunt adipisci velit facilis. Quia aliquam exercitationem odit.</p>
	</div>
	<div class="single_product_about">
	<h3>About This Item</h3>
	<ul>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
	</ul>
	</div>
</div>

<div class="single_product_features">
	<h3>Product features:</h3>
	<ul>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
		<li>Quia aliquam exercitationem odit Quia<span class="features_rating">test</span></li>
	</ul>
</div>

<div class="single_product_highlights">
	<h3>Highlights</h3>
	<p>
	Flowers can bring new insects that help the environmental cycle - or something like that, IDK I forgot highschool biology the minute I graduated.
	<br>
	Also flowers look much better than some weird shaped vegetable growing 		in the dark corner somewhere. Flowers like the sun.
	</p>
</div>

<div class="single_product_pros-cons">
	<div class="single_product_pros">
	<h3>Pros</h3>
	<ul>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
	</ul>
	</div>

	<div class="single_product_cons">
	<h3>Cons</h3>
	<ul>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
		<li>Quia aliquam exercitationem odit Quia</li>
	</ul>
</div>

</div>
</div>
</div>


<div class="single_product_middle">
	<div class="single_product_carousel2">
		<h2>You might also love</h2>
		<div class=""></div>
	</div>

	<div class="single_product_customer_reviews"> 

	</div>

	<div class="single_product_customer_reviews-q-a">

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
