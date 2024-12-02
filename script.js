//******************************** INITIALISATIONS (AJOUTER CARTE)

// Récupération du bouton 
const addBtn = document.querySelector('#btn');

// Création d'un écouteur d'évènement au clique, ajouter une tâche 
addBtn.addEventListener('click',addTask); 

//récupération des cartes 
const taskCard = document.querySelector('.todoCard');

//récupération du conteneur des cartes
const tasksContainer = document.querySelector("#todoCards"); 


count = 1

//******************************** FONCTION AJOUTER CARTE 

function addTask(){
    
    const newTask = taskCard.cloneNode(true); // Clône la carte 
    const newDelBtn = newTask.querySelector('.delBtn'); // récupère le bouton supprimer de la nouvelle carte (carte clônée)
    const newTextArea = newTask.querySelector('.task'); // récupère la zone de texte de la nouvelle carte (carte clônée)

    newTextArea.value = "New Task" // Définis la valeur du texte de la nouvelle carte (sinon elle serait vide)
   
    newDelBtn.addEventListener('click',function(){deleteTask(newTask)}); // fait fonctionner "supprimer" de la nouvelle carte

    tasksContainer.appendChild(newTask) // ajoute la nouvelle carte au conteneur (dans le DOM)

    count++
    console.log(count)
    updateCount()
    // updateCount(); //mise à jour du compteur
}
//******************************** INITIALISATIONS (SUPPRESSION D'UNE CARTE)

//Récupération du bouton "supprimer"
const delBtn = document.querySelector('.delBtn'); 
//Création d'un écouteur d'évènement au clique 
delBtn.addEventListener('click', function(){deleteTask(taskCard)});

//******************************** FONCTION SUPPRIMER CARTE 

function deleteTask(task){
    task.remove(); // supprime la tâche du DOM
    count-- // mise à jour du compteur
    console.log(count)
    updateCount()
}



//******************************** COMPTER LE NOMBRE DE CARDS

function updateCount(){
    document.getElementById('inputCount').value = count;    
}












