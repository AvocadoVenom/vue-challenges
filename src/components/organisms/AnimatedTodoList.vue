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
      <v-list-item>
        <v-list-item-content>
          <div class="d-flex justify-space-between align-center">
            <v-text-field
              style="width: auto"
              placeholder="New item..."
              v-model="newItem"
              @keyup.enter="addItem"
            ></v-text-field>
            <v-icon style="cursor:pointer" class="ml-2" @click="addItem">mdi-plus</v-icon>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import TodoItemComponent from "@/components/atoms/TodoItem.vue";
import { TodoItem } from "../../data/models/TodoList";

export default Vue.extend({
  data: () => ({
    newItem: ""
  }),
  components: {
    TodoItem: TodoItemComponent
  },
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapActions(["ADD_ITEM", "EDIT_STATUS", "REMOVE_ITEM", "CLEAN_ALL"]),
    addItem: function(): void {
      this.newItem.length > 1 &&
        this.$store.dispatch("ADD_ITEM", new TodoItem(this.newItem, false));
      this.newItem = "";
    },
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