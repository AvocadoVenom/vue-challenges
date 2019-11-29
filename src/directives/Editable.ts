import Vue from 'vue';

const textNodes = ['P', 'H1', 'H2', 'H3'];

export default Vue.directive('editable', {
  bind: function (el, binding, vnode) {
    const { tagName } = el;
    const textNodes = ['P', 'H1', 'H2', 'H3'];

    el.style.cursor = 'pointer';

    el.addEventListener('click', () => {
      //   // TEXT NODE
      if (textNodes.includes(tagName) && !el.nextElementSibling) {
        el.style.display = 'none';
        const input = document.createElement('input');
        input.setAttribute('value', el.textContent as string);
        const hint = document.createElement('small');
        hint.textContent = 'Press Enter to Complete edition!';
        hint.style.fontWeight = '10px';
        hint.style.color = 'gray';

        el.insertAdjacentElement('afterend', input);
        input.insertAdjacentElement('afterend', hint);

        input.focus();

        input.addEventListener('keyup', (ev: KeyboardEvent) => {
          if (ev.key === 'Enter') {
            el.textContent = input.value.trim().length > 0 ? input.value : el.textContent;
            el.style.display = 'initial';

            hint.parentNode?.removeChild(hint);
            input.parentNode?.removeChild(input);
          }
        });
      }
    });
  }
});
