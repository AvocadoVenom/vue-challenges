import Vue from 'vue';

export default Vue.directive('clipboard', {
  bind: function (el): void {
    el.addEventListener('mouseover', function () {
      el.style.cursor = 'copy'
    });
  },
  update: function (el, binding): void {
    el.addEventListener('click', function () {
      const virtualEl = document.createElement("input");
      virtualEl.value = binding.value;
      document.body.appendChild(virtualEl);
      virtualEl.select();
      try {
        return document.execCommand("copy");
      }
      catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      }
      finally {
        document.body.removeChild(virtualEl);
      }
    });
  }
});
