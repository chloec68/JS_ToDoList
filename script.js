// Récupération du bouton ajouter
const addBtn = document.querySelector('#btn');

// Création d'un écouteur d'évènement au clique pour la première carte
addBtn.addEventListener('click',addTask); 

//récupération de la carte déjà créée
const taskCard = document.querySelector('.todoCard');

//récupération du conteneur des cartes
const tasksContainer = document.querySelector("#todoCards"); 

//Initialisation du compteur à 1
count = 1;

//Récupération du bouton "supprimer"
const delBtn = document.querySelector('.delBtn'); 

//Création d'un écouteur d'évènement au clique pour la 1ère carte
delBtn.addEventListener('click', function(){deleteTask(taskCard)});

// fonction créer une carte
function addTask(){
    const newTask = taskCard.cloneNode(true); // Clône la carte 
    const newDelBtn = newTask.querySelector('.delBtn'); // récupère le bouton supprimer de la nouvelle carte (carte clônée)
    const newTextArea = newTask.querySelector('.task'); // récupère la zone de texte de la nouvelle carte (carte clônée)
    newTextArea.value = "New Task" // Définis la valeur du texte de la nouvelle carte (sinon elle serait vide)
    const newSaveBtn = newTask.querySelector('.saveBtn'); //récupère le bouton
   
    newDelBtn.addEventListener('click',function(){deleteTask(newTask)}); // fait fonctionner "supprimer" de la nouvelle carte

    tasksContainer.appendChild(newTask); // ajoute la nouvelle carte au conteneur (dans le DOM)

    count++
    updateCount() ; //mise à jour du compteur
}

//fonction supprimer une carte
function deleteTask(task){
    task.remove(); // supprime la tâche du DOM
    count-- // mise à jour du compteur
    updateCount()
}

//compteur
function updateCount(){
    document.getElementById('inputCount').value = count;    
}






