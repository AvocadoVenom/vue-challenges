<template>
  <div class="d-flex justify-space-between align-center">
    <h5 :style="statusStyle">{{item.name}}</h5>
    <div>
      <v-icon class="ml-2" @click="toggleClick">{{ actionIcon }}</v-icon>
      <v-icon class="ml-2" @click="removeClick">mdi-delete</v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TodoItem } from "../../data/models/TodoList";
export default Vue.extend({
  props: ["item"],
  data: () => ({
    hover: false
  }),
  computed: {
    actionIcon(): string {
      return this.item.done
        ? "mdi-checkbox-marked-circle"
        : "mdi-checkbox-blank-circle-outline";
    },
    statusStyle(): Object | null {
      return {
        minWidth: "250px",
        "text-decoration": this.item.done ? "line-through" : null,
        color: this.item.done ? "gray" : "initial"
      };
    }
  },
  methods: {
    removeClick: function() {
      this.$emit("removeItem");
    },
    toggleClick: function() {
      this.$emit("toggleStatus");
    }
  }
});
</script>