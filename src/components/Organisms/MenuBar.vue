<template>
	<ul v-if="items" class="layout-menu">
		<template v-for="(item,i) of items">
			<li v-if="item" :key="i.label" :class="[{'active-menuitem': activeIndex === i && !item.name}]" role="none">
				<router-link v-if="item.name" :to="{name:item.name}" :class="['p-ripple',{'active-route': activeIndex === i}]"
							@click="onMenuItemClick($event,item,i)" exact role="menuitem" v-ripple>
					<i :class="item.icon"></i>
					<span>{{item.label}}</span>
					<i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
				</router-link>
				<a v-if="!item.name" href='#' :class="['p-ripple']"
					@click="onMenuItemClick($event,item,i)" role="menuitem" v-ripple>
					<i :class="item.icon"></i>
					<span>{{item.label}}</span>
					<i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
				</a>
				<transition name="layout-submenu-wrapper">
					<appmenu v-show="activeIndex === i" :items="item && item.items"></appmenu>
				</transition>
			</li>
		</template>
	</ul>
</template>
<script>
export default {
	name: 'appmenu',
	props: {
		items: Array,
	},
	data() {
		return {
			activeIndex : null
		}
	},
	methods: {
		onMenuItemClick(event, item, index) {
      if (!item.name) {
        event.preventDefault();
      }

			this.activeIndex = index === this.activeIndex ? null : index;
		},
	}
}
</script>
