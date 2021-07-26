<template>
  <!--btn go to top-->
  <div class="text-right">
    <button id="btn_top" @click="totop" title="Ir ao topo">
      <svg
        fill="currentColor"
        height="30"
        viewBox="0 0 20 20"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ToTop",
  methods: {
    totop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
