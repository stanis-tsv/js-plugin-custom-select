class Dropdown {
  constructor(selector, options) {
    this.element = document.querySelector(selector)
    this.items = options.items
    this.arrowIcon = '<span>&#x25BC;</span>'
    this.label = this.element.querySelector('.dropdown_label')
    this.label.innerHTML = `<img src="${this.items[0].flag}"> ${this.items[0].label} ${this.arrowIcon}`

    this.itemsHtml = this.items.map(i => {
      return `<li data-id="${i.id}" style="background-image:url('${i.flag}')">${i.label}</li>`
    }).join(' ')
    this.element.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin', this.itemsHtml)

    this.element.addEventListener('click', event => {
      if (event.target.classList.contains('dropdown_label') || event.target.closest('img') || event.target.closest('span')) {
        if (this.element.classList.contains('open')) {
          this.close()
        } else {
          this.open()
        }
      } else if (event.target.tagName.toLowerCase() === 'li') {
        this.select(event.target.dataset.id)
      }
    })
  }

  select(id) {
    const item = this.items.find(i => i.id === id)
    this.label.innerHTML = `<img src="${item.flag}"> ${item.label} ${this.arrowIcon}`
    this.close()
  }

  open() {
    this.element.classList.add('open')
  }

  close() {
    this.element.classList.remove('open')
  }
}

const dropdown = new Dropdown('#dropdown', {
  items: [
    {label: 'Ukraine', id: 'ua', flag: 'img/ukraine.png'},
    {label: 'Switzerland', id: 'sw', flag: 'img/switzerland.png'},
    {label: 'United Kingdom', id: 'uk', flag: 'img/uk.png'},
    {label: 'Canada', id: 'ca', flag: 'img/canada.png'},
    {label: 'USA', id: 'us', flag: 'img/usa.png'}
  ]
})