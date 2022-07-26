
const App = {
  data() {
    return {
      itemSelected: {},//選擇飲品
      productOrder: [],//加入飲品
      amount: 0,        //加入飲品總金額
      outputList: [],   //產生訂單
      outputAmout: 0,   //產生訂單總金額
      outputCount: 0,   //產生訂單總數
      outputTime: 0,
      iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
      sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
      toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
      products: [
        {
          name: '珍珠鮮奶茶',
          engName: 'Pearl Milk Tea',
          price: 60,
          defaults: {
            toppings: ['珍珠'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '椰果鮮奶茶',
          engName: 'Coconut Milk Tea',
          price: 60,
          defaults: {
            toppings: ['椰果'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '鮮奶茶',
          engName: 'Milk Tea',
          price: 50,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '古意冬瓜茶 (糖固定)',
          engName: 'Winter Melon Drink',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '全糖',
            ice: '',
          }
        },
        {
          name: '蜜香紅茶',
          engName: 'Black Tea',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '包種青茶',
          engName: 'Black Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '檸檬烏龍',
          engName: 'Lemon Oolong Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '薑母茶 (熱飲)',
          engName: 'Ginger Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '熱',
          }
        },
        {
          name: '青草茶',
          engName: 'Herbal Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '金桔檸檬',
          engName: 'Kumquat Lemonade',
          price: 40,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '柳澄青茶',
          engName: 'Orange Mountain Tea',
          price: 45,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
      ],
    }
  },
  methods: {
    selectedProduct(product) {
      this.itemSelected = {
        ...product,
        count: 1,
        totalPrice: 0,
        ice: product.defaults.ice !== "" ? product.defaults.ice : '正常冰',

        sugar: product.defaults.sugar !== "" ? product.defaults.sugar : '全糖',
        toppings: [],
        remark: '',
      };

    },

    resetProduct() {
      this.itemSelected = {}
    },

    calculatePrcie() {
      this.amount = 0
      this.productOrder.forEach(item => {
        this.amount += item.totalPrice
      })

    },
    calculateOrderCount() {
      this.outputCount = 0
      this.outputList.forEach(item => {
        this.outputCount += Number(item.count)
      })
    },
    outputOrderTime() {
      this.outputTime = new Date().toLocaleString()
    },

    //加入訂單
    addToOrder() {
      this.productOrder.push(this.itemSelected),
        this.itemSelected.totalPrice = (this.itemSelected.price + this.itemSelected.toppings.length * 10) * this.itemSelected.count,
        this.resetProduct();
      this.calculatePrcie();

    },

    //產生訂單
    outputOrder(productOrder, amount) {
      this.outputList = productOrder
      this.outputAmout = amount
      this.productOrder = [];
      this.calculateOrderCount()
      this.outputOrderTime()
    }
  }
};

Vue.createApp(App).mount('#app');
