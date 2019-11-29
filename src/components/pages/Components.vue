<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5">
      <div class="d-flex flex-column justify-start align-stretch">
        <h2>Components</h2>
        <v-list dense>
          <!-- EDIT IN PLACE -->
          <v-subheader>
            <div
              class="d-flex justify-space-between align-center"
              style="width: 100%;"
            >
              <div>EDIT-IN-PLACE</div>
            </div>
          </v-subheader>
          <v-list-item>
            <v-list-item-content>
              <EditInPlace @edited="update($event)">
                <template #viewMode :data="userName">
                  <div class="d-flex justify-space-between align-center">
                    <h3 class="mr-2 editable">Hey {{ userName }}!</h3>
                    <v-icon v-if="oldValue.touched"
                      >mdi-checkbox-marked-circle</v-icon
                    >
                  </div>
                </template>
                <template #editMode :data="userName">
                  <v-text-field
                    label="Your name..."
                    v-model="userName"
                    @edited="update($event)"
                  ></v-text-field>
                </template>
              </EditInPlace>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <!-- EDIT IN PLACE as Directive -->
          <v-subheader>
            <div
              class="d-flex justify-space-between align-center"
              style="width: 100%;"
            >
              <div>EDIT-IN-PLACE as Directive</div>
            </div>
          </v-subheader>
          <v-list-item>
            <v-list-item-content>
              <h3 v-editable>Click to edit</h3>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <!-- ANIMATED TODO LIST -->
          <v-subheader>
            <div
              class="d-flex justify-space-between align-center"
              style="width: 100%;"
            >
              <div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    ANIMATED TODO LIST
                  </template>
                  <span>Click to edit</span>
                </v-tooltip>
              </div>
            </div>
          </v-subheader>
          <v-list-item>
            <AnimatedTodoList />
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import EditInPlace from "../molecules/EditInPlace.vue";
import AnimatedTodoList from "../organisms/AnimatedTodoList.vue";

const initialValue = "Adrien";

export default Vue.extend({
  data: () => ({
    userName: initialValue,
    oldValue: Object.assign({}, { touched: false, userName: initialValue })
  }),
  components: {
    EditInPlace,
    AnimatedTodoList
  },
  methods: {
    update(edited: boolean): void {
      if (!edited) {
        this.userName = this.oldValue.userName;
      } else {
        this.oldValue = { touched: true, userName: this.userName };
      }
    }
  }
});
</script>

<style scoped>
.editable {
  cursor: pointer;
}
</style>