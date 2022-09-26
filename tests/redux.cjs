async function pageLoad (page) {
  await page.goto('http://localhost:5173/06-redux')
};

module.exports = { pageLoad }
