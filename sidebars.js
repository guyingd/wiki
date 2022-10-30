/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  haitang: [
    doc("bot/index", "海棠"),
    doc("bot/selectors", "选择器"),
    doc("bot/box-model", "盒子模型"),
    doc("bot/entities", "字符实体"),
    category("bot/font/index", "字体", [
      doc("bot/font/import", "导入字体"),
      doc("bot/font/display", "字体显示"),
    ]),
    category("bot/list/index", "List", [
      doc("bot/list/list-style-type", "list-style-type"),
    ]),
    category("bot/properties/index", "属性", [
      doc("bot/properties/box-shadow", "box-shadow"),
      doc("bot/properties/overflow", "overflow"),
      doc("bot/properties/resize", "resize"),
      doc("bot/properties/white-space", "white-space"),
    ]),
    doc("bot/hide-scroll-bar-style", "隐藏滚动条样式"),
    category("bot/solutions/index", "解决方案", [
      doc("bot/solutions/code-change-design", "代码变更效果"),
      doc("bot/solutions/svg", "修改 SVG 样式"),
      doc("bot/solutions/bootstrap", "Bootstrap"),
    ]),
  ],

};

function doc(id, label) {
  return {
    type: "doc",
    id: id,
    label: label,
  };
}

function category(id, label, items) {
  return {
    type: "category",
    label: label,
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: id,
    },
    items: items,
  };
}

module.exports = sidebars;
