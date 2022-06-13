<template>
  <div style="margin: auto">
    <section class="sptb">
      <div class="container customerpage">
        <div class="row">
          <div class="single-page" >
            <div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
              <div class="wrapper wrapper2">
                <div class="card-body">
                  <h3>Login</h3>
                  <div class="text-center">
                    <div class="btn-list d-flex">
                      <a href="https://www.google.com/gmail/" class="btn btn-google btn-block"><i class="fa fa-google fa-1x me-2"></i> Google</a>
                      <a href="https://twitter.com/" class="btn btn-twitter"><i class="fa fa-twitter fa-1x"></i></a>
                      <a href="https://www.facebook.com/" class="btn btn-facebook"><i class="fa fa-facebook fa-1x"></i></a>
                    </div>
                  </div>
                </div>
                <hr class="divider">
                <form id="login" class="card-body" tabindex="500">
                  <div class="mail">
                    <input type="email" name="mail">
                    <label>Mail or Username</label>
                  </div>
                  <div class="passwd">
                    <input type="password" name="password">
                    <label>Password</label>
                  </div>
                  <div class="submit">
                    <a class="btn btn-secondary btn-block" href="index.html">Login</a>
                  </div>
                  <p class="mb-2"><a href="forgot.html" >Forgot Password</a></p>
                  <p class="text-dark mb-0">Don't have account?<a href="/" class="text-secondary ms-1">Sign UP</a></p>
                </form>
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
  name: "Login"
}
</script>

<style scoped>

</style>
