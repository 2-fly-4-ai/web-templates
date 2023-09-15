<?php get_header(); ?>

<section class="global_page_width global_page_padding top_of_section">

	<!-- Start Of product_hero_div-->
	<div class="product_hero_div">

		<div class="hero_heading_div">
			<h1>Best <?php
						$title = get_the_title();
						echo $title; ?></h1>
		</div>
		<div class="hero_text_div">

			<p><span class="hero_text_div_span1">Handpicked</span> <span class="hero_text_div_span2">Quality-Checked</span> <span class="hero_text_div_span3">Generated From 25K+ Reviews!</span></p>
			<p class="intro_check"><?php echo the_field("intro") ?></p>
		</div>
		<div class="hero_div_breadcrumb">
			<div class="hero_div_breadcrumb_text">
				<?php
				$currentID = get_the_ID();
				$archives = get_the_terms($post->$currentID, 'archive_page_taxonomy');
				echo "<div><a class='breadcrumb-automated' href='/'>Home</a>&nbsp;&nbsp;>&nbsp;&nbsp;";
				if (!empty($archives)) {
					asort($archives);
					foreach ($archives as $archive) {
						echo '<a class="breadcrumb-automated" href="' . get_term_link($archive) . '">' . $archive->name . '</a>&nbsp;&nbsp;>&nbsp;&nbsp;';
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


	<div class="rr-products-all-container">

		<!-- Start Of RR top 3  -->
		<div class="roundup_top_3 switch-off4">
			<div class="rr-t3-aawp">
				<?php
				$keyword = get_field("list_all_asins");
				$first_asin = substr($keyword, 9);
				$newasin = explode(",", $keyword);
				?>
				<div class="rr-t3-aawp-product-container">
					<a href="<?php if ($newasin[0] != null) {
									echo aawp_get_field_value($newasin[0], 'url');
								} ?>">
						<div class="rr-t3-aawp-rankbox">
							<div class="rr-t3-aawp-rankbox-count">
								<span class="aawp-t3-rank-text">Rank</span><span class="rr-t3-aawp-rank-number">#1</span>
							</div>
							<div class="rr-t3-aawp-product-title"><?php if ($newasin[0] != null) {
																		echo do_shortcode('[amazon fields="' . $newasin[0] . '" value="title"]') . '<br>';
																	} ?></div>
						</div>
					</a>
					<div>
						<?php if ($newasin[0] != null) {
							echo do_shortcode('[amazon fields="' . $newasin[0] . '" value="thumb"]') . '<br>';
						} ?>
					</div>
				</div>

				<div class="rr-t3-aawp-product-container">
					<a href="<?php if ($newasin[1] != null) {
									echo aawp_get_field_value($newasin[1], 'url');
								} ?>">
						<div class="rr-t3-aawp-rankbox">
							<div class="rr-t3-aawp-rankbox-count">
								<span class="rr-t3-aawp-rank-text">Rank</span><span class="rr-t3-aawp-rank-number">#2</span>
							</div>
							<div class="rr-t3-aawp-product-title"><?php if ($newasin[1] != null) {
																		echo do_shortcode('[amazon fields="' . $newasin[1] . '" value="title"]') . '<br>';
																	} ?></div>
						</div>
					</a>
					<div>
						<?php if ($newasin[1] != null) {
							echo do_shortcode('[amazon fields="' . $newasin[1] . '" value="thumb"]') . '<br>';
						} ?>
					</div>
				</div>

				<div class="rr-t3-aawp-product-container">
					<a href="<?php if ($newasin[2] != null) {
									echo aawp_get_field_value($newasin[2], 'url');
								} ?>">

						<div class="rr-t3-aawp-rankbox">
							<div class="rr-t3-aawp-rankbox-count">
								<span class="rr-t3-aawp-rank-text">Rank</span><span class="rr-t3-aawp-rank-number">#3</span>
							</div>
							<div class="rr-t3-aawp-product-title"><?php if ($newasin[2] != null) {
																		echo do_shortcode('[amazon fields="' . $newasin[2] . '" value="title"]') . '<br>';
																	} ?></div>
						</div>
					</a>
					<div>
						<?php if ($newasin[2] != null) {
							echo do_shortcode('[amazon fields="' . $newasin[2] . '" value="thumb"]') . '<br>';
						} ?>
					</div>
				</div>
				<?php if ($newasin == null) {
					echo '<style>.rr-t3-aawp-rankbox-count { display:none;}</style>';
				} ?>
			</div>
		</div>
		<!-- END Of RR top 3  -->





		<!-- START OF CONDITIONAL LOGIC -->
		<?php
		$all_asins = get_field("list_all_asins");
		$new_asins = explode(",", $all_asins);
		$index = 1;
		$activate_custom = get_field("activate_custom_list_post");
		if (empty($activate_custom)) {
			foreach ($new_asins as $aawp_asin) {
		?>


				<!-- END OF CONDITIONAL LOGIC -->



				<!-- START OF ASIN LIST -->
				<div class="rr-ag-aawp-products switch-off2">
					<div class="rr-ag-aawp-product-container">


						<div class="rr-ag-aawp-thumbnail">
							<span class="rr-ag-aawp-rank-number"><?php echo "#" . $index++ ?></span>
							<?php if ($all_asins != null) {
								echo do_shortcode('[amazon fields="' . $aawp_asin . '" value="thumb" image_size="large" image_alt=""]');
							} ?>
						</div>


						<div class="rr-ag-center-box">
							<a href="<?php if ($all_asins != null) {
											echo aawp_get_field_value($aawp_asin, 'url'); ?>">
								<div class="rr-ag-title-container">
									<div class="rr-ag-aawp-product-title">

										<h2 class="rr-ag-aawp-title"><?php echo do_shortcode('[amazon fields="' . $aawp_asin . '" value="title" title_length="1000"]');
																	} ?></h2>
									</div>
								</div>
							</a>

							<div class="rr-ag-product-description">
								<?php if ($all_asins != null) {
									echo do_shortcode('[amazon fields="' . $aawp_asin . '" value="description" description_length="1000"]');
								} ?>
							</div>


							<div class="rr-button-container">
								<?php echo do_shortcode('[amazon fields="' . $aawp_asin . '" value="button" button_text="See on Amazon"]'); ?>
							</div>
						</div>
						<div>




						</div>
					</div>
					<!-- END OF ASIN LIST -->


				</div>

				<!-- BEGINNING Of MANUAL LIST -->
				<?php }
		}
		$list_repeater = get_field("list_product");

		if (!empty($activate_custom)) {
			if ($list_repeater) {
				foreach ($list_repeater as $product) {

					$single_asin = $product["list_asin"];
					$custom_rated = $product["list_rating"];
					$custom_title = $product["list_title"];
					$custom_image = $product["list_image"];
					$custom_description = $product["list_description"];
					$custom_features = $product["custom_features"];
					$custom_amazon_description = $product["custom_amazon_description"];
					$custom_comment_analysis = $product["custom_comment_analysis"];

				?>

					<div class="rr-mg-aawp-products">

						<div class="rr-ag-aawp-product-container">
							<btn class="close-button">Close<strong>&times</strong></btn>

							<div class="rr-ag-thumbnail-outter">
								<div class="rr-ag-aawp-thumbnail">
									<?php if (empty($custom_image)) {
										echo do_shortcode('[amazon fields="' . $single_asin . '" value="thumb" image_size="large"]');
									}
									if (!empty($custom_image)) { ?>
										<img src="<?php echo $custom_image; ?>">
									<?php } ?>
								</div>

							</div>




							<div class="rr-ag-center-box">
								<a href="<?php echo aawp_get_field_value($single_asin, 'url'); ?>">
									<div class="rr-ag-title-container">
										<div class="rr-ag-aawp-product-title">
											<span class="rr-ag-aawp-rank-number"><?php echo $index++ . ". " ?></span>
											<h2 class="rr-ag-aawp-title"><?php if (empty($custom_title)) {
																				echo do_shortcode('[amazon fields="' . $single_asin . '" value="title" title_length="1000"]');
																			}
																			if (!empty($custom_title)) {
																				echo $custom_title;
																			} ?></h2>

										</div>
										<div class="custom_rating"><?php echo $custom_rated ?></div>
									</div>
								</a>

								<div class="rr-ag-product-description">
									<?php if (empty($custom_description)) {
										echo do_shortcode('[amazon fields="' . $single_asin . '" value="description" description_length="1000"]');
									}
									if (!empty($custom_description)) {
										echo $custom_description;
									} ?>
								</div>

								<div class="rr-ag-product-expander">

									<p><?php
										if (!empty($custom_features)) {
											echo '<h3>Features:</h3>';
											echo $custom_features;
										} ?>
									</p>


									<p><?php
										if (!empty($custom_amazon_description)) {
											echo '<h3>AIDA:</h3>';
											echo  $custom_amazon_description;
										} ?>
									</p>




									<p><?php if (!empty($custom_comment_analysis)) {
											echo '<h3>Review Analysis:</h3>';
											echo $custom_comment_analysis;
										} ?>
									</p>

								</div>


								<div class="rr-button-container">
									<?php echo do_shortcode('[amazon fields="' . $single_asin . '" value="button" button_text="See on Amazon"]'); ?>
									<btn class="open_me2">Read More</btn>
								</div>

							</div>
						</div>
					</div>
		<?php }
			}
		} ?>
		<!-- END OF MANUAL LIST -->
	</div>

	<!-- START OF AUTO GEN ROUNDUP -->
	<div class="rr-best-sellers-autogen global_page_width global_page_padding switch-off3">
		<?php
		$term = get_the_title();
		$intro_check = get_field("intro");
		$item_count = get_field('item_count_list');
		if ($all_asins == null) {
			echo '<style>.switch-off2 { display:none;}</style>';
		}
		if ($single_asin != null) {
			echo '<style>.switch-off4 { display:none;}</style>';
		}
		if ($all_asins != null) {
			echo '<style>.switch-off3 { display:none;}</style>';
		}
		if ($single_asin != null) {
			echo '<style>.switch-off3 { display:none;}</style>';
		}
		if ($all_asins == null) {
			echo '<style>.rr-t3-aawp-product-container { display:none;}</style>';
		}
		if ($intro_check == null) {
			echo '<style>.intro_check { display:none;}</style>';
		}
		if ($all_asins == null && $activate_custom == null) {
			echo '<div class="amazon-bestseller">' . '<div>' . do_shortcode('[amazon bestseller="' . $term . '" items="' . $item_count . '"]') . '</div>' . '</div>';
		} ?>
		<!-- END OF AUTO GEN ROUNDUP -->
	</div>


	<div class="slider-section global_page_width">
		<h2>You may also like the following.</h2>

		<?php  //add me in

		//Fields

		//slider_portfolio = Gallery Field
		// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




		$all_asins_1 = get_field('slider_portfolio');
		$new_asins_1 = explode(",", $all_asins_1);


		if ($all_asins_1) : ?>

			<div class="slider-for">


				<?php foreach ($new_asins_1 as $asin_1) : ?>
					<div class="slick-container">


					</div>
				<?php endforeach; ?>
			</div>
			<div class="slider-nav">

				<?php foreach ($new_asins_1 as $asin_1) : ?>


					<div class="alsoLike">
						<div class="slider-thumbnail">
							<?php echo do_shortcode('[amazon fields="' . $asin_1 . '" value="thumb" image_size="large" image_alt=""]'); ?>
						</div>



						<div class="x1">





							<a href="<?php echo aawp_get_field_value($asin_1, 'url'); ?>">
								<h2 class="x2">

									<?php echo do_shortcode('[amazon fields="' . $asin_1 . '" value="title" title_length="1000"]');
									?></h2>
							</a>

						</div>
					</div>


				<?php endforeach; ?>
			</div>
		<?php endif;

		?>
	</div>
