<template>
  <section class="sptb">
    <div class="container customerpage">
      <div class="row">
        <div class="single-page" >
          <div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
            <div class="wrapper wrapper2">
              <div class="card-body">
                <h3>{{$t('Register')}}</h3>
                <div class="text-center">
                  <div class="btn-list d-flex">
                    <a href="https://www.google.com/gmail/" class="btn btn-google btn-block"><i class="fa fa-google fa-1x me-2"></i> Google</a>
                    <a href="https://twitter.com/" class="btn btn-twitter"><i class="fa fa-twitter fa-1x"></i></a>
                    <a href="https://www.facebook.com/" class="btn btn-facebook"><i class="fa fa-facebook fa-1x"></i></a>
                  </div>
                </div>
              </div>
              <hr class="divider">
              <form id="Register" class="card-body" tabindex="500">
                <div class="name">
                  <input type="text" name="name">
                  <label>Name</label>
                </div>
                <div class="mail">
                  <input type="email" name="mail">
                  <label>Mail or Username</label>
                </div>
                <div class="passwd">
                  <input type="password" name="password">
                  <label>Password</label>
                </div>
                <div class="submit">
                  <a class="btn btn-secondary btn-block" href="index.html">Register</a>
                </div>
                <p class="text-dark mb-0">Already have an account?<a href="login.html" class="text-secondary ms-1">Sign In</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>
