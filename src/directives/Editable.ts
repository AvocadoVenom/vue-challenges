import Vue from 'vue';

const textNodes = ['P', 'H1', 'H2', 'H3'];

export interface EditableOptions {
  type: 'input' | 'checkbox';
}

export default Vue.directive('editable', {
  bind: function (el, binding): void {
    el.style.cursor = 'pointer';
    const { tagName } = el;
    const { type } = binding.value;

    const textNodes = ['P', 'H1', 'H2', 'H3'];
    let currentMode: 'edit' | 'view' = 'view';
    let input: HTMLInputElement;

    window.addEventListener('click', (e: MouseEvent) => {
      const targetIsNotSibling = (e.srcElement as HTMLElement)?.parentNode !== el.parentNode;
      if (currentMode === 'edit' && targetIsNotSibling) {
        resetViewMode();
      }
    });

    el.addEventListener('click', () => {
      if (textNodes.includes(tagName) && !el.nextElementSibling) {
        currentMode = 'edit';
        el.style.display = 'none';

        appendEditElements();
      }
    });

    function resetViewMode(): void {
      currentMode = 'view';
      el.style.display = 'initial';
      input?.parentNode?.removeChild(input);
    }

    function appendEditElements(): void {
      input = document.createElement('input');
      input.setAttribute('value', el.textContent as string);
      el.insertAdjacentElement('afterend', input);
      input.focus();
      input.addEventListener('keyup', (ev: KeyboardEvent) => {
        if (['Enter', 'Escape'].includes(ev.key)) {
          const trimmed = input.value.trim();
          const enterKeyPressed = ev.key === 'Enter';

          el.textContent = trimmed.length > 0 && enterKeyPressed ? trimmed : el.textContent;
          resetViewMode();
        }
      });
    }
  },
  update: function (el, binding): void {
    console.log('update', binding)
  }
});
