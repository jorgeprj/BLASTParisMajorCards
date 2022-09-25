const listSelectedPlayers = document.querySelectorAll('.player')
const playersCard = document.querySelectorAll('.card-player')

listSelectedPlayers.forEach(player => {
    player.addEventListener('click', () => {
        const cardplayeropen = document.querySelector('.open')
        cardplayeropen.classList.remove('open')

        const idSelectedPlayer = player.attributes.id.value
        
        const idCardPlayerToOpen = 'card-' + idSelectedPlayer

        const cardPlayerToOpen = document.getElementById(idCardPlayerToOpen)
        cardPlayerToOpen.classList.add('open')

        const activePlayerOnList = document.querySelector('.active')
        activePlayerOnList.classList.remove('active')

        const playerSelecionadoNaListagem = document.getElementById(idSelectedPlayer)  
        playerSelecionadoNaListagem.classList.add('active')       

    })
})