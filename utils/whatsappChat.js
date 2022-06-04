import Config from '../app.json'

export const whatsappChat = (text = '') => {

  const encodeText = encodeURI('Welcome to Diversity Biosciences %0a How can we help you!!')
  window.open(`https://api.whatsapp.com/send?phone=${Config.mobile_no.trimEnd()}&text=${encodeText}`, '_blank')
}