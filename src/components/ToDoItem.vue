<template>
	<div class="todo-item-container">
		<div>
			<input
				type="checkbox"
				id="doneCheckbox"
				v-model="chk"
				@click="$emit('toggleDone', !chk)"
			/>
			<span class="todo-text" :class="{strikethrough: chk}">{{ message }}</span>
		</div>
		<div class="icons">
			<i class="material-icons" @click="$emit('delete')">delete</i>
		</div>
	</div>
</template>

<style scoped>
.todo-item-container {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 550px;
	height: 50px;
	margin-bottom: 12px;
	padding: 0 12px;

	background: var(--color-background-mute);
	border-radius: 5px;
}
.todo-text {
	margin-left: 12px;
	color: var(--color-text);
	font-weight: 500;
	font-size: 14pt;
}
.todo-text.strikethrough {
	text-decoration: line-through;
	color: var(--color-text-mute);
}

.icons i {
	cursor: pointer;
	user-select: none;
}
.icons i:hover {
	color: var(--vt-c-accent-2);
}
.todo-item-container input {
	width: 16px;
	height: 16px;
}
</style>

<script>
export default {
	emits: ['delete', 'toggleDone'],
	props: {
		message: String,
		checked: Boolean,
	},
	data() {
		return {
			chk: false,
		}
	},
	mounted() {
		this.chk = this.checked
	},
}
</script>
