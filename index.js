
let btnEffectuer = document.querySelector(".effectuer")
let resultat = document.querySelector(".resultat")

let array = ["La motivation vous tirent vers le succès, mais l'habitude vous y conduit" ,

"Votre seule limite est vous-mêmez" ,

"La motivation est ce qui vous met en route, l'habitude est ce qui vous fait continuer." ,

"La motivation est ce qui vous fait commencer. L'habitude est ce qui vous fait continuer." ,

"La motivation est ce qui vous lance. L'habitude est ce qui vous maintient.",

"La motivation vient de l'intérieur. Personne ne peut vous motiver comme vous-même.",

"Votre potentiel est infini. Ne laissez pas vos peurs vous limiter.",

"Le seul moyen de faire un excellent travail est d'aimer ce que vous faites." ,

"Vous n'avez pas à être grand pour commencer, mais vous devez commencer pour être grand.",

"Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",

"La motivation est ce qui vous fait commencer. L'habitude est ce qui vous fait continuer.",

"Il n'y a pas de raccourci vers n'importe quel endroit qui vaille la peine d'être." ,

"Ne reportez pas vos rêves à demain. Commencez dès aujourd'hui.",
"Chaque progrès, même le plus petit, est un pas vers le succès." ,

"Si vous voulez réussir, vous devez accepter de prendre des risques." ,

"Les obstacles sont ces choses que vous voyez lorsque vous détournez vos yeux de l'objectif." ,

"La motivation vous tirent vers le succès, mais l'habitude vous y conduit.",

"N'ayez pas peur de viser haut. Vous n'atteindrez jamais plus haut que vous ne visez.",

"La meilleure façon de prédire l'avenir est de le créer." ,

"Le succès est la somme de petits efforts répétés jour après jour.",

"La motivation est ce qui vous met en route, l'habitude est ce qui vous fait continuer.",

"La motivation est ce qui vous lance. L'habitude est ce qui vous maintient." ,

"Il n'y a pas de secrets pour réussir. Il suffit de travailler dur et de ne jamais abandonner.",

"Ne laissez pas la peur de perdre être plus forte que l'excitation de gagner." ,

"Les seules limites qui existent sont celles que vous vous imposez.",

"Le seul moyen de faire du bon travail est d'aimer ce que vous faites." ,

"N'abandonnez jamais sur un rêve juste à cause du temps qu'il faudra pour l'accomplir. Le temps passera de toute façon." ,

"Les plus grandes réalisations ont commencé par un simple désir de faire mieux." ,

"N'attendez pas pour agir. L'avenir appartient à ceux qui se préparent dès aujourd'hui.",

"La motivation vous tirent vers le succès, mais l'habitude vous y conduit." 


] 


btnEffectuer.addEventListener('click' , effectuer)


function effectuer(){
    let random = Math.floor(Math.random()*31)
    resultat.textContent = array[random]
   resultat.classList.add("resultatClass")
  

}