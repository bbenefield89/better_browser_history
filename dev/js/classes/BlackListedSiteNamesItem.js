/**
 * @summary creates the BlackListedSiteNamesItem class
 * 
 * @description this class is reponsible for each new black listed site name that has been
 * defined by a user from the `popup.html` portion of this extension. This class defines
 * the elements value, innerText, as well as it's click handler, `addEventListener('click', ...)`,
 * as well as this elements insertion into the DOM and parent element
 * 
 * @author Brandon Benefield
 * @access public
 * @class BlackListedSiteNamesItem
 * @exports BlackListedSiteNamesItem
 * @param {string} value
 * @param {string} type
 * @param {HTML Node} parent
 * @since 1.0.0
 * @version 1.0.0
 */
export default class BlackListedSiteNamesItem {
  constructor(value, type, parent) {
    // props
    this.element;
    this.value  = value;
    this.type   = type;
    this.parent = parent;

    // methods
    this.createElement        = this.createElement.bind(this);
    this.insertElementIntoDom = this.insertElementIntoDom.bind(this);
    this.removeElement        = this.removeElement.bind(this);
  }

  /**
   * @summary creates the specific element.
   * 
   * @description creates an HTML element depending on the value of `this.type`, adds an 
   * event handler `this.removeElement()`, and inserts this element into `this.parent`
   * 
   * @since 1.0.0
   * @access private
   * @memberof BlackListedSiteNamesItem
   * @param {void}
   * @return {Node} this.element
   */
  createElement() {
    this.element         = document.createElement(this.type);
    this.element.onClick = this.removeElement();

    this.element.insertAdjacentText('beforeend', this.value);

    return this.element;
  }

  /**
   * @summary inserts element into the DOM
   * 
   * @description calls `this.createElement()` and inserts this element into
   * the parent element in the DOM
   * 
   * @since 1.0.0
   * @access public
   * @memberof BlackListedSiteNamesItem
   * @param {void}
   * @return {void}
   */
  insertElementIntoDom() {
    const element = this.createElement();
    this.parent.insertAdjacentElement('beforeend', element);
  }
  
  /**
   * @summary removes element from parent/DOM/localStorage
   * 
   * @description adds an event listener that removes this element from the 
   * parent element, the DOM and from `localStorage`
   * 
   * @since 1.0.0
   * @access private
   * @memberof BlackListedSiteNamesItem
   * @param {void}
   * @return {void}
   */
  removeElement() {
    this.element.addEventListener('click', () => {
      const localStorageList = JSON.parse(localStorage.getItem('sites'));

      delete localStorageList[ this.value ];
      localStorage.setItem('sites', JSON.stringify(localStorageList));
      this.parent.removeChild(this.element);
    });
  }
}