const app = document.getElementById('app');

const examples = [
  { href: '01-swiper', label: '图片轮播组件' },
];

/**
 * 生成示例索引列表
 * @param {Array} links 链接
 */
function generateList(links) {
  return links.map(
    (link) => `<li><a href="${link.href}">${link.label}</a></li>`
  );
}

/**
 * 渲染列表
 * @param {Array} list 列表
 */
function renderList(list) {
  app.innerHTML = `<ul>${list.join('')}</ul>`;
}

renderList(generateList(examples));