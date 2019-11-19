<template>
  <div class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5">
      <div class="d-flex flex-column justify-start align-stretch">
        <h2>Filters</h2>
        <v-list dense>
          <v-subheader>
            <div class="d-flex justify-space-between align-center" style="width: 100%;">
              <div>SUFFIXED NUMBER</div>
              <v-btn text icon @click="randomize">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </v-subheader>
          <v-list-item-group color="primary">
            <v-list-item disabled v-for="(item, i) in samples" :key="i">
              <v-list-item-content>
                <v-list-item-title>
                  <div class="d-flex justify-space-between align-center">
                    <div>{{item}}</div>
                    <div>
                      <strong>{{item | suffixed-number}}</strong>
                    </div>
                  </div>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Usage:
                  <code>{{getCode(item)}}</code>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <hr />
        <h5 class="mt-2">Try it yourself!</h5>
        <div class="d-flex justify-space-around align-center mb-10">
          <div class="d-flex flex-column justify-start align-start px-5">
            <h4>Options</h4>
            <v-switch v-model="trailingZero" :hint="trailingZeroHint" label="Accept trailing zero"></v-switch>
            <v-text-field
              v-model="nbDecimals"
              label="Number of decimals"
              :hint="decimalsHint"
              solo
              dense
            ></v-text-field>
          </div>
          <div class="d-flex flex-column justify-space-around align-start px-5">
            <v-text-field type="number" v-model="testValue" label="Test value" solo clearable dense></v-text-field>
            <div
              class="mt-4 text-center"
            >Value: {{ testValue | suffixed-number(nbDecimals,trailingZero) }}</div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as suffixedFilter from "@/filters/SuffixedNumber";

const maxSamples = 5;
const maxValue = 1_000_000_000;
const minValue = -1_000_000_000;

export default Vue.extend({
  data: () => {
    return {
      samples: [] as number[],
      trailingZero: suffixedFilter.defaultTrailingZero,
      nbDecimals: suffixedFilter.defaultDecimals,
      testValue: 0
    };
  },
  created: function() {
    this.randomize();
  },
  methods: {
    getCode(value: number): string {
      return `{{ ${value} | suffixed-number }}`;
    },
    randomize(): void {
      this.samples = Array.from({ length: maxSamples }, () =>
        Math.floor(Math.random() * (maxValue - minValue) + minValue)
      );
    }
  },
  computed: {
    decimalsHint: function() {
      return `Default value: ${suffixedFilter.defaultDecimals}`;
    },
    trailingZeroHint: function() {
      return `Default value: ${suffixedFilter.defaultTrailingZero}`;
    }
  }
});
</script>