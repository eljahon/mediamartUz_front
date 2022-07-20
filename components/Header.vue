<template>
<div class="w-full bg-red-100">
  <div class="header-main">
		<div class="top-bar p-3">
			<div class="container">
				<div class="row">
					<div class="col-xl-7 col-lg-7 col-sm-4 col-7">
						<div class="top-bar-left d-flex">
							<div class="clearfix">
								<ul class="socials d-lg-none">
									<li>
										<a class="social-icon text-dark"><i class="fa fa-facebook"></i></a>
									</li>
									<li>
										<a class="social-icon text-dark"><i class="fa fa-twitter"></i></a>
									</li>
									<li>
										<a class="social-icon text-dark"><i class="fa fa-linkedin"></i></a>
									</li>
									<li>
										<a class="social-icon text-dark"><i class="fa fa-google-plus"></i></a>
									</li>
								</ul>
								<div class="header-search-logo d-none d-lg-block ">
									<a href="index.html" class="d-flex logo-height logo-svg header-logo">
										<img src="~/assets/images/brand/logo.png" class="header-brand-img desktop-logo" alt="Bizdire logo">
										<img src="~/assets/images/brand/logo1.png" class="header-brand-img desktop-dark" alt="Bizdire logo">
									</a>
								</div>
							</div>
							<div class="clearfix">
								<ul class="contact border-start">
									<li class="me-5 d-lg-none">
										<a class="callnumber text-dark"><span><i class="fa fa-phone me-1"></i>:
												+425 345 8765</span></a>
									</li>
									 <li class="select-country me-5">
										<select class="form-control" style="border: none" @click="LangChanges">
											<option v-for="(lang, index) in langs" :key="index" :value="lang.value">{{lang.label}}</option>
										</select>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-5 col-lg-5 col-sm-8 col-5">
						<div class="top-bar-right">
							<ul class="custom ">
								<li>
									<nuxt-link :to="localePath('/signUp')" class="text-dark"><i class="fa fa-user me-1"></i>
										<span>{{$t('reg')}}</span></nuxt-link>
								</li>
								<li>
									<nuxt-link exact no-prefetch :to="localePath('/signIn')"	 class="text-dark"><i class="fa fa-sign-in me-1"></i>
										<span>{{$t('login')}}</span></nuxt-link>
								</li>
								<li class="dropdown">
									<a class="text-dark" data-bs-toggle="dropdown"><i
											class="fa fa-home me-1"></i><span> My Dashboard</span></a>
									<div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
										<a href="mydash.html" class="dropdown-item">
											<i class="dropdown-icon icon icon-user"></i> My Profile
										</a>
										<a class="dropdown-item">
											<i class="dropdown-icon icon icon-speech"></i> Inbox
										</a>
										<a class="dropdown-item">
											<i class="dropdown-icon icon icon-bell"></i> Notifications
										</a>
										<a href="settings.html" class="dropdown-item">
											<i class="dropdown-icon  icon icon-settings"></i> Account Settings
										</a>
										<a class="dropdown-item" href="login.html">
											<i class="dropdown-icon icon icon-power"></i> Log out
										</a>
									</div>
								</li>
								<li>
									<a href="myfavorite.html" class="text-dark"><i class="fa fa-heart me-1"></i>
										<span>My favorities</span></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile Header -->
		<div>
			<div class="horizontal-header clearfix ">
				<div class="container">
					<a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
					<span class="smllogo">
            <a href="index.html" class="d-flex logo-height mobile-logo logo-svg">
						<img src="~/assets/images/brand/logo.png" class="header-brand-img desktop-logo" alt="Bizdire logo">
						<img src="~/assets/images/brand/logo1.png" class="header-brand-img desktop-dark" alt="Bizdire logo">
            </a>
					</span>
					<a href="ad-list.html" class="callusbtn"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
		<!-- /Mobile Header -->

		<div class="horizontal-main bg-dark-transparent clearfix" :class="{'activeClass': showScroll}">
			<div class=" header-style horizontal-mainwrapper container clearfix">
				<!--Nav-->
				<nav class="horizontalMenu clearfix d-md-flex">
					<ul class="horizontalMenu-list">
						<li><a>Home <span class="fa fa-caret-down m-0"></span></a>
							<ul class="sub-menu">
								<li><a href="index.html">Home Style</a></li>
							</ul>
						</li>
						<li><a href="about.html">About Us </a></li>
						<li><a href="javascript:void(0)">Widgets <span class="fa fa-caret-down m-0"></span></a>
							<ul class="sub-menu">
								<li><a href="widgets.html">Card Widgets</a></li>
								<li><a href="widgets-carousel.html">Carousel Widgets</a></li>
								<li><a href="widgets-verticalscroll.html">Vertical Scroll Widgets</a></li>
							</ul>
						</li>
						<li><a>Pages <span class="fa fa-caret-down m-0"></span></a>
							<div class="horizontal-megamenu clearfix">
								<div class="container">
									<div class="megamenu-content">
										<div class="row">
											<ul class="col link-list">
												<li class="title">Listing pages</li>
												<li><a href="business-list.html">Business List</a></li>
												<li><a href="business-list2.html">Business List 02</a></li>
												<li><a href="business-list3.html">Business List 03</a></li>
												<li><a href="business-list-right.html">Business List Right</a></li>
												<li><a href="business-list-map.html">Business Map list</a></li>
												<li><a href="business-list-map2.html">Business Map list 02</a></li>
												<li><a href="business-list-map3.html">Business Map style 03</a></li>

												<li class="title mb-0 mt-3">Add Post</li>
												<li><a href="edit-list.html">Edit-list</a></li>
												<li><a href="edit-list2.html">Edit-list 02</a></li>
												<li><a href="ad-list.html">Ad List</a></li>
												<li><a href="ad-list2.html">Ad List2</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li><a href="javascript:void(0)">Blog <span class="fa fa-caret-down m-0"></span></a>
							<ul class="sub-menu">
								<li><a href="javascript:void(0)">Blog Grid <i
											class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
									<ul class="sub-menu">
										<li><a href="blog-grid.html">Blog Grid Left</a></li>
										<li><a href="blog-grid-right.html">Blog Grid Right</a></li>
										<li><a href="blog-grid-center.html">Blog Grid Center</a></li>
									</ul>
								</li>
								<li><a href="javascript:void(0)">Blog List <i
											class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
									<ul class="sub-menu">
										<li><a href="blog-list.html">Blog List Left</a></li>
										<li><a href="blog-list-right.html">Blog List Right</a></li>
										<li><a href="blog-list-center.html">Blog List Center</a></li>
									</ul>
								</li>
								<li><a href="javascript:void(0)">Blog Details <i
											class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
									<ul class="sub-menu">
										<li><a href="blog-details.html">Blog Details Left</a></li>
										<li><a href="blog-details-right.html">Blog Details Right</a></li>
										<li><a href="blog-details-center.html">Blog Details Center</a></li>
									</ul>
								</li>
								<li><a href="javascript:void(0)">Switcher Pages <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
									<ul class="sub-menu">
										<li><a href="switcher.html">Switcher Page</a></li>
										<li><a href="switcher-1.html">Switcher-1 Page</a></li>
									</ul>
								</li>
								<li>
									<a href="javascript:void(0)">sub-menu<i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
									<ul class="sub-menu">
										<li><a href="javascript:void(0)">level-1 <i class=" mt-1 d-none d-lg-block"></i></a></li>
										<li><a href="javascript:void(0)">level-2 <i class="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></a>
											<ul class="sub-menu">
												<li><a href="#l">level-1.1 </a></li>
												<li><a href="javascript:void(0)">level-1.2 </a></li>
												<li><a href="javascript:void(0)">level-1.3 </a></li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li><a>Categories <span class="fa fa-caret-down m-0"></span></a>
							<ul class="sub-menu">
								<li><a href="business.html">Educational</a></li>
							</ul>
						</li>
						<li><a href="contact.html"> Contact Us <span class="wsarrow"></span></a></li>
						<li class="d-lg-none mt-5 pb-5 mt-lg-0">
							<span><a class="btn btn-orange">Add Listing</a></span>
						</li>
					</ul>
					<ul class="mb-0">
						<li class="mt-2 d-none d-lg-flex">
							<span><a class="btn btn-secondary ad-post"><i
										class="fa fa-plus text-white"></i> Add Listing</a></span>
						</li>
					</ul>
				</nav>
				<!--Nav-->
			</div>
			<div class="body-progress-container">
				<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" id="myBar"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
		showScroll: false,
      langs: [{label: "English", value: 'en'}, {label: "Russian", value: 'ru'}, {label: "Uzbek", value: 'uz'}]
    }
  },
  methods: {
    LangChanges (event) {
      console.log();
      this.$router.push(this.switchLocalePath(`${event.target.value}`))
    },
	 checkScrollTop() {
    if (!this.showScroll && window.pageYOffset >95) {
      this.showScroll = true
    } else if (this.showScroll && window.pageYOffset <95) {
     this.showScroll = false
    }
  }
  },
  mounted () {
	window.addEventListener('scroll', this.checkScrollTop)
}
  
}
</script>
<style>
.activeClass {
	position: fixed;
	top: 0;
	width: 100%;
	height: 80px;
	padding-right: 0.75rem;
    padding-left: 0.75rem;
	z-index:10000;
}
</style>
