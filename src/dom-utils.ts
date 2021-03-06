const CONTAINER_ID = 'twilio-customer-frame';
const HELPLINE_SELECT_ID = 'menu-helpline';
const LANGUAGE_SELECT_ID = 'menu-language';

// Array of ids from elements that need z-index update
const nodeIds = [CONTAINER_ID, LANGUAGE_SELECT_ID, HELPLINE_SELECT_ID];

/**
 * Updates Webchat container z-index with the value provided by the client.
 * Sample: <script src="point/to/aselo-webchat.min.js" data-z-index="200">
 * 
 * How it works?
 * It uses MutationObserver to listen to DOM changes. Everytime it detects a new node was added
 * to `document.body` (or children), it checks if this element needs to have its z-index set.
 */
export function updateZIndex() {
  const zIndex = document?.currentScript?.getAttribute('data-z-index');
  if (zIndex === null || zIndex === undefined) return;

  let observer = new window.MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (isHTMLElement(node) && nodeIds.includes(node.id)) {
          node.style.zIndex = zIndex;

          if (CONTAINER_ID === node.id) {
            node.style.position = 'relative';
          }
        }
      });
    })
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function isHTMLElement(node: Node): node is HTMLElement {
  return node.nodeType === Node.ELEMENT_NODE;
}
