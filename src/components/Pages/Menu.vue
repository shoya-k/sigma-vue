<template>
  <div class="layout-wrapper layout-static">
    <TopBar />

    <div class="layout-sidebar layout-sidebar-dark">
      <MenuBar :items="menu" />
    </div>

    <div class="layout-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from "../Organisms/TopBar";
import MenuBar from "../Organisms/MenuBar";

export default {
  components: {
    TopBar: TopBar,
    MenuBar: MenuBar,
  },
  data() {
    return {
      menu: [
        { label: "メニュー", icon: "pi pi-fw pi-home", name: "menu" },
        {
          label: "販売管理",
          icon: "pi pi-fw pi-folder",
          items: [
            {
              label: "受払照会",
              icon: "pi pi-fw pi-folder",
              name: "receiptPaymentInquiry",
            },
          ],
        },
        {
          label: "在庫管理",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "現在庫照会",
              icon: "pi pi-fw pi-file",
              name: "currentWarehouseInquiry",
            },
          ],
        },
        {
          label: "テストページ",
          icon: "pi pi-fw pi-globe",
          name: "testPages",
        },
      ],
    };
  },
};
</script>
