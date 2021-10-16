<template>
  <header id="header">
    <nav class="navbar navbar-expand-xl navbar-dark fixed-top py-0" id="navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img
            alt="OMIF Logo"
            class="d-inline-block align-top"
            height="55"
            id="logo"
            src="../assets/img/omif.svg"
            title="Olimpíada de Matemática das Instituições Federais"
          />
          <span class="visually-hidden">OMIF</span>
        </router-link>

        <button
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#toggleMobileMenu"
          data-bs-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="toggleMobileMenu">
          <ul class="navbar-nav ms-auto text-center fw-bold align-items-center">
            <li>
              <router-link
                to="/"
                class="nav-link btn-outline-success"
                title="Início"
              >
                <svg
                  fill="currentColor"
                  height="30"
                  viewBox="0 0 20 20"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link
                to="/comissoes"
                class="nav-link btn-outline-success"
                title="Comissões Organizadoras"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"
                  />
                  <path
                    d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
                  />
                </svg>
                Comissões Org...</router-link
              >
            </li>
            <li>
              <router-link
                to="/historia"
                class="nav-link btn-outline-success"
                title="História"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
                História</router-link
              >
            </li>
            <li>
              <router-link
                to="/editais"
                class="nav-link btn-outline-success"
                title="Editais"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                  />
                  <path
                    d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
                  />
                </svg>
                Editais</router-link
              >
            </li>
            <li>
              <router-link
                to="/estudo"
                class="nav-link btn-outline-success"
                title="Materiais de Estudo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                  />
                </svg>
                Materiais Estudo
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                aria-expanded="false"
                class="nav-link btn-outline-success dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                title="Área de Imprensa"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-newspaper"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                  />
                  <path
                    d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
                  />
                </svg>
                Área Imprensa
              </a>
              <ul
                aria-labelledby="navbarDropdown"
                class="dropdown-menu dropdown-menu-dark pt-2"
              >
                <li>
                  <router-link to="/omif2018" class="dropdown-item fw-bold"
                    >OMIF 2018</router-link
                  >
                </li>
                <li>
                  <router-link to="/omif2019" class="dropdown-item fw-bold"
                    >OMIF 2019</router-link
                  >
                </li>
                <li>
                  <router-link to="/omif2020" class="dropdown-item fw-bold"
                    >OMIF 2020</router-link
                  >
                </li>
                <li>
                  <router-link to="/omif2021" class="dropdown-item fw-bold"
                    >OMIF 2021</router-link
                  >
                </li>
                <li>
                  <router-link to="/artes" class="dropdown-item fw-bold"
                    >Resualtado Artes Visuais</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link
                to="/revista"
                class="nav-link btn-outline-success"
                href="revista.html"
                title="Revista OMIF 2021"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-journal-richtext"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                  />
                  <path
                    d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                  />
                  <path
                    d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                  />
                </svg>
                Revista</router-link
              >
            </li>
            <li class="ms-1">
              <a
                class="nav-link btn-outline-danger"
                style="background-color: crimson"
                href="https://omif.com.br/areaRestrita/"
                target="_blank"
                title="Acessar Área Restrita"
              >
                <svg
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 20 20"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Área Restrita
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      $("#toggleMobileMenu").collapse("hide");
    },
  },
};
</script>


<style scoped>
@media (max-width: 999px) {
  #header .nav-link {
    padding-left: 1em;
    padding-right: 1em;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  footer div div {
    margin-bottom: 1em;
  }
}

/* --------------------
show dropdown of the navbar on hover*/
nav div ul li.dropdown:hover .dropdown-menu {
  display: block;
}

/* link ativo */
#header a.router-link-exact-active {
  color: white;
}

/*----------------------------
HEADER*/
#header nav {
  width: 100%;
  background-color: var(--primary);
  transition: background-color ease-out 0.3s;
  letter-spacing: -0.2px;
}

.fix {
  background-color: var(--primary-trans) !important;
  box-shadow: 0 0 20px var(--primary);
}

#header .nav-link.active,
#header .dropdown-item.active {
  background-color: transparent;
  color: white;
}

#header .active:hover {
  background-color: var(--bs-green);
}

#header .nav-link,
#header .dropdown-item {
  color: #ccc;
}

#header .nav-link:hover,
#header .dropdown-item:hover {
  color: white;
  border-bottom: solid 3px var(--secondary);
}

#header .dropdown-menu-dark {
  border-radius: unset;
  border: none;
  color: var(--primary);
  background-color: var(--primary);
}
</style>