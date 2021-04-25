// Custom function used to generate the output of the override css file; its content is appended to the end of the file.

var generateOverride = function (params) {
    let output = '';

    // check that the values of the following options (defined in config.json in customConfig section) are the same as those in the main.css file, if so, do not generate the override of this CSS rules
    if (
       params.mainWidth !== '860px' ||
       params.sidebarWidth !== '300px') {
       output += `
       :root {
          --main-width:   ${params.mainWidth};
          --sidebar-width:  ${params.sidebarWidth};
        }`;
   }   
   // TODO: blankly pasted into visual override - use variables of configuration
   output += `
.hestia-top-bar, .hestia-top-bar .widget.widget_shopping_cart .cart_list {
         background-color: #363537
      }
      .hestia-top-bar .widget .label-floating input[type=search]:-webkit-autofill {
         -webkit-box-shadow: inset 0 0 0px 9999px #363537
      }.hestia-top-bar, .hestia-top-bar .widget .label-floating input[type=search], .hestia-top-bar .widget.widget_search form.form-group:before, .hestia-top-bar .widget.widget_product_search form.form-group:before, .hestia-top-bar .widget.widget_shopping_cart:before {
         color: #ffffff
      } 
      .hestia-top-bar .widget .label-floating input[type=search]{
         -webkit-text-fill-color:#ffffff !important 
      }
      .hestia-top-bar div.widget.widget_shopping_cart:before, .hestia-top-bar .widget.widget_product_search form.form-group:before, .hestia-top-bar .widget.widget_search form.form-group:before{
         background-color: #ffffff
      }.hestia-top-bar a, .hestia-top-bar .top-bar-nav li a {
         color: #ffffff
      }
      .hestia-top-bar ul li a[href*="mailto:"]:before, .hestia-top-bar ul li a[href*="tel:"]:before{
         background-color: #ffffff
      }
      .hestia-top-bar a:hover, .hestia-top-bar .top-bar-nav li a:hover {
         color: #eeeeee
      }
      .hestia-top-bar ul li:hover a[href*="mailto:"]:before, .hestia-top-bar ul li:hover a[href*="tel:"]:before{
         background-color: #eeeeee
      }
      

      a,
      .navbar .dropdown-menu li:hover > a,
      .navbar .dropdown-menu li:focus > a,
      .navbar .dropdown-menu li:active > a,
      .navbar .navbar-nav > li .dropdown-menu li:hover > a,
      body:not(.home) .navbar-default .navbar-nav > .active:not(.btn) > a,
      body:not(.home) .navbar-default .navbar-nav > .active:not(.btn) > a:hover,
      body:not(.home) .navbar-default .navbar-nav > .active:not(.btn) > a:focus,
      a:hover,
      .card-blog a.moretag:hover,
      .card-blog a.more-link:hover,
      .widget a:hover,
      .has-text-color.has-accent-color,
      p.has-text-color a {
         color:#e91e63;
      }
      
      .svg-text-color{
         fill:#e91e63;
      }
      
      .pagination span.current, .pagination span.current:focus, .pagination span.current:hover {
         border-color:#e91e63
      }
      
      button,
      button:hover,
      .woocommerce .track_order button[type="submit"],
      .woocommerce .track_order button[type="submit"]:hover,
      div.wpforms-container .wpforms-form button[type=submit].wpforms-submit,
      div.wpforms-container .wpforms-form button[type=submit].wpforms-submit:hover,
      input[type="button"],
      input[type="button"]:hover,
      input[type="submit"],
      input[type="submit"]:hover,
      input#searchsubmit,
      .pagination span.current,
      .pagination span.current:focus,
      .pagination span.current:hover,
      .btn.btn-primary,
      .btn.btn-primary:link,
      .btn.btn-primary:hover,
      .btn.btn-primary:focus,
      .btn.btn-primary:active,
      .btn.btn-primary.active,
      .btn.btn-primary.active:focus,
      .btn.btn-primary.active:hover,
      .btn.btn-primary:active:hover,
      .btn.btn-primary:active:focus,
      .btn.btn-primary:active:hover,
      .hestia-sidebar-open.btn.btn-rose,
      .hestia-sidebar-close.btn.btn-rose,
      .hestia-sidebar-open.btn.btn-rose:hover,
      .hestia-sidebar-close.btn.btn-rose:hover,
      .hestia-sidebar-open.btn.btn-rose:focus,
      .hestia-sidebar-close.btn.btn-rose:focus,
      .label.label-primary,
      .hestia-work .portfolio-item:nth-child(6n+1) .label,
      .nav-cart .nav-cart-content .widget .buttons .button,
      .has-accent-background-color[class*="has-background"] {
         background-color: #e91e63;
      }
      
      @media (max-width: 768px) {
   
         .navbar-default .navbar-nav>li>a:hover,
         .navbar-default .navbar-nav>li>a:focus,
         .navbar .navbar-nav .dropdown .dropdown-menu li a:hover,
         .navbar .navbar-nav .dropdown .dropdown-menu li a:focus,
         .navbar button.navbar-toggle:hover,
         .navbar .navbar-nav li:hover > a i {
            color: #e91e63;
         }
      }
      
      body:not(.woocommerce-page) button:not([class^="fl-"]):not(.hestia-scroll-to-top):not(.navbar-toggle):not(.close),
      body:not(.woocommerce-page) .button:not([class^="fl-"]):not(hestia-scroll-to-top):not(.navbar-toggle):not(.add_to_cart_button):not(.product_type_grouped):not(.product_type_external),
      div.wpforms-container .wpforms-form button[type=submit].wpforms-submit,
      input[type="submit"],
      input[type="button"],
      .btn.btn-primary,
      .widget_product_search button[type="submit"],
      .hestia-sidebar-open.btn.btn-rose,
      .hestia-sidebar-close.btn.btn-rose,
      .everest-forms button[type=submit].everest-forms-submit-button {
         -webkit-box-shadow: 0 2px 2px 0 rgba(233,30,99,0.14),0 3px 1px -2px rgba(233,30,99,0.2),0 1px 5px 0 rgba(233,30,99,0.12);
         box-shadow: 0 2px 2px 0 rgba(233,30,99,0.14),0 3px 1px -2px rgba(233,30,99,0.2),0 1px 5px 0 rgba(233,30,99,0.12);
      }
      
      .card .header-primary, .card .content-primary,
      .everest-forms button[type=submit].everest-forms-submit-button {
         background: #e91e63;
      }
      
      body:not(.woocommerce-page) .button:not([class^="fl-"]):not(.hestia-scroll-to-top):not(.navbar-toggle):not(.add_to_cart_button):hover,
      body:not(.woocommerce-page) button:not([class^="fl-"]):not(.hestia-scroll-to-top):not(.navbar-toggle):not(.close):hover,
      div.wpforms-container .wpforms-form button[type=submit].wpforms-submit:hover,
      input[type="submit"]:hover,
      input[type="button"]:hover,
      input#searchsubmit:hover,
      .widget_product_search button[type="submit"]:hover,
      .pagination span.current,
      .btn.btn-primary:hover,
      .btn.btn-primary:focus,
      .btn.btn-primary:active,
      .btn.btn-primary.active,
      .btn.btn-primary:active:focus,
      .btn.btn-primary:active:hover,
      .hestia-sidebar-open.btn.btn-rose:hover,
      .hestia-sidebar-close.btn.btn-rose:hover,
      .pagination span.current:hover,
      .everest-forms button[type=submit].everest-forms-submit-button:hover,
      .everest-forms button[type=submit].everest-forms-submit-button:focus,
      .everest-forms button[type=submit].everest-forms-submit-button:active {
         -webkit-box-shadow: 0 14px 26px -12px rgba(233,30,99,0.42),0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(233,30,99,0.2);
         box-shadow: 0 14px 26px -12px rgba(233,30,99,0.42),0 4px 23px 0 rgba(0,0,0,0.12),0 8px 10px -5px rgba(233,30,99,0.2);
         color: #fff;
      }
      
      .form-group.is-focused .form-control {
         background-image: -webkit-gradient(linear,left top, left bottom,from(#e91e63),to(#e91e63)),-webkit-gradient(linear,left top, left bottom,from(#d2d2d2),to(#d2d2d2));
         background-image: -webkit-linear-gradient(linear,left top, left bottom,from(#e91e63),to(#e91e63)),-webkit-linear-gradient(linear,left top, left bottom,from(#d2d2d2),to(#d2d2d2));
         background-image: linear-gradient(linear,left top, left bottom,from(#e91e63),to(#e91e63)),linear-gradient(linear,left top, left bottom,from(#d2d2d2),to(#d2d2d2));
      }
      
      .navbar:not(.navbar-transparent) li:not(.btn):hover > a,
      .navbar li.on-section:not(.btn) > a,
      .navbar.full-screen-menu.navbar-transparent li:not(.btn):hover > a,
      .navbar.full-screen-menu .navbar-toggle:hover,
      .navbar:not(.navbar-transparent) .nav-cart:hover,
      .navbar:not(.navbar-transparent) .hestia-toggle-search:hover {
            color:#e91e63
      }
      
         .header-filter-gradient {
            background: linear-gradient(45deg, rgba(168,29,132,1) 0%, rgb(234,57,111) 100%);
         }
         .has-text-color.has-header-gradient-color { color: #a81d84; }
         .has-header-gradient-background-color[class*="has-background"] { background-color: #a81d84; }
         
      .has-text-color.has-background-color-color { color: #E5E5E5; }
      .has-background-color-background-color[class*="has-background"] { background-color: #E5E5E5; }
      
.btn.btn-primary:not(.colored-button):not(.btn-left):not(.btn-right):not(.btn-just-icon):not(.menu-item), input[type="submit"]:not(.search-submit), body:not(.woocommerce-account) .woocommerce .button.woocommerce-Button, .woocommerce .product button.button, .woocommerce .product button.button.alt, .woocommerce .product #respond input#submit, .woocommerce-cart .blog-post .woocommerce .cart-collaterals .cart_totals .checkout-button, .woocommerce-checkout #payment #place_order, .woocommerce-account.woocommerce-page button.button, .woocommerce .track_order button[type="submit"], .nav-cart .nav-cart-content .widget .buttons .button, .woocommerce a.button.wc-backward, body.woocommerce .wccm-catalog-item a.button, body.woocommerce a.wccm-button.button, form.woocommerce-form-coupon button.button, div.wpforms-container .wpforms-form button[type=submit].wpforms-submit, div.woocommerce a.button.alt, div.woocommerce table.my_account_orders .button, .btn.colored-button, .btn.btn-left, .btn.btn-right, .btn:not(.colored-button):not(.btn-left):not(.btn-right):not(.btn-just-icon):not(.menu-item):not(.hestia-sidebar-open):not(.hestia-sidebar-close){ padding-top:15px;  padding-bottom:15px;  padding-left:33px;  padding-right:33px; }
.btn.btn-primary:not(.colored-button):not(.btn-left):not(.btn-right):not(.btn-just-icon):not(.menu-item), input[type="submit"]:not(.search-submit), body:not(.woocommerce-account) .woocommerce .button.woocommerce-Button, .woocommerce .product button.button, .woocommerce .product button.button.alt, .woocommerce .product #respond input#submit, .woocommerce-cart .blog-post .woocommerce .cart-collaterals .cart_totals .checkout-button, .woocommerce-checkout #payment #place_order, .woocommerce-account.woocommerce-page button.button, .woocommerce .track_order button[type="submit"], .nav-cart .nav-cart-content .widget .buttons .button, .woocommerce a.button.wc-backward, body.woocommerce .wccm-catalog-item a.button, body.woocommerce a.wccm-button.button, form.woocommerce-form-coupon button.button, div.wpforms-container .wpforms-form button[type=submit].wpforms-submit, div.woocommerce a.button.alt, div.woocommerce table.my_account_orders .button, input[type="submit"].search-submit, .hestia-view-cart-wrapper .added_to_cart.wc-forward, .woocommerce-product-search button, .woocommerce-cart .actions .button, #secondary div[id^=woocommerce_price_filter] .button, .woocommerce div[id^=woocommerce_widget_cart].widget .buttons .button, .searchform input[type=submit], .searchform button, .search-form:not(.media-toolbar-primary) input[type=submit], .search-form:not(.media-toolbar-primary) button, .woocommerce-product-search input[type=submit], .btn.colored-button, .btn.btn-left, .btn.btn-right, .btn:not(.colored-button):not(.btn-left):not(.btn-right):not(.btn-just-icon):not(.menu-item):not(.hestia-sidebar-open):not(.hestia-sidebar-close){border-radius:3px;}
@media (min-width: 769px){
         .page-header.header-small .hestia-title,
         .page-header.header-small .title,
         h1.hestia-title.title-in-content,
         .main article.section .has-title-font-size {
            font-size: 42px;
         }}

      .page-template-builder-fullwidth-std .header > .elementor {
         padding-top: 70px;
      }
   `;
    
    return output;
}

module.exports = generateOverride;
