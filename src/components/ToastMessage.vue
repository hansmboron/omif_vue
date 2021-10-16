<template>
  <div
    id="toast1"
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header bg-info">
      <img
        src="favicon.svg"
        width="24"
        height="24"
        class="rounded bg-light me-2"
        alt="..."
      />
      <strong class="me-auto text-dark">2ª Fase OMIF 2021 (22/10/2021)</strong>
      <!--        <small class="text-muted">11 mins ago</small>-->
      <button
        style="color: white"
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body fw-bold">
      <p class="mb-4">
        Clique neste link para realizar inscrição no evento 2ª Fase OMIF 2021:
        <a href="https://www.even3.com.br/omif2021/" target="_blank"
          >https://www.even3.com.br/omif2021/</a
        >
      </p>
      <p>
        Confira o calendário completo
        <router-link to="/omif2021">aqui (área de Imprensa 2021)</router-link>
      </p>
    </div>
  </div>
</template>

