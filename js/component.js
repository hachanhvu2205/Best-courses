const components = {};
components.indexScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/ken-burns.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/owl.carousel.css" rel="stylesheet" type="text/css" media="all">
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/owl.carousel.js"></script>
    <script>
        $(document).ready(function() {
            $("#owl-demo").owlCarousel({
                autoPlay: 3000,
                items: 4,
                itemsDesktop: [640, 5],
                itemsDesktopSmall: [480, 2],
                navigation: true

            });
        });
    </script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();
            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
    <script src="js/bootstrap.js"></script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>


                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <!-- <a href="#">Math</a> -->
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a >Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class="banner">
        <div id="kb" class="carousel kb_elastic animate_text kb_wrapper" data-ride="carousel" data-interval="6000" data-pause="hover">
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <!-- First-Slide -->
                    <img src="images/5.jpg" alt="" class="img-responsive" />
                    <div class="carousel-caption kb_caption kb_caption_right">
                        <h3 data-animation="animated flipInX">Offer <span>30%-50%</span> Discount</h3>
                        <h4 data-animation="animated flipInX">For new students </h4>
                    </div>
                </div>
                <div class="item">
                    <!-- Second-Slide -->
                    <img src="images/8.jpg" alt="" class="img-responsive" />
                    <div class="carousel-caption kb_caption kb_caption_right">
                        <h3 data-animation="animated fadeInDown">Latest online lessons</h3>
                        <h4 data-animation="animated fadeInUp">Updated everytime</h4>
                    </div>
                </div>
                <div class="item">
                    <!-- Third-Slide -->
                    <img src="images/3.jpg" alt="" class="img-responsive" />
                    <div class="carousel-caption kb_caption kb_caption_center">
                        <h3 data-animation="animated fadeInLeft">Online tests available</h3>
                        <h4 data-animation="animated flipInX">Marked by top teachers</h4>
                    </div>
                </div>
            </div>
            <!-- Left-Button -->
            <a class="left carousel-control kb_control_left" href="#kb" role="button" data-slide="prev">
                <span class="fa fa-angle-left kb_icons" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <!-- Right-Button -->
            <a class="right carousel-control kb_control_right" href="#kb" role="button" data-slide="next">
                <span class="fa fa-angle-right kb_icons" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <script src="js/custom.js"></script>
    </div>
    <!-- //banner -->
    <!-- welcome -->
    <div class="welcome">
        <div class="container">
            <div class="welcome-info">
                <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">

                    <div class="clearfix"> </div>
                    <h3 class="w3ls-title">Featured Products</h3>
                    <div id="myTabContent" class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
                            <div class="tabcontent-grids">
                                <div id="owl-demo" class="owl-carousel">
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products.html"><img src="images/e1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Audio speaker</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$100</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Audio speaker" />
                                                    <input type="hidden" name="amount" value="100.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products.html"><img src="images/e2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Refrigerator</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$300</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Refrigerator" />
                                                    <input type="hidden" name="amount" value="300.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products.html"><img src="images/e3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Smart Phone</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$70</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Smart Phone" />
                                                    <input type="hidden" name="amount" value="70.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products.html"><img src="images/e4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Digital Camera</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Digital Camera" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products.html"><img src="images/e1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Audio speaker</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$100</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Audio speaker" />
                                                    <input type="hidden" name="amount" value="100.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products.html"><img src="images/e2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Refrigerator</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$300</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Refrigerator" />
                                                    <input type="hidden" name="amount" value="300.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products.html"><img src="images/e3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Smart Phone</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$70</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Smart Phone" />
                                                    <input type="hidden" name="amount" value="70.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products.html"><img src="images/e4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products.html">Digital Camera</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Digital Camera" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="carl" aria-labelledby="carl-tab">
                            <div class="tabcontent-grids">
                                <script>
                                    $(document).ready(function() {
                                        $("#owl-demo1").owlCarousel({

                                            autoPlay: 3000,

                                            items: 4,
                                            itemsDesktop: [640, 5],
                                            itemsDesktopSmall: [414, 4],
                                            navigation: true

                                        });

                                    });
                                </script>
                                <div id="owl-demo1" class="owl-carousel">
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products1.html"><img src="images/f1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">T Shirt</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$10</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="T Shirt" />
                                                    <input type="hidden" name="amount" value="10.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br> Off</h6>
                                            </div>
                                            <a href="products1.html"><img src="images/f2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Women Sandal</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$20</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Women Sandal" />
                                                    <input type="hidden" name="amount" value="20.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products1.html"><img src="images/f3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Jewellery</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$60</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Jewellery" />
                                                    <input type="hidden" name="amount" value="60.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products1.html"><img src="images/f4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Party dress</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$15</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Party dress" />
                                                    <input type="hidden" name="amount" value="15.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products1.html"><img src="images/f1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">T Shirt</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$10</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="T Shirt" />
                                                    <input type="hidden" name="amount" value="10.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br> Off</h6>
                                            </div>
                                            <a href="products1.html"><img src="images/f2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Women Sandal</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$20</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Women Sandal" />
                                                    <input type="hidden" name="amount" value="20.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products1.html"><img src="images/f3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Jewellery</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$60</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Jewellery" />
                                                    <input type="hidden" name="amount" value="60.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products1.html"><img src="images/f4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products1.html">Party dress</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$15</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Party dress" />
                                                    <input type="hidden" name="amount" value="15.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="james" aria-labelledby="james-tab">
                            <div class="tabcontent-grids">
                                <script>
                                    $(document).ready(function() {
                                        $("#owl-demo2").owlCarousel({

                                            autoPlay: 3000,

                                            items: 4,
                                            itemsDesktop: [640, 5],
                                            itemsDesktopSmall: [414, 4],
                                            navigation: true

                                        });

                                    });
                                </script>
                                <div id="owl-demo2" class="owl-carousel">
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Coffee Mug</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$14</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Coffee Mug" />
                                                    <input type="hidden" name="amount" value="14.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br> Off</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Teddy bear</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$20</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Teddy bear" />
                                                    <input type="hidden" name="amount" value="20.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Chocolates</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$60</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Chocolates" />
                                                    <input type="hidden" name="amount" value="60.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products6.html"><img src="images/p4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Gift Card</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$22</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Gift Card" />
                                                    <input type="hidden" name="amount" value="22.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Coffee Mug</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$14</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Coffee Mug" />
                                                    <input type="hidden" name="amount" value="14.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br> Off</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Teddy bear</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$20</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Teddy bear" />
                                                    <input type="hidden" name="amount" value="20.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products6.html"><img src="images/p3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Chocolates</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$60</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Chocolates" />
                                                    <input type="hidden" name="amount" value="60.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products6.html"><img src="images/p4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products6.html">Gift Card</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$22</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Gift Card" />
                                                    <input type="hidden" name="amount" value="22.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="decor" aria-labelledby="decor-tab">
                            <div class="tabcontent-grids">
                                <script>
                                    $(document).ready(function() {
                                        $("#owl-demo3").owlCarousel({

                                            autoPlay: 3000,

                                            items: 4,
                                            itemsDesktop: [640, 5],
                                            itemsDesktopSmall: [414, 4],
                                            navigation: true

                                        });

                                    });
                                </script>
                                <div id="owl-demo3" class="owl-carousel">
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products3.html"><img src="images/h1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Wall Clock</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Wall Clock" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>10%<br>Off</h6>
                                            </div>
                                            <a href="products3.html"><img src="images/h2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Plants & Vases</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$40</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Plants & Vases" />
                                                    <input type="hidden" name="amount" value="40.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products3.html"><img src="images/h3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Queen Size Bed</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$250</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Queen Size Bed" />
                                                    <input type="hidden" name="amount" value="250.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products3.html"><img src="images/h4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">flower pot</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$30</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="flower pot" />
                                                    <input type="hidden" name="amount" value="30.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>Sale</h6>
                                            </div>
                                            <a href="products3.html"><img src="images/h1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Wall Clock</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Wall Clock" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>10%<br>Off</h6>
                                            </div>
                                            <a href="products3.html"><img src="images/h2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Plants & Vases</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$40</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Plants & Vases" />
                                                    <input type="hidden" name="amount" value="40.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products3.html"><img src="images/h3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">Queen Size Bed</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$250</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Queen Size Bed" />
                                                    <input type="hidden" name="amount" value="250.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products3.html"><img src="images/h4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products3.html">flower pot</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$30</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="flower pot" />
                                                    <input type="hidden" name="amount" value="30.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="sports" aria-labelledby="sports-tab">
                            <div class="tabcontent-grids">
                                <script>
                                    $(document).ready(function() {
                                        $("#owl-demo4").owlCarousel({

                                            autoPlay: 3000, //Set AutoPlay to 3 seconds

                                            items: 4,
                                            itemsDesktop: [640, 5],
                                            itemsDesktopSmall: [414, 4],
                                            navigation: true

                                        });
                                    });
                                </script>
                                <div id="owl-demo4" class="owl-carousel">
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products4.html"><img src="images/s1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Roller Skates</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$180</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Roller Skates" />
                                                    <input type="hidden" name="amount" value="180.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products4.html"><img src="images/s2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Football</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$70</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Football" />
                                                    <input type="hidden" name="amount" value="70.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br>Off</h6>
                                            </div>
                                            <a href="products4.html"><img src="images/s3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Nylon Shuttle</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$56</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Nylon Shuttle" />
                                                    <input type="hidden" name="amount" value="56.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products4.html"><img src="images/s4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Cricket Kit</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Cricket Kit" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>New</h6>
                                            </div>
                                            <a href="products4.html"><img src="images/s1.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Roller Skates</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$180</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Roller Skates" />
                                                    <input type="hidden" name="amount" value="180.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products4.html"><img src="images/s2.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Football</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$70</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Football" />
                                                    <input type="hidden" name="amount" value="70.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <div class="new-tag">
                                                <h6>20% <br>Off</h6>
                                            </div>
                                            <a href="products4.html"><img src="images/s3.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Nylon Shuttle</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$56</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Nylon Shuttle" />
                                                    <input type="hidden" name="amount" value="56.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="glry-w3agile-grids agileits">
                                            <a href="products4.html"><img src="images/s4.png" alt="img"></a>
                                            <div class="view-caption agileits-w3layouts">
                                                <h4><a href="products4.html">Cricket Kit</a></h4>
                                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                                <h5>$80</h5>
                                                <form action="#" method="post">
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="w3ls_item" value="Cricket Kit" />
                                                    <input type="hidden" name="amount" value="80.00" />
                                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //welcome -->
    <!-- add-products -->
    <div class="add-products">
        <div class="container">
            <div class="add-products-row">
                <div class="w3ls-add-grids">
                    <a href="products1.html">
                        <h4></h4>
                    </a>
                </div>
                <div class="w3ls-add-grids w3ls-add-grids-mdl">
                    <a href="products1.html">
                        <h4></h4>

                    </a>
                </div>
                <div class="w3ls-add-grids w3ls-add-grids-mdl1">
                    <a href="products.html">
                        <h4></h4>
                    </a>
                </div>
                <div class="clerfix"> </div>
            </div>
        </div>
    </div>
    <div class="soon">
        <div class="container">
            <h3>End of the year tests</h3>
            <h4>Comming soon</h4>
            <div id="countdown1" class="ClassyCountdownDemo"></div>
        </div>
    </div>

    <div class="deals">
        <div class="container">
            <h3 class="w3ls-title">S</h3>
            <div class="deals-row">
                <div class="col-md-3 focus-grid">
                    <a href="products.html" class="wthree-btn">
                        <div class="focus-image"><i class="fa fa-calculator" aria-hidden="true"></i></div>
                        <h4 class="clrchg">Math</h4>
                    </a>
                </div>
                <div class="col-md-3 focus-grid">
                    <a href="products.html" class="wthree-btn wthree1">
                        <div class="focus-image"><i class="fa fa-binoculars" aria-hidden="true"></i></div>
                        <h4 class="clrchg"> Physics</h4>
                    </a>
                </div>
                <div class="col-md-3 focus-grid">
                    <a href="products4.html" class="wthree-btn wthree2">
                        <div class="focus-image"><i class="fa fa-flask" aria-hidden="true"></i></div>
                        <h4 class="clrchg">Chemistry</h4>
                    </a>
                </div>
                <div class="col-md-3 focus-grid">
                    <a href="products3.html" class="wthree-btn wthree3">
                        <div class="focus-image"><i class="fa fa-comments-o" aria-hidden="true"></i></div>
                        <h4 class="clrchg">English</h4>
                    </a>
                </div>
                <div class="col-md-2 focus-grid w3focus-grid-mdl">
                    <a href="products9.html" class="wthree-btn wthree3">
                        <div class="focus-image"><i class="fa fa-laptop" aria-hidden="true"></i></div>
                        <h4 class="clrchg">Computer Science</h4>
                    </a>
                </div>
                <div class="col-md-2 focus-grid w3focus-grid-mdl">
                    <a href="products1.html" class="wthree-btn wthree4">
                        <div class="focus-image"><i class="fa fa-asterisk"></i></div>
                        <h4 class="clrchg">Biology</h4>
                    </a>
                </div>
                <div class="col-md-2 focus-grid w3focus-grid-mdl">
                    <a href="products2.html" class="wthree-btn wthree2">
                        <div class="focus-image"><i class="fa fa-book" aria-hidden="true"></i></div>
                        <h4 class="clrchg">History</h4>
                    </a>
                </div>
                <div class="col-md-2 focus-grid w3focus-grid-mdl">
                    <a href="products5.html" class="wthree-btn wthree">
                        <div class="focus-image"><i class="fa fa-map" aria-hidden="true"></i></div>
                        <h4 class="clrchg">Geography</h4>
                    </a>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //deals -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <script src="js/jquery.knob.js"></script>
    <script src="js/jquery.throttle.js"></script>
    <script src="js/jquery.classycountdown.js"></script>
    <script>
        $(document).ready(function() {
            $('#countdown1').ClassyCountdown({
                end: '1388268325',
                now: '1387999995',
                labels: true,
                style: {
                    element: "",
                    textResponsive: .5,
                    days: {
                        gauge: {
                            thickness: .10,
                            bgColor: "rgba(0,0,0,0)",
                            fgColor: "#1abc9c",
                            lineCap: 'round'
                        },
                        textCSS: 'font-weight:300; color:#fff;'
                    },
                    hours: {
                        gauge: {
                            thickness: .10,
                            bgColor: "rgba(0,0,0,0)",
                            fgColor: "#05BEF6",
                            lineCap: 'round'
                        },
                        textCSS: ' font-weight:300; color:#fff;'
                    },
                    minutes: {
                        gauge: {
                            thickness: .10,
                            bgColor: "rgba(0,0,0,0)",
                            fgColor: "#8e44ad",
                            lineCap: 'round'
                        },
                        textCSS: ' font-weight:300; color:#fff;'
                    },
                    seconds: {
                        gauge: {
                            thickness: .10,
                            bgColor: "rgba(0,0,0,0)",
                            fgColor: "#f39c12",
                            lineCap: 'round'
                        },
                        textCSS: ' font-weight:300; color:#fff;'
                    }

                },
                onEndCallback: function() {
                    console.log("Time out!");
                }
            });
        });
    </script>

    <script src="js/jquery.menu-aim.js">
    </script>

    <script src="js/main.js"></script>
