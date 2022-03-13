export default {
    data(){
        return {
            x:100,
            name:'anyName'
            // 说明；如果混入后的属性、方法与原有的vue组件冲突，则会以原组件的为准，混入只会做属性和方法的增强，不会替换
        }
    },
    methods:{
        showMsg(){
            alert('展示信息')
        }
    },
    mounted(){
        console.log({},'hello....')
    }
}