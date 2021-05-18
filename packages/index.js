import draggableButton from './src/index.vue';
draggableButton.install = function(Vue) {
    Vue.component(draggableButton.name, draggableButton);
};
export default draggableButton;