</body>

</html>`
components.aboutScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>

</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class="about">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">About our company</h3>
            <div class="about-text">
                <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque
                    sed feugiat sapien. ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec
                    tristique.
                </p>
                <div class="col-md-3 ftr-top-left about-text-grids">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    <h4>50 000 <br>Online lessons</h4>
                </div>
                <div class="col-md-3 ftr-top-left about-text-grids">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <h4>50,000 <br> Students </h4>
                </div>
                <div class="col-md-3 ftr-top-left about-text-grids">
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                    <h4>69000 <br>Banks connected</h4>
                </div>
                <div class="col-md-3 ftr-top-left about-text-grids">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <h4>96 <br>Cities</h4>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="history">
                <h3 class="w3ls-title">Our Mission</h3>
                <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque
                    sed feugiat sapien. ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec
                    tristique.
                </p>
                <h3 class="w3ls-title">Our History</h3>
                <p>Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. In semper lorem eget tortor pulvinar ultricies. Nulla sodales efficitur consequat. Maecenas mi diam, imperdiet consectetur ultricies nec, convallis sit amet turpis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque sed feugiat sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ultrices. Pellentesque
                    sed feugiat sapien. ullamcorper nunc. Aenean eget massa orci. Vivamus vulputate elit at rutrum elementum. Duis sit amet posuere justo, sit amet finibus urna. Aenean elementum diam nec laoreet sodales. Morbi vulputate tempor nisl nec
                    tristique.
                </p>
            </div>
        </div>
    </div>
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>

    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.contactScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <!-- header -->
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- contact-page -->
    <div class="contact">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Contact Us</h3>
            <div class="map-info">
                <div class="col-md-6 map-grids">
                    <h4>Ha noi</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238368.3037297639!2d105.80400407145132!3d21.012480605876164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2k!5e0!3m2!1sen!2s!4v1593251679258!5m2!1sen!2s">  </iframe>
                </div>
                <div class="col-md-6 map-grids">
                    <h4>Da Nang</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009614!2d108.17168636744822!3d16.047165906889507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2sDa%20Nang%2C%20H%E1%BA%A3i%20Ch%C3%A2u%20District%2C%20Da%20Nang%2C%20Vietnam!5e0!3m2!1sen!2s!4v1593251795296!5m2!1sen!2s"></iframe>
                </div>
                <div class="col-md-6 map-grids">
                    <h4>Hue</h4>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122445.99455445845!2d107.50707231120967!3d16.453378821079067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a115e1a7935f%3A0xbf3b50af70b5c7b7!2sHu%E1%BA%BF%2C%20Thua%20Thien%20Hue%2C%20Vietnam!5e0!3m2!1sen!2s!4v1593252186679!5m2!1sen!2s"></iframe>
                </div>
                <div class="col-md-6 map-grids">
                    <h4>Ho Chi Minh city</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.4604633834!2d106.41502554546811!3d10.754666391425813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1593252252474!5m2!1sen!2s"></iframe>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="contact-form-row">
                <h3 class="w3ls-title w3ls-title1">Drop Us a line</h3>
                <div class="col-md-7 contact-left">
                    <form action="#" method="post">
                        <input type="text" name="Name" placeholder="Name" required="">
                        <input class="email" type="text" name="Email" placeholder="Email" required="">
                        <textarea placeholder="Message" name="Message" required=""></textarea>
                        <input type="submit" value="SUBMIT">
                    </form>
                </div>
                <div class="col-md-4 contact-right">
                    <div class="cnt-w3agile-row">
                        <div class="col-md-3 contact-w3icon">
                            <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9 contact-w3text">
                            <p>Manage Your class <br>Easily Track Course </p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="cnt-w3agile-row cnt-w3agile-row-mdl">
                        <div class="col-md-3 contact-w3icon">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9 contact-w3text">
                            <p>Notifications <br>Get Relevant Alerts & Recommendations</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="cnt-w3agile-row">
                        <div class="col-md-3 contact-w3icon">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9 contact-w3text">
                            <p>Requirements<br> With Wishlists, Reviews, Ratings</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //contact-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //footer-top -->
    <!-- subscribe -->
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <!-- //cart-js -->
    <!-- menu js aim -->
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <!-- Resource jQuery -->
    <!-- //menu js aim -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.faqScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    y>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- help-page -->
    <div class="faq-w3agile">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Frequently asked questions(FAQ)</h3>
            <ul class="faq">
                <li class="item1"><a href="#" title="click here">How do I take a BestCourses course?</a>
                    <ul>
                        <li class="subitem1">
                            <p> BestCourses courses are entirely on-demand. You can begin the course whenever you like, and there are no deadlines to complete it.</p>
                        </li>
                    </ul>
                </li>
                <li class="item2"><a href="#" title="click here">What do BestCourses courses include?</a>
                    <ul>
                        <li class="subitem1">
                            <p> Each BestCourses course is created, owned and managed by the instructor(s). The foundation of each BestCourses course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. </p>
                        </li>
                    </ul>
                </li>
                <li class="item3"><a href="#" title="click here">Do I have to start my BestCourses course at a certain time? And how long do I have to complete it?</a>
                    <ul>
                        <li class="subitem1">
                            <p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item4"><a href="#" title="click here">Is BestCourses an accredited institution? Do I receive anything after I complete a course</a>
                    <ul>
                        <li class="subitem1">
                            <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item5"><a href="#" title="click here">Is there any way to preview a course?</a>
                    <ul>
                        <li class="subitem1">
                            <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item6"><a href="#" title="click here">How can I pay for a course?</a>
                    <ul>
                        <li class="subitem1">
                            <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item7"><a href="#" title="click here">What if I don’t like a course I purchased?</a>
                    <ul>
                        <li class="subitem1">
                            <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item8"><a href="#" title="click here">Where can I go for help?</a>
                    <ul>
                        <li class="subitem1">
                            <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item9"><a href="#" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
                    <ul>
                        <li class="subitem1">
                            <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
                <li class="item10"><a href="#" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
                    <ul>
                        <li class="subitem1">
                            <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- script for tabs -->
            <script type="text/javascript">
                $(function() {

                    var menu_ul = $('.faq > li > ul'),
                        menu_a = $('.faq > li > a');

                    menu_ul.hide();

                    menu_a.click(function(e) {
                        e.preventDefault();
                        if (!$(this).hasClass('active')) {
                            menu_a.removeClass('active');
                            menu_ul.filter(':visible').slideUp('normal');
                            $(this).addClass('active').next().stop(true, true).slideDown('normal');
                        } else {
                            $(this).removeClass('active');
                            $(this).next().stop(true, true).slideUp('normal');
                        }
                    });

                });
            </script>
            <!-- script for tabs -->
        </div>
    </div>
    <!-- //login-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.helpScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- help-page -->
    <div class="help">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">How can we help you</h3>
            <div class="header-search">
                <form action="#" method="post">
                    <input type="search" name="Search" placeholder="Please type your query eg.Return, Refund or others." required="">
                    <i class="fa fa-search" aria-hidden="true"> </i>
                    <button type="submit" class="btn btn-default" aria-label="Left Align">
						Submit
					</button>
                </form>
            </div>
            <div class="faq-w3agile">
                <h5>Top 10 Frequently asked questions(FAQ)</h5>
                <ul class="faq">
                    <li class="item1"><a href="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
                        <ul>
                            <li class="subitem1">
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item2"><a href="#" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</a>
                        <ul>
                            <li class="subitem1">
                                <p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item3"><a href="#" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                        <ul>
                            <li class="subitem1">
                                <p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item4"><a href="#" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                        <ul>
                            <li class="subitem1">
                                <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item5"><a href="#" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item6"><a href="#" title="click here">Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item7"><a href="#" title="click here">Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item8"><a href="#" title="click here">The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices passage ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item9"><a href="#" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                    <li class="item10"><a href="#" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
                        <ul>
                            <li class="subitem1">
                                <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- script for tabs -->
                <script type="text/javascript">
                    $(function() {

                        var menu_ul = $('.faq > li > ul'),
                            menu_a = $('.faq > li > a');

                        menu_ul.hide();

                        menu_a.click(function(e) {
                            e.preventDefault();
                            if (!$(this).hasClass('active')) {
                                menu_a.removeClass('active');
                                menu_ul.filter(':visible').slideUp('normal');
                                $(this).addClass('active').next().stop(true, true).slideDown('normal');
                            } else {
                                $(this).removeClass('active');
                                $(this).next().stop(true, true).slideUp('normal');
                            }
                        });

                    });
                </script>
                <!-- script for tabs -->
            </div>
        </div>
    </div>
    <!-- //login-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <!-- //cart-js -->
    <!-- menu js aim -->
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <!-- Resource jQuery -->
    <!-- //menu js aim -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.loginScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class="login-page">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Login to your account</h3>
            <div class="login-body">
                <form action="#" method="post">
                    <input type="text" class="user" name="email" placeholder="Enter your email">
                    <div class="error" id="error-email"></div>
                    <input type="password" name="password" class="lock" placeholder="Password">
                    <div class="error" id="error-password"></div>
                    <input type="submit" value="Login">
                    <div class="forgot-grid">
                        <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Remember me</label>
                        <div class="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </form>
            </div>
            <h6> Not a Member? <a href="signup.html">Sign Up Now »</a> </h6>
            <div class="login-page-bottom social-icons">
                <h5>Recover your social account</h5>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon dribbble"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>

    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>

    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.marketPlace = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class="w3l-services">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Marketplace</h3>
            <div class="services-row">
                <div class="col-md-3 services-grids">
                    <i class="fa fa-line-chart" aria-hidden="true"></i>
                    <h4>Best Performance</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <h4>Expand audience</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <h4>Relay on our Safety</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids">
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <h4>business partner</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids services-grids-btm">
                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                    <h4>Good quality</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids services-grids-btm">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <h4>Fulfill Orders</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids services-grids-btm">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    <h4>User Requirements</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="col-md-3 services-grids services-grids-btm">
                    <i class="fa fa-cc-visa" aria-hidden="true"></i>
                    <h4>Easy Transactions</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <!-- //cart-js -->
    <!-- menu js aim -->
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.teacherScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#"></a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- offers-page -->
    <div class="wthree-offers">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Our Teachers </h3>
            <div class="w3ls-add-grids w3agile-add-products">
                <<<<<<< HEAD=======< a href="#">
                    <<<<<<< HEAD <h4>
                        </h4>

                        =======
                        <h4>THE TEACHERS</h4>

                        >>>>>>> 1e3f3e3056ef4039ccd5751f3a9bc95a8ed87c53
                        </a>
                        >>>>>>> cd81356b02833706c221d6bb18258e72a3c6fcfb
            </div>
            <div class="offer-card-row">
                <div class="col-md-4 offer-card-grids">
                    <h4>Fast </h4>
                    <p>Our teachers are fast to response</p>

                </div>
                <div class="col-md-4 offer-card-grids">
                    <h4>Friendly</h4>
                    <p>Our teachers are ethusiastic and passionate</p>

                </div>
                <div class="col-md-4 offer-card-grids">
                    <h4>Forward </h4>
                    <p>Our teachers will help bring out the best of each student </p>

                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="offer-bottom">
                <div class="col-md-6 offer-bottom-grids">
                    <div class="offer-bottom-grids-info2">
                        <h4>Nguyen Ba Khiem</h4>
                        <h6>Head of Computer Science</h6>
                    </div>
                </div>
                <div class="col-md-6 offer-bottom-grids">
                    <div class="offer-bottom-grids-info">
                        <h4>Nguyen Ba Khiem</h4>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //login-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    </script>
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>

    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.privacyScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function () {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function (i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            $(".scroll").click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function () {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"
                                aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift"
                                aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span
                                class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker"
                                aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt"
                                aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle"
                                aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
                            <i class="fa fa-search" aria-hidden="true"> </i>
                        </button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop"
                                    aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all
                                best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- privacy-page -->
    <div class="privacy">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Privacy Policy</h3>
            <div class="privacy-w3row">
                <p>This privacy policy has been compiled to better serve those who are concerned with how their
                    "Personally identifiable information" (PII) is being used online. PI is information that can be used
                    on its own or with other information to identify, contact, or locate a single person, or to identify
                    an individual in context. Please read our privacy policy carefully to get a clear understanding of
                    how we collect, use, protect or otherwise handle
                    your Personally Identifiable Information in accordance with our website.</p>

                <h5>What Does Our Privacy Policy Include?</h5>
                <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email
                    address, mailing address, credit card information or other details so that we can provide our
                    services to you. </p>
                <p>We collect information from you when you register on our site, place an order, subscribe to a
                    newsletter, fill out a form or enter information on our site.</p>
                <p>You can request to have your information removed by clicking on the Contact Us/Live Chat button on
                    this or the home page.
                    Please note that we may maintain information about an individual sales transaction in order to
                    complete that transaction and for record keeping purposes.</p>
                <h5>How Do We Use Your Personal Information?</h5>
                <p>
                <ul>
                    <li>To personalize your experience on our site and to allow us to deliver the type of content and
                        product offerings in which you are most interested.</li>
                    <li>To improve our website in order to better serve you.</li>
                    <li>To allow us to better service you in responding to your customer service requests.</li>
                    <li>To administer a contest, promotion, survey or other site feature.</li>
                    <li>To quickly process your transactions.</li>
                    <li>To send periodic emails regarding your order or other products and services.</li>
                </ul>
                </p>
            </div>
        </div>
    </div>
    <!-- //privacy-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function (evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <!-- //cart-js -->
    <!-- menu js aim -->
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <!-- Resource jQuery -->
    <!-- //menu js aim -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.productScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
    <!-- products -->
    <div class="products">
        <div class="container">
            <div class="col-md-9 product-w3ls-right">
                <!-- breadcrumbs -->
                <ol class="breadcrumb breadcrumb1">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Video</li>
                </ol>
                <div class="clearfix"> </div>
                <!-- //breadcrumbs -->
                <div class="product-top">
                    <h4>Videos</h4>
                    <!-- <ul>
                        <li class="dropdown head-dpdn">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Filter By<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Latest</a></li>
                                <li><a href="#">Popular</a></li>
                            </ul>
                        </li>
                        <li class="dropdown head-dpdn">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Brands<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Primary school</a></li>
                                <li><a href="#">Secondary school</a></li>
                                <li><a href="#">Highschool</a></li>

                            </ul>
                        </li>
                    </ul> -->
                    <div class="clearfix"> </div>
                </div>
                <div class="products-row">
                    <!-- <div class="col-md-3 product-grids">
                        <div class="agile-products">
                            <div class="new-tag">
                                <h6>20%<br>Off</h6>
                            </div>
                            <a><img src="images/e1.png" class="img-responsive" alt="img"></a>
                            <div class="agile-product-text">
                                <h5><a>Mr Vu</a></h5>
                                <h6><del>$200</del> $100</h6>
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Audio speaker" />
                                    <input type="hidden" name="amount" value="100.00" />
                                    <button type="submit" class="w3ls-cart pw3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-3 product-grids">
                        <div class="agile-products">
                            <div class="new-tag">
                                <h6>New</h6>
                            </div>
                            <a href=""><img src="images/e2.png" class="img-responsive" alt="img"></a>
                            <div class="agile-product-text">
                                <h5><a>Mr Tung</a></h5>
                                <h6><del>$700</del> $300</h6>
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Refrigerator" />
                                    <input type="hidden" name="amount" value="300.00" />
                                    <button type="submit" class="w3ls-cart pw3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-3 product-grids">
                        <div class="agile-products">
                            <div class="new-tag">
                                <h6>5% <br> Off</h6>
                            </div>
                            <a><img src="images/e3.png" class="img-responsive" alt="img"></a>
                            <div class="agile-product-text">
                                <h5><a>Dr Vu</a></h5>
                                <h6><del>$100</del> $70</h6>
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Smart Phone" />
                                    <input type="hidden" name="amount" value="70.00" />
                                    <button type="submit" class="w3ls-cart pw3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-3 product-grids">
                        <div class="agile-products">
                            <div class="new-tag">
                                <h6>New</h6>
                            </div>
                            <a><img src="images/e4.png" class="img-responsive" alt="img"></a>
                            <div class="agile-product-text">
                                <h5><a>Dr Khiem</a></h5>
                                <h6><del>$100</del> $80</h6>
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Digital Camera" />
                                    <input type="hidden" name="amount" value="80.00" />
                                    <button type="submit" class="w3ls-cart pw3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div> -->

                    <div class="col-md-3 product-grids">
                        <!-- <div class="agile-products"> -->
                        <div class="new-tag">
                            <h6>New</h6>
                        </div>
                        <a href="single.html"><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                        <!-- <div class="agile-product-text">
                                <h5><a>Mr Khiem</a></h5> -->
                        <!-- <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Digital Camera" />
                                    <input type="hidden" name="amount" value="80.00" />

                                </form> -->
                        <!-- </div> -->
                        <!-- </div> -->
                    </div>



                    <div class="clearfix"> </div>
                </div>
                <!-- add-products -->
                <!-- <div class="w3ls-add-grids w3agile-add-products">
                    <a href="#">
                        <h4> Share your knowlegde to save the world</h4>
                    </a>
                </div> -->
                <!-- //add-products -->
            </div>
            <div class="col-md-3 rsidebar">
                <div class="rsidebar-top">
                    <!-- <div class="slider-left">
                        <h4>Filter By Price</h4>
                        <div class="row row1 scroll-pane">
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>0 - $100 </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$100 - $200 </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$200 - $250  </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$250 - $300 </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>$350 - $400 </label>
                        </div>
                    </div> -->
                    <div class="sidebar-row">
                        <h4>Time</h4>
                        <div class="row row1 scroll-pane">
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Upto - 5h </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>4h-5h</label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>3h-4h </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>1h-3h </label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>30m-1h</label>
                            <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>below 30m </label>
                        </div>
                    </div>
                </div>
                <div class="related-row">
                    <h4>YOU MAY ALSO LIKE</h4>
                    <div class="galry-like">
                        <a href="single.html"><iframe width="215.2" height="150" src="https://www.youtube.com/embed/videoseries?list=PLQeh9OeQXJE8yeX6daJlcOhDWrNjDH-cN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                        <h4><a href="products.html">University entrance exams</a></h4>
                    </div>
                </div>
            </div>
            <div class="clearfix"> </div> -->
            <div class="recommend">
                <h3 class="w3ls-title">Our Recommendations </h3>
                <script>
                    $(document).ready(function() {
                        $("#owl-demo5").owlCarousel({

                            autoPlay: 3000,

                            items: 4,
                            itemsDesktop: [640, 5],
                            itemsDesktopSmall: [414, 4],
                            navigation: true

                        });

                    });
                </script> -->
                <div id="owl-demo5" class="owl-carousel">
                    <div class="item">
                        <div class="glry-w3agile-grids agileits"> <a href="products1.html"><iframe width="1112" height="320.6" src="https://www.youtube.com/embed/videoseries?list=PLg2tfDG3Ww4vrstKAZ0dajHx_hq85P0G-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                            <div class="view-caption agileits-w3layouts">
                                <h4><a href="products1.html">Teaching a level maths</a></h4>

                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Women Sandal" />
                                    <input type="hidden" name="amount" value="20.00" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="glry-w3agile-grids agileits">
                            <a href="products6.html"><iframe width="1120" height="360.2" src="https://www.youtube.com/embed/videoseries?list=PLb86fQcyLH4SaWg46PojVajJG-1mrkn3t" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                            <div class="view-caption agileits-w3layouts">
                                <h4><a href="products6.html">Grade 12 maths</a></h4>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Coffee Mug" />
                                    <input type="hidden" name="amount" value="14.00" />
                                    <button type="submit" class="w3ls-cart"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="glry-w3agile-grids agileits">
                            <a href="products6.html"><iframe width="1120" height="360.2" src="https://www.youtube.com/embed/videoseries?list=PLbu_fGT0MPsv3zrIJ27JwTgNRCdBBhwnR" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                            <div class="view-caption agileits-w3layouts">
                                <h4><a href="products6.html">JEE maths</a></h4> -->
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="w3ls_item" value="Teddy bear" />
                                    <input type="hidden" name="amount" value="20.00" />

                                </form> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.signUpScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>

    <div class="login-page">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Create your account</h3>
            <div class="login-body">
                <form action="#" method="post">
                    <input type="text" class="user" name="name" placeholder="Enter your Name">
                    <div class="error" id="error-name"></div>
                    <input type="text" class="user" name="email" placeholder="Enter your email">
                    <div class="error" id="error-email"></div>
                    <input type="password" name="password" class="lock" placeholder="Password">
                    <div class="error" id="error-password"></div>
                    <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>teacher</label>
                    <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>student</label>
                    <input type="submit" value="Sign Up ">
                    <div class="forgot-grid">
                        <label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Remember me</label>
                        <div class="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </form>
            </div>
            <h6>Already have an account? <a href="login.html">Login Now »</a> </h6>
        </div>
    </div>
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- cart-js -->
    <script src="js/minicart.js"></script>
    <script>
        w3ls.render();

        w3ls.cart.on('w3sb_checkout', function(evt) {
            var items, len, i;

            if (this.subtotal() > 0) {
                items = this.items();

                for (i = 0, len = items.length; i < len; i++) {
                    items[i].set('shipping', 0);
                    items[i].set('shipping2', 0);
                }
            }
        });
    </script>
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <script src="js/bootstrap.js"></script>
</body>

</html>`
components.valueScreen = `<!DOCTYPE html>
<html lang="en">

<head>
    <title>VuTungwebsite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="application/x-javascript">
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/animate.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/menu.css" rel="stylesheet" type="text/css" media="all" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <script src="js/jquery-2.2.3.min.js"></script>
    <script src="js/jquery-scrolltofixed-min.js" type="text/javascript"></script>
    <script>
        $(document).ready(function() {


            $('.header-two').scrollToFixed();

            var summaries = $('.summary');
            summaries.each(function(i) {
                var summary = $(summaries[i]);
                var next = summaries[i + 1];

                summary.scrollToFixed({
                    marginTop: $('.header-two').outerHeight(true) + 10,
                    zIndex: 999
                });
            });
        });
    </script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function() {

            var defaults = {
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            };

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });
    </script>
</head>

<body>
    <div class="header">
        <div class="w3ls-header">
            <div class="w3ls-header-left">
                <p><a href="#">Online lessons </a></p>
            </div>
            <div class="w3ls-header-right">
                <ul>
                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" aria-hidden="true"></i> My Account<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login </a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="login.html">My Classes</a></li>
                            <li><a href="login.html">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="dropdown head-dpdn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gift" aria-hidden="true"></i> <a href="offers.html">About our teachers</a><span class="caret"></span></a>
                        <ul class="dropdown-menu">


                        </ul>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="contact.html" class="dropdown-toggle"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="card.html" class="dropdown-toggle"><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Membership Card</a>
                    </li>
                    <li class="dropdown head-dpdn">
                        <a href="help.html" class="dropdown-toggle"><i class="fa fa-question-circle" aria-hidden="true"></i> Help</a>
                    </li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="header-two">
            <div class="container">
                <div class="header-logo">
                    <h1><a href="index.html"><span>B</span>est <i>teachers</i></a></h1>
                    <h6>Your class.Your teachers</h6>
                </div>
                <div class="header-search">
                    <form action="#" method="post">
                        <input type="search" name="Search" placeholder="Search for suitable lessons...">
                        <button type="submit" class="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"> </i>
						</button>
                    </form>
                </div>
                <div class="header-cart">
                    <div class="my-account">
                        <a href="contact.html"><i class="fa fa-map-marker" aria-hidden="true"></i> CONTACT US</a>
                    </div>
                    <div class="cart">
                        <form action="#" method="post" class="last">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-laptop" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="header-three">
            <div class="container">
                <div class="menu">
                    <div class="cd-dropdown-wrapper">
                        <a class="cd-dropdown-trigger" href="#0">Subjects </a>
                        <nav class="cd-dropdown">
                            <ul class="cd-dropdown-content">
                                <li class="has-children">
                                    <!-- Math -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All math lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- .phyisics -->
                                <li class="has-children">
                                    <a href="#">Physics</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Physics lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- chemistry -->
                                <li class="has-children">
                                    <a href="#">Chemistry</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Chemistry lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- History -->
                                <li class="has-children">
                                    <a href="#">History</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All History lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>

                                <!-- Geography -->
                                <li class="has-children">
                                    <a href="#">Geography</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Geography lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- Computer science -->
                                <li class="has-children">
                                    <a href="#">Computer science</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Computer science lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <li class="has-children">
                                    <!-- Literature -->
                                    <a href="#">Math</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All Literature lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                                <!-- English -->
                                <li class="has-children">
                                    <a href="#">English</a>
                                    <!-- <ul class="cd-secondary-dropdown is-hidden">
                                        <li class="go-back"><a href="#">Menu</a></li>
                                        <li class="see-all"><a href="products.html">All English lessons</a></li>
                                        <li class="has-children">
                                            <a href="#">Primary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 5</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 6</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li> <a href="products.html">Grade 4</a> </li>
                                                <li><a href="products.html">Grade 3</a></li>
                                                <li><a href="products.html">Grade 2</a></li>
                                                <li><a href="products.html">Grade 1</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">Secondary school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#0">Grade 9</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">Tests for grade 10</a></li>
                                                        <li><a href="products.html">Basis</a></li>
                                                        <li><a href="products.html">International</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 8</a></li>
                                                <li><a href="products.html">Grade 7</a></li>
                                                <li><a href="products.html">Grade 6</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#">High school</a>
                                            <ul class="is-hidden">
                                                <li class="has-children">
                                                    <a href="#">Grade 12</a>
                                                    <ul class="is-hidden">
                                                        <li class="go-back">
                                                            <a href="#"> </a>
                                                        </li>
                                                        <li><a href="products.html">University entrance tests </a></li>
                                                        <li><a href="products.html">basis</a></li>
                                                        <li><a href="products.html">A level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Grade 11</a></li>
                                                <li><a href="products.html">Grade 10</a></li>
                                            </ul>
                                        </li>

                                    </ul> -->

                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
                <div class="move-text">
                    <div class="marquee"><a href="offers.html"> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
                    <script type="text/javascript" src="js/jquery.marquee.min.js"></script>
                    <script>
                        $('.marquee').marquee({
                            pauseOnHover: true
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class="values">
        <div class="container">
            <h3 class="w3ls-title w3ls-title1">Core Values</h3>
            <h5>About Core Values</h5>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas faucibus ipsum et libero euismod iaculis. Integer consectetur congue laoreet. Morbi eget leo elementum, vulputate eros et, egestas diam. Nam
                egestas, quam id viverra congue, elit mi eleifend libero, eget vulputate ante lorem vel quam. Sed suscipit ligula eu mi bibendum, vel mollis enim finibus. Suspendisse vitae est tortor. Donec aliquet leo vitae ligula mattis, vitae auctor
                mi pellentesque. Integer eu dui accumsan, convallis neque id, malesuada urna. </p>
            <div class="w3values-row">
                <h5>Here are some core values :</h5>
                <div class="col-md-6 w3values-grids">
                    <h6>1. INNOVATION</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices orci at augue sollicitudin, sed rhoncus leo dictum. Duis sed elit tempus, convallis elit eget, ornare nibh. Sed eu risus eget magna condimentum blandit. </p>
                </div>
                <div class="col-md-6 w3values-grids">
                    <h6>2. NEW TRENDS</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices orci at augue sollicitudin, sed rhoncus leo dictum. Duis sed elit tempus, convallis elit eget, ornare nibh. Sed eu risus eget magna condimentum blandit. </p>
                </div>
                <div class="col-md-6 w3values-grids">
                    <h6>3. OPENNESS</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices orci at augue sollicitudin, sed rhoncus leo dictum. Duis sed elit tempus, convallis elit eget, ornare nibh. Sed eu risus eget magna condimentum blandit. </p>
                </div>
                <div class="col-md-6 w3values-grids">
                    <h6>4. FRIENDLY</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices orci at augue sollicitudin, sed rhoncus leo dictum. Duis sed elit tempus, convallis elit eget, ornare nibh. Sed eu risus eget magna condimentum blandit. </p>
                </div>
                <div class="col-md-6 w3values-grids">
                    <h6>5. HONESTY</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices orci at augue sollicitudin, sed rhoncus leo dictum. Duis sed elit tempus, convallis elit eget, ornare nibh. Sed eu risus eget magna condimentum blandit. </p>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //values-page -->
    <!-- footer-top -->
    <div class="w3agile-ftr-top">
        <div class="container">
            <div class="ftr-toprow">
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>UP-TO-DATED LESSONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>FEED BACK EVERY COURSE</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-4 ftr-top-grids">
                    <div class="ftr-top-left">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </div>
                    <div class="ftr-top-right">
                        <h4>HIGH QUALITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="subscribe">
        <div class="container">
            <div class="col-md-6 social-icons w3-agile-icons">
                <h4>Keep in touch</h4>
                <ul>
                    <li>
                        <a href="#" class="fa fa-facebook icon facebook"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus icon googleplus"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-dribbble icon twitter"> </a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-rss icon rss"> </a>
                    </li>
                </ul>
                <ul class="apps">
                    <li>
                        <h4>Download Our app : </h4>
                    </li>
                    <li>
                        <a href="#" class="fa fa-apple"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-windows"></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-android"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 subscribe-right">
                <h4>Sign up for email and get free lessons</h4>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Enter your Email..." required="">
                    <input type="submit" value="Subscribe">
                </form>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
    <!-- //subscribe -->
    <!-- footer -->
    <div class="footer">
        <div class="container">
            <div class="footer-info w3-agileits-info">
                <div class="col-md-4 address-left agileinfo">
                    <div class="footer-logo header-logo">
                        <h2><a href="index.html"><span>B</span>est <i>teachers</i></a></h2>
                        <h6>Your classes.Your teachers</h6>
                    </div>
                    <ul>
                        <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                        <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                        <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:example@mail.com"> vu.ha@outlook.com</a></li>
                    </ul>
                </div>
                <div class="col-md-8 address-right">
                    <div class="col-md-4 footer-grids">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="marketplace.html">Marketplace</a></li>
                            <li><a href="values.html">Core Values</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="login.html">Returns</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Order Status</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 footer-grids">
                        <h3>Payment Methods</h3>
                        <ul>
                            <li><i class="fa fa-laptop" aria-hidden="true"></i> Net Banking</li>
                            <li><i class="fa fa-money" aria-hidden="true"></i> Cash On Delivery</li>
                            <li><i class="fa fa-pie-chart" aria-hidden="true"></i>EMI Conversion</li>
                            <li><i class="fa fa-gift" aria-hidden="true"></i> E-Gift Voucher</li>
                            <li><i class="fa fa-credit-card" aria-hidden="true"></i> Debit/Credit Card</li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    </script>
    <!-- //cart-js -->
    <!-- menu js aim -->
    <script src="js/jquery.menu-aim.js">
    </script>
    <script src="js/main.js"></script>
    <!-- Resource jQuery -->
    <!-- //menu js aim -->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/bootstrap.js"></script>
</body>

</html>`