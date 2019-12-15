<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5">
      <div class="d-flex flex-column justify-start align-stretch">
        <h2>Directives</h2>
        <v-list dense>
          <!-- EDIT IN PLACE -->
          <v-subheader>
            <div>EDIT IN PLACE</div>
          </v-subheader>
          <v-list-item>
            <h3 v-editable="{ type: eipFormControl }">{{ eipValue }}</h3>
          </v-list-item>
          <v-list-item class="d-flex justify-start align-center">
            <v-icon v-text="iconInfo" class="mr-4"></v-icon>
            <div
              class="d-flex flex-column justify-start align-stretch"
              style="color: #757575"
            >
              <small>Press Enter to confirm.</small>
              <small>Press Escape or click outside to cancel.</small>
            </div>
          </v-list-item>
          <v-divider></v-divider>
          <!-- EXTERNAL LINK -->
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
          <v-divider></v-divider>
          <!-- CLIPBOARD -->
          <v-subheader>
            <div>CLIPBOARD</div>
          </v-subheader>
          <v-list-item class="d-flex justify-start align-center fill-width">
            <v-text-field
              style="margin-right: 6px"
              v-model="cpContent"
              placeholder="Enter something to copy"
              @keyup="cpCopied = false"
            ></v-text-field>
            <v-btn
              text
              raised
              :color="cpBtnClass"
              :disabled="!cpContent"
              v-clipboard:value="cpContent"
              @click="cpCopied = true"
              >{{ cpStatusText }}</v-btn
            >
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
      elNewTab: true,
      cpContent: null,
      cpCopied: false,
      iconInfo: "mdi-information"
    };
  },
  methods: {},
  computed: {
    linkIsNotValid(): boolean {
      return !RegExp(urlRegex).test(this.elLink);
    },
    cpStatusText(): string {
      return this.cpCopied ? "COPIED" : "COPY";
    },
    cpBtnClass(): string {
      return this.cpCopied ? "success" : "primary";
    }
  }
});
</script>