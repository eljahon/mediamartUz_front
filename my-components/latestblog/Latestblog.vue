<template>
<div>
  <section class="sptb">
    <div class="container">
      <div class="section-title center-block text-center">
        <h2>Latest News</h2>
        <p>Mauris ut cursus nunc. Morbix eleifend, ligula at consectetur vehicula</p>
      </div>
      <div>
        <div class="items-gallery">
          <div class="items-blog-tab text-center">
            <div class="items-blog-tab-heading row mb-0">
              <div class="col-12">
                <ul class="nav items-blog-tab-menu">
                  <li style="cursor: pointer" class="" v-for="(item, index) in tabsList" :key="index" @click="ActiveClassAdd(index)"><a ref="listAddClass" :class="index === 0 ? 'active show' : ''">{{item}}</a></li>
                </ul>
              </div>
            </div>
            <div class="tab-content">
              <div class="tab-pane active" id="tab-1">
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-12">
                    <div class="card mb-xl-0 overflow-hidden">
                      <div class="item-card8-img  br-te-4 br-ts-4">
                        <img src="~/assets/images/products/products/f2.jpg" alt="img"
                             class="cover-image">
                      </div>
                      <div class="item-card8-overlaytext">
                        <h6 class="mb-0">{{tabsList[selectTaabsList]}}</h6>
                      </div>
                      <div class="card-body">
                        <div class="item-card8-desc">
                          <p class="text-muted mb-2">18 November 2019.</p>
                          <h4 class="font-weight-semibold">Food &amp; Bar Restaurant</h4>
                          <p class="mb-0">Lorem ipsum dolor sit amet, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam</p>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="footerimg d-flex mt-0 mb-0">
                          <div class="d-flex footerimg-l mb-0">
                            <img src="~/assets/images/faces/female/19.jpg" alt="image"
                                 class="avatar brround  me-2">
                            <h5 class="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Elizabeth<i class="icon icon-check text-success fs-12 ms-1"
                                          data-bs-toggle="tooltip" data-bs-placement="top"
                                          title="" data-bs-original-title="verified"></i></h5>
                          </div>
                          <div class="mt-2 footerimg-r ms-auto">
                            <a href="business.html" class="text-muted"
                               data-bs-toggle="tooltip" data-bs-placement="top" title=""
                               data-bs-original-title="Add Wishlist"><i
                              class="fa fa-heart"></i></a>
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
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Latestblog",
  data () {
    return {
      tabsList:['All','Business', 'Beauty', 'Real Estate', 'Restaurant'],
      selectTaabsList: 0
    }
  },
  methods: {
    ActiveClassAdd (index) {
      this.selectTaabsList = index;
      this.$refs.listAddClass.forEach((el, inx, arr) => {
        if (index !== inx) {
          el.classList.remove('active')
        }
          arr[index].classList.add('active')
        arr[index].classList.add('show')
      })
      console.log(index)
    }
  }
}
</script>

<style scoped>

</style>
