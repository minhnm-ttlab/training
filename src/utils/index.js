export function numberWithCommas(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export const numberFormat2 = (num) =>
  typeof num === 'number' ? (Math.round(num * 100) / 100).toFixed(2) : '0'

export const numberWithCommasFormat2 = (num = 0) => {
  const dotNum = numberFormat2(num)
  const tail = dotNum.split('.')[1]
  const commaNum = numberWithCommas(num)
  if (commaNum.includes('.')) return commaNum.replace(/\.[^.]*$/g, `.${tail}`)
  return commaNum.concat(`.${tail}`)
}

export const removeElement = (el) => {
  if (typeof el.remove !== 'undefined') el.remove()
  else el.parentNode.removeChild(el)
}

// add the component w/ the specified props
export const spawn = (id, propsData, Component, Vue, options) => {
  if (propsData) {
    if (options) {
      if (options.defaults) {
        propsData.defaults = options.defaults
      }
      if (options.defaultProps) {
        propsData = { ...options.defaultProps, ...propsData }
      }
    }
  }
  const Instance = Vue.extend(Component)
  return new Instance({
    el: document.getElementById(id).appendChild(document.createElement('div')),
    propsData,
  })
}
