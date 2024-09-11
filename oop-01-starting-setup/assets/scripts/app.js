class Product {
  title = 'DEFAULT';
  imageURL;
  description;
  price;

  constructor(title, imageURL, price, description) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

class Component {
  constructor(renderHook, shouldRender = true) {
    this.hookId = renderHook;
    if(shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const element = document.createElement(tag);
    if (cssClasses) {
      element.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      attributes.forEach((attribute) => {
        element.setAttribute(attribute.name, attribute.value);
      });
    }

    document.getElementById(this.hookId).append(element);
    return element;
  }
}

class ShoppingCart extends Component {
  items = [];

  constructor(renderHook) {
    super(renderHook, true);
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: ${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    return this.items.reduce((prev, next) => {
      return prev + next.price;
    }, 0);
  }

  addProduct(product) {
    const updatedItems = [...this.items, product];
    this.cartItems = updatedItems;
  }

  orderProducts() {
    console.log('Ordering');
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    //  = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now</button>`;

    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', () => this.orderProducts());
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
              <div>
                  <img src="${this.product.imageUrl}" alt="">
                  <div class="product-item__content">
                      <h2>${this.product.title}</h2>
                      <h3>\$${this.product.price}</h3>
                      <p>${this.product.description}</p>
                      <button>Add to cart</button>
                  </div>
              </div>
              `;

    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderhookId) {
    super(renderhookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
      new Product('A Pillow', '', 19.99, 'A soft pillow'),
      new Product('A Carpet', '', 39.99, 'A nice carpet'),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.products) {
      new ProductItem(product, 'prod-list');
    }
  }

  render() {
    const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
    if(this.products && this.products.length > 0) {
      this.renderProducts();
    }
    return prodList;
  }
}

class Shop {

  constructor() {
    this.render();
  }

  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    new ProductList('app');
    return renderHook;
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
