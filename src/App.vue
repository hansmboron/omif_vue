<template>
  <Navbar />
  <router-view />
  <Footer />
  <ToTop />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import ToTop from "./components/ToTop.vue";
export default {
  components: {
    Navbar,
    Footer,
    ToTop,
  },
};
</script>


<style>
:root {
  --primary: #096218;
  --primary-trans: rgba(14, 108, 30, 0.9);
  --secondary: #d10000;
  --body: #e9ebee;
  --link-hover: #aea54f;
}

body,
html {
  font-family: "Roboto", sans-serif;
  background-image: url("assets/img/math3.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: var(--body);
  margin-top: 40px;
}

h1,
h2,
h3,
h4 {
  font-family: "Nunito", sans-serif;
}

.text-justify {
  text-align: justify;
}

/*para não ficar por baixo da navbar na navegação dentro da pagina*/
.anchor {
  padding-top: 60px;
  margin-top: -60px;
}

.button-primary {
  background-color: var(--primary);
  border-color: var(--primary);
  padding: 0.5rem 1.5rem;
}

.button-secondary {
  background-color: var(--secondary);
  border-color: var(--secondary);
  padding: 0.5rem 1.5rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* botao top */
#btn_top {
  display: none;
  position: fixed;
  width: 48px;
  height: 48px;
  bottom: 15px;
  right: 15px;
  z-index: 9999;
  border: none;
  outline: none;
  background-color: var(--primary-trans);
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 30px;
  -webkit-transition: 0.2s ease-out;
  -moz-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  animation: fadeIn ease 1s;
}
#btn_top:hover {
  opacity: 0.7;
  background-color: var(--link-hover);
}

/*----------------------------
MAIN*/

main a {
  color: var(--secondary);
  transition: all ease-out 0.2s;
}

main a:hover {
  color: var(--link-hover);
}

#mainCard .card-title,
#sideCard .card-title {
  font-family: "Nunito", sans-serif;
  color: var(--secondary);
  font-weight: 800;
}

#mainCard .card-text {
  font-size: large;
}

#mainCard section div p {
  font-size: large;
}

.cartaz {
  max-width: 700px;
}

/* ToastMessage */
#toast1 {
  position: fixed;
  top: 90px;
  right: 15px;
  z-index: 1032;
}

#toast1 .btn-close {
  border-radius: 20px;
  padding: 5px;
  background-color: white;
}

.toast-header {
  background-color: var(--primary);
}
</style>
