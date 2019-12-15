import Vue from 'vue';

export interface ExternalLinkOptions {
  link: string;
  newTab?: boolean;
}

export default Vue.directive('external-link', {
  update: function (el, binding): void {
    let { link, newTab } = binding.value;

    // By default, open in new tab
    if (newTab === null || newTab === undefined) newTab = true;

    el.addEventListener('click', function () {
      if (link) {
        if (newTab) {
          window.open(link);
        } else {
          window.location = link;
        }
      }
    });
  }
});
