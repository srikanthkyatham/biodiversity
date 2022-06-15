import Config from '../app.json'

export const whatsappChat = (text = '') => {

  const encodeText = encodeURI('Welcome to Diversity Biosciences.How can we help you!')
  window.open(`https://api.whatsapp.com/send?phone=${Config.mobile_no}&text=${encodeText}`, '_blank')
}