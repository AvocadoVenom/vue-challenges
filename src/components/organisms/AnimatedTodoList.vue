<template>
  <v-card class="mx-auto" tile>
    <v-card-title>
      <div class="d-flex justify-space-between align-center" style="width: 100%">
        <h4>Todo list</h4>
        <v-icon
          v-if="todoList.length > 0"
          style="cursor:pointer"
          @click="cleanAll"
        >mdi-delete-circle</v-icon>
      </div>
    </v-card-title>
    <v-list>
      <v-list-item v-if="todoList.length === 0">
        <v-list-item-title>No item</v-list-item-title>
      </v-list-item>
      <v-list-item v-else v-for="(item, index) in todoList" :key="index">
        <v-list-item-content>
          <TodoItem
            :item="item"
            @toggleStatus="changeStatus(index)"
            @removeItem="removeItem(index)"
          ></TodoItem>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import TodoItem from "@/components/atoms/TodoItem.vue";

export default Vue.extend({
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapActions(["EDIT_STATUS", "REMOVE_ITEM", "CLEAN_ALL"]),
    cleanAll: function(): void {
      this.$store.dispatch("CLEAN_ALL");
    },
    changeStatus: function(index: number): void {
      this.$store.dispatch("EDIT_STATUS", index);
    },
    removeItem: function(index: number): void {
      this.$store.dispatch("REMOVE_ITEM", index);
    }
  }
});
</script>