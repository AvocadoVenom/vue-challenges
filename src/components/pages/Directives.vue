<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5">
      <div class="d-flex flex-column justify-start align-stretch">
        <h2>Directives</h2>
        <v-list dense>
          <v-subheader>
            <div>EDIT IN PLACE</div>
          </v-subheader>
          <v-list-item class="d-flex flex-column justify-start align-stretch">
            <h3 v-editable="{ type: eipFormControl }">{{ eipValue }}</h3>
          </v-list-item>
          <v-list-item class="d-flex flex-column justify-start align-stretch">
            <h4>Options</h4>
            <v-switch
              v-model="eipKeyboardSupport"
              label="Keyboard Support"
            ></v-switch>
            <v-radio-group
              label="Type of control"
              v-model="eipFormControl"
              column
            >
              <v-radio label="Input" value="input"></v-radio>
              <v-radio label="Checkbox" value="checkbox"></v-radio>
            </v-radio-group>
          </v-list-item>
          <v-subheader>
            <div>EXTERNAL LINK</div>
          </v-subheader>
          <v-list-item class="d-flex justify-start align-center fill-width">
            <v-text-field
              style="margin-right: 6px"
              v-model="elLink"
              placeholder="Enter a link"
            ></v-text-field>
            <v-btn
              text
              raised
              color="primary"
              :disabled="linkIsNotValid"
              v-external-link="{ link: elLink, newTab: elNewTab }"
              >OPEN LINK</v-btn
            >
          </v-list-item>
          <v-list-item class="d-flex flex-column justify-start align-stretch">
            <h4>Options</h4>
            <v-switch
              v-model="elNewTab"
              label="Open link in new tab"
            ></v-switch>
          </v-list-item>
        </v-list>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

/* eslint-disable no-useless-escape */
const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default Vue.extend({
  data: () => {
    return {
      eipValue: "Click to edit!",
      eipKeyboardSupport: true,
      eipFormControl: "input",
      elLink: "",
      elNewTab: true
    };
  },
  methods: {},
  computed: {
    linkIsNotValid(): boolean {
      return !RegExp(urlRegex).test(this.elLink);
    }
  }
});
</script>