'use client'

import { useEffect } from 'react';

const ShopifyBuyButton = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    // Cargar el script si no está ya cargado
    if (!window.ShopifyBuy) {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = ShopifyBuyInit;
    } else if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'ngzkiq-uc.myshopify.com',
        storefrontAccessToken: 'd890498e08629ca2d7af12dbfc2153c4',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '11765073969470',
          node: document.getElementById('product-component-1737156121375'),
          moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px',
                  },
                },
                button: {
                  'font-weight': 'bold',
                  'font-size': '13px',
                  'padding-top': '14.5px',
                  'padding-bottom': '14.5px',
                  ':hover': {
                    'background-color': '#000000',
                  },
                  'background-color': '#000000',
                  ':focus': {
                    'background-color': '#000000',
                  },
                  'border-radius': '0px',
                },
              },
              text: {
                button: 'Add to cart',
              },
            },
          },
        });
      });
    }
  }, []);

  return <div id="product-component-1737156121375"></div>;
};

export default ShopifyBuyButton;
