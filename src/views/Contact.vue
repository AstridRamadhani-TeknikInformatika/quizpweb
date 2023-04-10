<template>
  <h1>About</h1>
  <p>Nomor Hp: 081261742577</p>
  <p>Instagram: onyour_ast</p>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    Toggle static offcanvas
  </button>

  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        I will not close if you click outside of me.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>