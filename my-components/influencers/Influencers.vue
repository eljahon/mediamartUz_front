<template>
  <div>
    <h3 class="widget-title mt-7 fs-16">Employers</h3>
    <hr class="widget-hr" />
    <div class="carousel-wrapper">
      <Carousel>
        <div class="img-warpper" v-for="(item, index) in 6" :key="index">
          <div class="item">
            <!--          <div class="card mb-0">-->
            <div class="card-body">
              <img
                src="~/assets/images/faces/male/1.jpg"
                alt="img"
                class="avatar avatar-xxl brround mx-auto"
              />
              <div class="item-card2">
                <div class="item-card2-desc text-center">
                  <div class="item-card2-text mt-3">
                    <a href="company-list.html" class="text-dark"
                      ><h4 class="font-weight-bold">Sid Quebedeaux</h4></a
                    >
                  </div>
                  <p class="">Web Developer (6 Yrs Exp)</p>
                  <a href="company-details.html" class="btn btn-white btn-sm"
                    >View Details</a
                  >
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="product-filter-desc">
                <div class="product-filter-icons text-center">
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-phone"></i
                  ></a>
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-envelope"></i
                  ></a>
                  <a class="border text-secondary p-0"
                    ><i class="fa fa-comment"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "@/my-components/carousel/Carousel";
export default {
  name: "Influencers",
  components: { Carousel },
};
</script>

<style scoped>
.img-warpper {
  margin: auto;
  width: 200px;
  height: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.carousel-wrapper {
  padding: 10px;
  height: 340px;
  width: 80%;
  margin: auto;
  box-sizing: border-box;
}
</style>
