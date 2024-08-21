function toggleContentMore(contentClassName, btnClassName) {
  const contentElement = document.querySelector(`.${contentClassName}`)
  const btnElement = document.querySelector(`.${btnClassName}`)

  return () => {
    const isShown = contentElement.classList.toggle(
      `${contentClassName}--shown`
    )
    btnElement.classList.toggle('more-button--shown')

    isShown
      ? (btnElement.textContent = 'Скрыть')
      : (btnElement.textContent = 'Читать далее')
  }
}

module.exports = { toggleContentMore }
