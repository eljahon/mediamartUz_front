<template>
<div>
  <section>
		<footer class="bg-dark-purple text-white">
			<div class="footer-main border-bottom">
				<div class="container">
					<div class="row">
						<div class="col-xl-3 col-lg-6 col-md-12">
							<h6>Categories</h6>
							<ul class="list-unstyled mb-0">
								<li>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">RealEstate</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Spa</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Education</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Mediation</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Restaurent</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Backery</a>
									<a  class="btn footer-btn-outline btn-sm btn-pill mb-1">Automobiles</a>
								</li>
							</ul>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-12">
							<h6>Popular Listings</h6>
							<ul class="list-unstyled mb-0">
								<li><a><i class="fa fa-angle-double-right me-2 text-secondary"></i> Educational
										college</a></li>
								<li><a><i class="fa fa-angle-double-right me-2 text-secondary"></i> Free Lancer
										for Web Developer</a></li>
								<li><a><i class="fa fa-angle-double-right me-2 text-secondary"></i> 2BHK Flat
										In Hyderabad</a></li>
								<li><a><i class="fa fa-angle-double-right me-2 text-secondary"></i> Best
										Restaurants in Hyderabad</a></li>
							</ul>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-12">
							<h6 class="mt-6 mt-xl-0">Contact</h6>
							<ul class="list-unstyled mb-0">
								<li>
									<a><i class="fa fa-home me-3 text-secondary"></i> New York, NY 10012,
										US-52014</a>
								</li>
								<li>
									<a><i class="fa fa-envelope me-3 fs-12 text-secondary"></i>
										info12323@example.com</a>
								</li>
								<li>
									<a><i class="fa fa-phone me-3 text-secondary"></i> + 01 234 567 88, + 01
										234 567 88</a>
								</li>
								<li>
									<a><i class="fa fa-print me-3 text-secondary"></i> + 01 234 567 89, + 01
										234 567 89</a>
								</li>
							</ul>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-12">
							<h6 class="mb-2 mt-6 mt-xl-0">Subscribe</h6>
							<div class="input-group">
								<input type="text" class="form-control br-ts-3  br-bs-3" placeholder="Email">
								<div class="input-group-text p-0 border-0">
									<button type="button" class="btn btn-secondary br-te-3 br-be-3 br-ts-0 br-bs-0 px-5">
										Subscribe
									</button>
								</div>
							</div>
							<h6 class="mb-2 mt-5">Payments</h6>
							<ul class="payments mb-0">
								<li>
									<a class="payments-icon"><i class="fa fa-cc-amex"
											aria-hidden="true"></i></a>
								</li>
								<li>
									<a class="payments-icon"><i class="fa fa-cc-visa"
											aria-hidden="true"></i></a>
								</li>
								<li>
									<a class="payments-icon"><i class="fa fa-credit-card-alt"
											aria-hidden="true"></i></a>
								</li>
								<li>
									<a class="payments-icon"><i class="fa fa-cc-mastercard"
											aria-hidden="true"></i></a>
								</li>
								<li>
									<a class="payments-icon"><i class="fa fa-cc-paypal"
											aria-hidden="true"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-dark-purple text-white p-0 border-bottom">
				<div class="container">
					<div class="p-2 text-center footer-links">
						<a class="btn btn-link">How It Works</a>
						<a class="btn btn-link">About Us</a>
						<a class="btn btn-link">Pricing</a>
						<a class="btn btn-link">Listing Categories</a>
						<a class="btn btn-link">Privacy Policy</a>
						<a class="btn btn-link">Terms Of Conditions</a>
						<a class="btn btn-link">Blog</a>
						<a class="btn btn-link">Contact Us</a>
						<a class="btn btn-link">Premium Ad</a>
					</div>
				</div>
			</div>
			<div class="bg-dark-purple text-white-50 p-3">
				<div class="container">
					<div class="row d-flex">
						<div class="col-lg-12 col-sm-12  mt-2 mb-2 text-center ">
							Copyright © 2022<a  class="fs-14 text-secondary mx-2">Bizdire</a>. Designed by <a
								 class="fs-14 text-secondary">Spruko</a> All rights reserved.
						</div>
						<div class="col-lg-12 col-sm-12 text-center mb-2 mt-2">
							<ul class="social-icons mb-0">
								<li>
									<a class="social-icon" ><i class="fa fa-facebook"></i></a>
								</li>
								<li>
									<a class="social-icon" ><i class="fa fa-twitter"></i></a>
								</li>
								<li>
									<a class="social-icon" ><i class="fa fa-rss"></i></a>
								</li>
								<li>
									<a class="social-icon" href="javascript:void(0)"><i class="fa fa-youtube"></i></a>
								</li>
								<li>
									<a class="social-icon" ><i class="fa fa-linkedin"></i></a>
								</li>
								<li>
									<a class="social-icon" ><i class="fa fa-google-plus"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<a data-aos="zoom-in" data-aos-duration="1000" @click="scrollTop" id="back-to-top" :style="[{display: showScroll ?  'inline' : 'none'}]"><i class="fa fa-rocket"></i></a>
		</footer>
	</section>
</div>
</template>

<script>
import "@/assets/css/icons.css"
import '@/assets/css/style.css'
import Mixins from '@/mixns.js/aos'
export default {
  name: "Footer",
  mixins: [Mixins],
  data () {
    return {
		showScroll: false,
      Categories: [{name: 'RealEstate'},{name:"Spa"},{name: 'Education'}, {name:'Mediation'}, {name:'Restaurent'}, {name:'Backery'}, {name:'Automobiles'}],
      Payments: [{iconName: 'fa fa-cc-amex'}, {iconName: 'fa fa-cc-visa'}, {iconName: 'fa fa-credit-card-alt'},{iconName: 'fa fa-cc-mastercard'}, {iconName: 'fa fa-cc-paypal'}]
    }
  },

  methods: {
	  scrollTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
 checkScrollTop() {
    if (!this.showScroll && window.pageYOffset > 400) {
      this.showScroll = true
    } else if (this.showScroll && window.pageYOffset <= 400) {
     this.showScroll = false
    }
  }
  },
mounted () {
	window.addEventListener('scroll', this.checkScrollTop)
}
}
</script>
