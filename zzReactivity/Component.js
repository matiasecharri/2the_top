const Component = (function () {
  /* Component Constructor */
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  /* Adding methods to the constructor prototype*/

  /*RENDER UI*/
  Constructor.prototype.render = function () {
    const $element = d.querySelector(this.el);
    if (!$element) return;
    $element.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  /*UPDATE STATE*/
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  /*INMMUTABLE STATE COPY*/
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