</section>








<!-- START OF PRODUCT INFO SECTION -->
<div class="product_info_section global_page_width">
	<?php

	$title = get_the_title();
	$terms = get_terms('link_hub_taxonomy');
	$choose_linkhub = get_field('choose_linkhub');
	$index = 1;
	$info = 900;
	$buyers = 1000;
	$faqsindex = 1100;
	$info_article = get_field('info_article');
	$buyers_guide = get_field('buyers_guide');
	$faqs = get_field('faqs');

	arsort($terms);


	if (!empty($buyers_guide)) {
		echo "<section class='rr-accordion-section'>";

		echo '<div class="rr-accordion-container">';
		echo '<p onclick="toggle_block(' . $buyers . ')" class="rr-heading">Buyer&#39;s Guide' . '</p>';
		echo '<div id="' . $buyers . '" class="rr-accordion-content onecol">' . $buyers_guide . "</div>";
		echo '</div>';

		echo "</section>";
	}


	if (!empty($faqs)) {
		echo "<section class='rr-accordion-section'>";

		echo '<div class="rr-accordion-container">';
		echo '<p onclick="toggle_block(' . $faqsindex . ')" class="rr-heading">FAQs' . '</p>';
		echo '<div id="' . $faqsindex . '" class="rr-accordion-content onecol">' . $faqs . "</div>";
		echo '</div>';

		echo "</section>";
	}



	if (!empty($info_article)) {
		echo "<section class='rr-accordion-section'>";

		echo '<div class="rr-accordion-container">';
		echo '<p onclick="toggle_block(' . $info . ')" class="rr-heading">' . 'Additional Information</p>';
		echo '<div id="' . $info . '" class="rr-accordion-content onecol">' . $info_article . "</div>";
		echo '</div>';

		echo "</section>";
	}



	if (!empty($choose_linkhub)) {
		echo "<section class='rr-accordion-section' style='padding: 35px 0 75px 0'>";
		foreach ($choose_linkhub as $choice) {
			foreach ($terms as $term) {
				if ($choice->name == $term->name) {
					arsort($choose_linkhub);
					echo '<div class="rr-linkhub-container">';
					echo '<p onclick="toggle_flex(' . $index . ')" class="rr-heading">' . $term->name . '</p>';
					$linkhub_posts = array(
						'posts_per_page' => -1,
						'post_type' => array('top-picks', 'best-reviews', 'best'),
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
					echo '<div id="' . $index . '" class="rr-posts-container">';
					foreach ($posts as $post) {
						echo "<div class='rr-link-container'><a class='rr-link' href='" . get_permalink($post) . "'>" . $post->post_title . "</a></div>";
					}
					echo '</div>';
					echo '</div>';
					echo '<div style="display: none;">' . $index++ . '</div>';
				}
			}
		}
		echo "</section>";
	}

	?>
</div>
<!-- END OF PRODUCT INFO SECTION -->



<script type="text/javascript">
	(function(d) {
		var f = d.getElementsByTagName('SCRIPT')[0],
			p = d.createElement('SCRIPT');
		p.type = 'text/javascript';
		p.async = true;
		p.src = '//assets.pinterest.com/js/pinit.js';
		f.parentNode.insertBefore(p, f);
	})(document);
</script>


<?php get_footer(); ?>