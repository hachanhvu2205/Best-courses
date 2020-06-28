const components = {};
components.indexScreen = `
<div class="header">
    <div class="w3ls-header">
        <div class="w3ls-header-left">
            <p><a>Online lessons </a></p>
        </div>
        <div class="w3ls-header-right">
            <ul>
                <li class="dropdown head-dpdn">
                    <a></span></a>
                    <ul class="dropdown-menu">
                        <li><a>Login </a></li>
                        <li><a>Sign Up</a></li>
                        <li><a>My Classes</a></li>
                        <li><a>Wallet</a></li>
                    </ul>
                </li>

                <li class="dropdown head-dpdn">
                    <a></span></a>
                    <ul class="dropdown-menu">


                    </ul>
                </li>
                <li class="dropdown head-dpdn">
                    <a></i> Address</a>
                </li>
                <li class="dropdown head-dpdn">
                    <a></i> Help</a>
                </li>
            </ul>
        </div>
        <div class="clearfix"> </div>
    </div>
    <div class="header-two">
        <div class="container">
            <div class="header-logo">
                <h1><a><span>B</span>est <i>teachers</i></a></h1>
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
                    <a></i> CONTACT US</a>
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
                                <a>Math</a>

                            </li>
                            <!-- .phyisics -->
                            <li class="has-children">
                                <a>Physics</a>

                            </li>
                            <!-- chemistry -->
                            <li class="has-children">
                                <a>Chemistry</a>

                            </li>
                            <!-- History -->
                            <li class="has-children">
                                <a>History</a>


                            </li>

                            <!-- Geography -->
                            <li class="has-children">
                                <a>Geography</a>
                                <!-- <ul class="cd-secondary-dropdown is-hidden">
                                    <li class="go-back"><a>Menu</a></li>
                                    <li class="see-all"><a>All Geography lessons</a></li>
                                    <li class="has-children">
                                        <a>Secondary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 9</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>Tests for grade 10</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 8</a></li>
                                            <li><a>Grade 7</a></li>
                                            <li><a>Grade 6</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>High school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 12</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>University entrance tests </a></li>
                                                    <li><a>basis</a></li>
                                                    <li><a>A level</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 11</a></li>
                                            <li><a>Grade 10</a></li>
                                        </ul>
                                    </li>

                                </ul> -->

                            </li>
                            <!-- Computer science -->
                            <li class="has-children">
                                <a>Computer science</a>
                                <!-- <ul class="cd-secondary-dropdown is-hidden">
                                    <li class="go-back"><a>Menu</a></li>
                                    <li class="see-all"><a>All Computer science lessons</a></li>
                                    <li class="has-children">
                                        <a>Secondary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 9</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>Tests for grade 10</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 8</a></li>
                                            <li><a>Grade 7</a></li>
                                            <li><a>Grade 6</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>High school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 12</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>University entrance tests </a></li>
                                                    <li><a>basis</a></li>
                                                    <li><a>A level</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 11</a></li>
                                            <li><a>Grade 10</a></li>
                                        </ul>
                                    </li>

                                </ul> -->

                            </li>
                            <li class="has-children">
                                <!-- Literature -->
                                <!-- <a>Math</a> -->
                                <!-- <ul class="cd-secondary-dropdown is-hidden">
                                    <li class="go-back"><a>Menu</a></li>
                                    <li class="see-all"><a>All Literature lessons</a></li>
                                    <li class="has-children">
                                        <a>Primary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 5</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>Tests for grade 6</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li> <a>Grade 4</a> </li>
                                            <li><a>Grade 3</a></li>
                                            <li><a>Grade 2</a></li>
                                            <li><a>Grade 1</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>Secondary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 9</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>Tests for grade 10</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 8</a></li>
                                            <li><a>Grade 7</a></li>
                                            <li><a>Grade 6</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>High school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 12</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>University entrance tests </a></li>
                                                    <li><a>basis</a></li>
                                                    <li><a>A level</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 11</a></li>
                                            <li><a>Grade 10</a></li>
                                        </ul>
                                    </li>

                                </ul> -->

                            </li>
                            <!-- English -->
                            <li class="has-children">
                                <a>English</a>
                                <!-- <ul class="cd-secondary-dropdown is-hidden">
                                    <li class="go-back"><a>Menu</a></li>
                                    <li class="see-all"><a>All English lessons</a></li>
                                    <li class="has-children">
                                        <a>Primary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 5</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>Tests for grade 6</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li> <a>Grade 4</a> </li>
                                            <li><a>Grade 3</a></li>
                                            <li><a>Grade 2</a></li>
                                            <li><a>Grade 1</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>Secondary school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 9</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a >Tests for grade 10</a></li>
                                                    <li><a>Basis</a></li>
                                                    <li><a>International</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 8</a></li>
                                            <li><a>Grade 7</a></li>
                                            <li><a>Grade 6</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children">
                                        <a>High school</a>
                                        <ul class="is-hidden">
                                            <li class="has-children">
                                                <a>Grade 12</a>
                                                <ul class="is-hidden">
                                                    <li class="go-back">
                                                        <a> </a>
                                                    </li>
                                                    <li><a>University entrance tests </a></li>
                                                    <li><a>basis</a></li>
                                                    <li><a>A level</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Grade 11</a></li>
                                            <li><a>Grade 10</a></li>
                                        </ul>
                                    </li>

                                </ul> -->

                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
            <div class="move-text">
                <div class="marquee"><a> All subjects are available here...... <span>We offer all best teachers </span> <span> You can have free trial lessons</span></a></div>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Audio speaker</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Refrigerator</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Smart Phone</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Digital Camera</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Audio speaker</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Refrigerator</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Smart Phone</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Digital Camera</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>T Shirt</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Women Sandal</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Jewellery</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Party dress</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>T Shirt</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Women Sandal</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Jewellery</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Party dress</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Coffee Mug</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Teddy bear</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Chocolates</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Gift Card</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Coffee Mug</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Teddy bear</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Chocolates</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Gift Card</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Wall Clock</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Plants & Vases</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Queen Size Bed</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>flower pot</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Wall Clock</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Plants & Vases</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Queen Size Bed</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>flower pot</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Roller Skates</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Football</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Nylon Shuttle</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Cricket Kit</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Roller Skates</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Football</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Nylon Shuttle</a></h4>
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
                                        <a></a>
                                        <div class="view-caption agileits-w3layouts">
                                            <h4><a>Cricket Kit</a></h4>
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
                <a>
                    <h4></h4>
                </a>
            </div>
            <div class="w3ls-add-grids w3ls-add-grids-mdl">
                <a>
                    <h4></h4>

                </a>
            </div>
            <div class="w3ls-add-grids w3ls-add-grids-mdl1">
                <a>
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
                <a>
                    <div class="focus-image"><i class="fa fa-calculator" aria-hidden="true"></i></div>
                    <h4 class="clrchg">Math</h4>
                </a>
            </div>
            <div class="col-md-3 focus-grid">
                <a>
                    <div class="focus-image"><i class="fa fa-binoculars" aria-hidden="true"></i></div>
                    <h4 class="clrchg"> Physics</h4>
                </a>
            </div>
            <div class="col-md-3 focus-grid">
                <a>
                    <div class="focus-image"><i class="fa fa-flask" aria-hidden="true"></i></div>
                    <h4 class="clrchg">Chemistry</h4>
                </a>
            </div>
            <div class="col-md-3 focus-grid">
                <a>
                    <div class="focus-image"><i class="fa fa-comments-o" aria-hidden="true"></i></div>
                    <h4 class="clrchg">English</h4>
                </a>
            </div>
            <div class="col-md-2 focus-grid w3focus-grid-mdl">
                <a>
                    <div class="focus-image"><i class="fa fa-laptop" aria-hidden="true"></i></div>
                    <h4 class="clrchg">Computer Science</h4>
                </a>
            </div>
            <div class="col-md-2 focus-grid w3focus-grid-mdl">
                <a>
                    <div class="focus-image"><i class="fa fa-asterisk"></i></div>
                    <h4 class="clrchg">Biology</h4>
                </a>
            </div>
            <div class="col-md-2 focus-grid w3focus-grid-mdl">
                <a>
                    <div class="focus-image"><i class="fa fa-book" aria-hidden="true"></i></div>
                    <h4 class="clrchg">History</h4>
                </a>
            </div>
            <div class="col-md-2 focus-grid w3focus-grid-mdl">
                <a>
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
                    <a> </a>
                </li>
                <li>
                    <a> </a>
                </li>
                <li>
                    <a> </a>
                </li>
                <li>
                    <a> </a>
                </li>
                <li>
                    <a> </a>
                </li>
            </ul>
            <ul class="apps">
                <li>
                    <h4>Download Our app : </h4>
                </li>
                <li>
                    <a></a>
                </li>
                <li>
                    <a></a>
                </li>
                <li>
                    <a></a>
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
                    <h2><a><span>B</span>est <i>teachers</i></a></h2>
                    <h6>Your classes.Your teachers</h6>
                </div>
                <ul>
                    <li><i class="fa fa-map-marker"></i> Hoang Dao Thuy</li>
                    <li><i class="fa fa-mobile"></i> 333 222 3333 </li>
                    <li><i class="fa fa-phone"></i> +222 11 4444 </li>
                    <li><i class="fa fa-envelope-o"></i> <a> vu.ha@outlook.com</a></li>
                </ul>
            </div>
            <div class="col-md-8 address-right">
                <div class="col-md-4 footer-grids">
                    <h3>Company</h3>
                    <ul>
                        <li><a>About Us</a></li>
                        <li><a>Marketplace</a></li>
                        <li><a>Core Values</a></li>
                        <li><a>Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-4 footer-grids">
                    <h3>Services</h3>
                    <ul>
                        <li><a>Contact Us</a></li>
                        <li><a>Returns</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Order Status</a></li>
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
`
components.aboutScreen = ``
components.contactScreen = ``
components.faqScreen = ``
components.helpScreen = ``
components.loginScreen = ``
components.marketPlace = ``
components.teacherScreen = ``
components.privacyScreen = ``
components.productScreen = ``
components.signUpScreen = ``
components.valueScreen = ``