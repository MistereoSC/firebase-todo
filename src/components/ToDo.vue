<template>
	<div class="main-container">
		<div class="header-container">
			<div class="sub-container">
				<img src="/favicon.ico" />
				<span>Firebase ToDo</span>
			</div>
			<div class="sub-container">
				<form @submit.prevent="addTask">
					<input
						v-model="taskInput"
						type="text"
						placeholder="I need to . . ."
					/>
					<button>Add</button>
				</form>
			</div>
		</div>
		<div class="todo-container">
			<ToDoItem
				v-for="task in tasks"
				:key="task.id"
				:checked="task.done"
				:message="task.message"
				@delete="deleteTask(task)"
				@toggleDone="
					(val) => {
						toggleDoneTask(val, task)
					}
				"
			></ToDoItem>
		</div>
	</div>
</template>

<style scoped>
.main-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	background-color: var(--color-background);
}

.header-container {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	height: 150px;
	width: 100%;
	margin-bottom: 20px;
	background: var(--color-background-mute);

	position: fixed;
	z-index: 1;
}
.todo-container {
	margin-top: 180px;
}
.sub-container img {
	width: 96px;
	height: 96px;
	margin: -14px;
}
.sub-container span {
	font-size: 24pt;
	font-weight: 600;
	margin: 0;
}
.header-container .sub-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

form {
	width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
}
form button {
	background: var(--vt-c-accent-2);
	border: 0;
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	font-size: 12pt;
	font-weight: 600;
	width: 74px;
}
form input {
	border: 0;
	padding: 10px;
	border-radius: 6px;
	color: var(--color-text-negative);
	font-size: 12pt;
	width: 500px;
}
</style>

<script>
import ToDoItem from './ToDoItem.vue'
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
} from 'Firebase/firestore'
export default {
	inject: ['firebase'],
	components: {ToDoItem},
	data() {
		return {
			tasks: [],
			taskInput: '',
			db: this.firebase,
			colRef: null,
		}
	},
	mounted() {
		this.colRef = collection(this.db, 'tasks')
		getDocs(this.colRef)
			.then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					this.tasks.push({...doc.data(), id: doc.id})
				})
			})
			.catch((err) => {
				console.log(err)
			})
	},
	methods: {
		addTask() {
			console.log(this.taskInput)
			const r = addDoc(this.colRef, {
				done: false,
				message: this.taskInput,
			}).then((v) => {
				this.tasks.push({
					done: false,
					message: this.taskInput,
					id: v.id,
				})
				this.taskInput = ''
			})
		},
		deleteTask(e) {
			const docRef = doc(this.db, 'tasks', e.id)
			deleteDoc(docRef)
			this.tasks = this.tasks.filter((task) => task.id != e.id)
		},
		toggleDoneTask(v, e) {
			const docRef = doc(this.db, 'tasks', e.id)
			updateDoc(docRef, {done: v})
		},
	},
	computed: {},
}
</script>
