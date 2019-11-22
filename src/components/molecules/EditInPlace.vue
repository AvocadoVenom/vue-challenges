<template>
  <div>
    <div @click="switchMode">
      <slot name="viewMode" v-if="mode === EditInPlaceMode.VIEW"></slot>
    </div>
    <div
      v-if="mode === EditInPlaceMode.EDIT"
      @keyup.enter="switchMode"
      class="d-flex justify-space-between align-center"
    >
      <slot name="editMode"></slot>
      <v-icon @click="updateValue(true)" color="teal darken-2">mdi-check</v-icon>
      <v-icon @click="updateValue(false)" color="orange darken-2">mdi-close</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from "vue";

export enum EditInPlaceMode {
  VIEW,
  EDIT
}

export default Vue.extend({
  data: () => ({
    mode: EditInPlaceMode.VIEW,
    EditInPlaceMode
  }),
  methods: {
    switchMode(): void {
      this.mode =
        this.mode === EditInPlaceMode.VIEW
          ? EditInPlaceMode.EDIT
          : EditInPlaceMode.VIEW;
    },
    updateValue(edited: boolean): void {
      this.$emit("edited", edited);
      this.switchMode();
    }
  }
});
</script>