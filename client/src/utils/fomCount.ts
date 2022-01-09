export function displayEmptyRequired(items: NodeListOf<HTMLAnchorElement>) {
  const btn: any = document.querySelector('[data-target="btn"]')
  const emptyItems = Array.prototype.filter.call(items, (node) => {
    return !node.value
  })
  const countNum: number = emptyItems.length
  if (countNum <= 0) {
    btn.classList.add('is-success')
  } else {
    btn.classList.remove('is-success')
  }
}
