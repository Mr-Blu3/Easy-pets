<template>
  <section class="body pb-5">
    <div class="container">
      <div class="main-header">
        <ul class="nav mr-auto">
          <li>
            <figure>
              <img src="#">
            </figure>
          </li>
          <li>
            <a href="">Test 0</a>
          </li>
          <li>
            <a href="">Test 1</a>
          </li>
          <li>
            <a href="">Test 2</a>
          </li>
        </ul>
      </div>

      <main class="bg-white py-5 px-0">
        <div class="content-banner">
          <img src="./../../../assets/images/default-header-banner.png"/></div>
        <div class="sort">
          <label>Sort</label>
          <select>
            <option>Sort 0</option>
            <option>Sort 1</option>
            <option>Sort 2</option>
            <option>Sort 3</option>
          </select>
          <label>Filter</label>
          <select>
            <option>filter 0</option>
            <option>filter 1</option>
            <option>filter 2</option>
            <option>filter 3</option>
          </select>
          <p>0/0 products</p>
        </div>

        <div class="products container">
          <div class="single-product col-sm-4 col-md-3">
            <img src="#">
            <p>Product Name</p>
            <p>Product Price: XXX-XXX</p>
            <img src="#">
          </div>

          <div class="single-product col-sm-4 col-md-3">
            <img src="#">
            <p>Product Name</p>
            <p>Product Price: XXX-XXX</p>
            <img src="#">
          </div>

          <div class="single-product col-sm-4 col-md-3">
            <img src="#">
            <p>Product Name</p>
            <p>Product Price: XXX-XXX</p>
            <img src="#">
          </div>

          <div class="single-product col-sm-4 col-md-3">
            <img src="#">
            <p>Product Name</p>
            <p>Product Price: XXX-XXX</p>
            <img src="#">
          </div>
        </div>
      </main>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'front',
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../../global-styles/colors';
  @import "./../../../global-styles/bootstrap-overwrite";

  .main-header {

    ul {
      display: table;
      li {
        display: table-cell;
      }
    }

    a {
      padding: 20px;
    }

    img {
      vertical-align: middle;
    }
  }

  .body {
    background: $DarkGrey;
  }

  .bg-white {
    background: $White;
    box-shadow: 10px 10px 5px #888888;
  }

  .content-banner {
    img {
      width: 100%;
    }
    margin: 0;
  }

  .single-product {
    box-shadow: 10px 10px 5px #888888;
    margin: 20px 0px 20px;
    min-height: ;
  }

</style>
