<div class=footer>
    <div class="footer_div global_page_width">
        <div><?php

wp_nav_menu( array( 
'theme_location' => 'headerFooterLocation1', 
'container_class' => 'footer-1') );

?>
 </div>
        <div><?php

wp_nav_menu( array( 
'theme_location' => 'headerFooterLocation2', 
'container_class' => 'footer-2') );

?>
 </div>
        <div><?php

wp_nav_menu( array( 
'theme_location' => 'headerFooterLocation3', 
'container_class' => 'footer-links') );

?>
 </div>
        <div><?php

wp_nav_menu( array( 
'theme_location' => 'headerFooterLocation4', 
'container_class' => 'footer-links') );

?>
 </div>
        <div><?php

wp_nav_menu( array( 
'theme_location' => 'headerFooterLocation5', 
'container_class' => 'footer-links') );

?>
 </div>


    </div>
</div>      
    



<?php wp_footer(); ?>
</body>
</html>