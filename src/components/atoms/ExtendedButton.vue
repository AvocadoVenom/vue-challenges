<template>
  <div @click="onClick" class="d-flex align-stretch">
    <div v-if="extended === 'left'" class="extended-content left">
      <slot></slot>
    </div>
    <button
      :class="{
        'btn-ext-left': extended === 'left',
        'btn-ext-right': extended === 'right'
      }"
      type="button"
      class="btn btn-primary"
    >
      {{ text }}
    </button>
    <div v-if="extended === 'right'" class="extended-content right">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: "Click"
    },
    extended: {
      type: String,
      default: null,
      validator: val => ["left", "right"].includes(val)
    }
  },
  computed: {},
  methods: {
    onClick(): void {
      this.$emit("click");
    }
  }
});
</script>

<style scoped>
.btn {
  font-family: Avenir;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  border: none;
}
.btn.btn-primary {
  background-color: #0042da;
  color: #ffffff;
}
.btn-ext-left {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-ext-right {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.extended-content {
  background-color: #edf5fe;
  padding: 10px;
}
.extended-content.left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.extended-content.right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
