<!DOCTYPE html>
<html>
    <head>
    <?php wp_head(); ?>
    <?php do_action("my_custom_metatags");?>  
    

    </head>
    <body>
        <div class="header">
            <div class="header_div global_page_width">
        <div class="header_column_1">
            <div class="h">
                <img src="https://staging-powerboatcentre.kinsta.cloud/wp-content/uploads/2021/09/Power-Boat-Centre-logo-copy.png">

            </div>
        </div>
        <div class="header_column_2">
            <div class="header_column_2_navigationDiv">
            <?php

wp_nav_menu( array( 
'theme_location' => 'headerMenuLocation', 
'container_class' => 'test' ) );
?>
 



            </div>
            </div>
       </div>
        
    </body>
</html>