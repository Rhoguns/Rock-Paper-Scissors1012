
const optionButton=document.querySelectorAll('[data-option]')
const finalcolumn = document.querySelector('data-final-column')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const OPTIONS =[

{
    name: 'rock',
    beats: 'scissors'
},

{
    name: 'paper',
    beats:'rock'
},
{
    name: 'scissors',
    beats: 'paper'
}
]


function myFunction1() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "" + person + "!";
    }
  }

  optionButton.forEach(optionButtons =>{
      optionsButton.addEventListener('click',e =>{
       const OptionName=optionButton.dataset.option
       const option= OPTIONS.find(option=> option.name === OptionName)
       chooseOption(option)
      })

  })
  
function chooseOption(option){
    const cpuOption = randomOption()
    const youwon = isWinner(option,cpuOption)
    const cpuwon = isWinner(cpuOption,option)
    
    addOptionchoice(cpuOption, cpuwon)
    addOptionchoice(option, youwon)
   
   
}


function isWinner(option,oppoption){
return option.beats === oppoptions.name
}

function randomOption() {
    const randomIndex = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[randomIndex]
}

