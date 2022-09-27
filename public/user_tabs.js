var tab_content = {
  Admin: {
    tab_list: [
      { Name: "Entity", function: "get_entity_list()" },
      { Name: "Room", function: "get_room_list()" },
    ],
  },
  User: {
    tab_list: [
      { Name: "Order", function: "get_order_list()" },
      { Name: "Advertisements", function: "get_ads_list()" },
      { Name: "Settlements", function: "get_settlement_list()" },
    ],
  },
  Finance_admin: {
    tab_list: [
      { Name: "Customer", function: "get_user_list(0)" },
      { Name: "Order", function: "get_order_list('tab_load')" },
      { Name: "Campaign", function: "get_campaign_list()" },
      { Name: "Settlements", function: "get_settlement_list()" },
    ],
  },
  Campaign_admin: {
    tab_list: [
      { Name: "Customer", function: "get_user_list(0)" },
      { Name: "Order", function: "get_order_list('tab_load')" },
      { Name: "Campaign", function: "get_campaign_list()" },
      { Name: "Products", function: "get_product_list()" },
      { Name: "Advertisements", function: "get_ads_list()" },
    ],
  },
};
