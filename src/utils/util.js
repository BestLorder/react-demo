/**
 * @description: 获取url参数
 * @param {type}
 * @return:
 */
export const getUrlParam = url => {
  const query = url || window.location.search.substring(1);
  const vars = query.split('&');
  const params = {};
  vars.map(item => {
    const [key, value] = item.split('=');
    if (key && value) {
      params[key] = value;
    }
    return item;
  });
  return params;
};
