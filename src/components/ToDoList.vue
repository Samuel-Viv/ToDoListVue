
<template>
    <div>
        <main>
            <h1 class="title">Ma toDo List</h1>

            <section class="bloc__toDo">
                <form @submit.prevent="addToDo">
                    <p>Que comptez-vous faire ? </p>
                    <input type="text" placeholder="Inserer votre tâche !" v-model="newToDo">
                    <input type="submit" value="Ajouter à la liste" class="add-list">
                </form>
            </section>

            <section class="bloc__list">
                <h2 v-show="todos.length === 0">Vous n'avez pas de taches</h2>
                <pre>{{ todos }}</pre>
                <div v-for="todo in todos" :key="todo.id">
                    <p>{{ todos.text }}</p>
                </div>
            </section>
        </main>
    </div>
</template>


<script setup>
import { ref } from 'vue';

let id = 0
//recupération des data du input grace à  v:model
const newToDo = ref('')
// donner a chaque tache une id unique
const todos = ref([])
// au click du submit
// faire une fonction qui envoye du input text dans le bloc__list 
// les envoyer dans le composant newToDo
function addToDo() {
    todos.value.push({ id: id++, text: newToDo.value })
    newToDo.value = ""
}


</script>


<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.bloc__toDo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 20px;
    padding: 20px;
    border: 1px orange solid;
    border-radius: 15px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 50%;
    padding: 20px;
    margin: 20px;
}

p {
    font-size: 1rem;
}

.add-list {
    background-color: green;
    border: 1px solid black;
    border-radius: 10px;
    width: 50%;
    padding: 10px;
    color: whitesmoke;
    font-size: 0.9em;
}

.add-list:hover {
    background-color: rgba(0, 128, 0, 0.636);
    cursor: pointer;
}

.bloc__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 20px;
    padding: 20px;
    border: 1px orange solid;
    border-radius: 15px;
}
</style>