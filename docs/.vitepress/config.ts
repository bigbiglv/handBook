import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "笔记",
  description: "bbk的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dart', link: '/drat/index' },
      { text: 'Javascript', link: '/javascript/index' },
      { text: 'Git', link: '/git/index' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    // ],
    sidebar: {
      '/Dart': [
        {
          text: 'Dart',
          items: [
            { text: 'Dart1', link: '/api-examples' },
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        },
      ],
      '/Git': [
        {
          text: 'Git',
          items: [
            { text: 'Dart1', link: '/api-examples' },
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ]
        },
      ],
      '/Javascript': [
        {
          text: 'js原生',
          collapsed: true,
          items: [
            { text: '解构赋值', link: '/javascript/解构赋值' },
            { text: '事件循环', link: '/javascript/事件循环' },
            { text: '数组遍历相关', link: '/javascript/数组遍历相关' },
            { text: 'AudioContext', link: '/javascript/AudioContext' },
          ]
        },
        {
          text: 'axios',
          collapsed: true,
          items: [
            { text: '错误处理', link: '/javascript/axios/错误处理' },
            { text: '发送请求', link: '/javascript/axios/发送请求' },
            { text: '拦截器', link: '/javascript/axios/拦截器' },
            { text: '取消请求', link: '/javascript/axios/取消请求' },
            { text: 'axios实例', link: '/javascript/axios/axios实例' },
          ]
        },
        {
          text: 'http',
          collapsed: true,
          items: [
            { text: 'http缓存', link: '/javascript/http/http缓存' },
          ]
        },
        {
          text: 'npm',
          collapsed: true,
          items: [
            { text: '安装和卸载', link: '/javascript/npm/安装和卸载' },
            { text: '发布和删除', link: '/javascript/npm/发布和删除' },
            { text: '切换镜像', link: '/javascript/npm/切换镜像' },
            { text: '遇到的问题', link: '/javascript/npm/遇到的问题' },
            { text: 'packageJson', link: '/javascript/npm/packageJson' },
          ]
        },
        {
          text: 'react',
          collapsed: true,
          items: [
            { text: '函数式和类式组件', link: '/javascript/react/函数式和类式组件' },
            { text: '跨域代理', link: '/javascript/react/跨域代理' },
            { text: '生命周期', link: '/javascript/react/生命周期' },
            { text: '事件处理', link: '/javascript/react/事件处理' },
            { text: '虚拟Dom渲染', link: '/javascript/react/虚拟Dom渲染' },
            { text: '组件传参', link: '/javascript/react/组件传参' },
            { text: 'JSX语法', link: '/javascript/react/JSX语法' },
            { text: 'Props', link: '/javascript/react/Props' },
            { text: 'state和事件绑定', link: '/javascript/react/state和事件绑定' },
          ]
        },
        {
          text: 'svelte',
          collapsed: true,
          items: [
            { text: '富文本', link: '/javascript/svelte/富文本' },
            { text: '基本语法', link: '/javascript/svelte/基本语法' },
            { text: '计算属性', link: '/javascript/svelte/计算属性' },
            { text: '事件处理', link: '/javascript/svelte/事件处理' },
            { text: '数据监听', link: '/javascript/svelte/数据监听' },
            { text: '数据响应式', link: '/javascript/svelte/数据响应式' },
            { text: '双向绑定', link: '/javascript/svelte/双向绑定' },
            { text: '组件传参', link: '/javascript/svelte/组件传参' },
          ]
        },
        {
          text: 'typescript',
          collapsed: true,
          items: [
            { text: '常见问题', link: '/javascript/typescript/常见问题' },
            { text: '泛型', link: '/javascript/typescript/泛型' },
            { text: '高级类型', link: '/javascript/typescript/高级类型' },
            { text: '函数重载', link: '/javascript/typescript/函数重载' },
            { text: '基础配置', link: '/javascript/typescript/基础配置' },
            { text: '接口inteface', link: '/javascript/typescript/接口inteface' },
            { text: '类型别名type', link: '/javascript/typescript/类型别名type' },
            { text: '类型推断', link: '/javascript/typescript/类型推断' },
            { text: '声明类型', link: '/javascript/typescript/声明类型' },
            { text: 'class', link: '/javascript/typescript/class' },
            { text: 'tsconfigJson', link: '/javascript/typescript/tsconfigJson' },
          ]
        },
        {
          text: 'vite',
          collapsed: true,
          items: [
            { text: '常用插件', link: '/javascript/vite/常用插件' },
            { text: '接口代理', link: '/javascript/vite/接口代理' },
            { text: '路径别名', link: '/javascript/vite/路径别名' },
            { text: '问题合集', link: '/javascript/vite/问题合集' },
            { text: '资源导入', link: '/javascript/vite/资源导入' },
            { text: 'scss和less', link: '/javascript/vite/scss和less' },
          ]
        },
        {
          text: 'vue',
          collapsed: true,
          items: [
            { 
              text: 'vue-router',
              collapsed: true, 
              items: [
                { 
                  text: 'index',
                  link: '/javascript/vue/vue-router/index',
                }
              ] 
            },
            { 
              text: 'pinia',
              collapsed: true, 
              items: [
                { text: '安装', link: '/javascript/vue/vue-router/安装' },
                { text: '数据响应式', link: '/javascript/vue/vue-router/数据响应式' },
                { text: '修改、重置和监听', link: '/javascript/vue/vue-router/修改、重置和监听' },
                { text: 'actions', link: '/javascript/vue/vue-router/actions' },
                { text: 'getter', link: '/javascript/vue/vue-router/getter' },
                { text: 'state', link: '/javascript/vue/vue-router/state' },
              ] 
            },
            { text: '过渡和动画', link: '/javascript/vue/过渡和动画' },
            { text: '列表过渡动画', link: '/javascript/vue/列表过渡动画' },
            { text: '生命周期', link: '/javascript/vue/生命周期' },
            { text: '提取响应式对象属性', link: '/javascript/vue/提取响应式对象属性' },
            { text: '透传', link: '/javascript/vue/透传' },
            { text: '问题合集', link: '/javascript/vue/问题合集' },
            { text: '响应式数据处理', link: '/javascript/vue/响应式数据处理' },
            { text: '与vue2比较', link: '/javascript/vue/与vue2比较' },
            { text: '自定义hooks', link: '/javascript/vue/自定义hooks' },
            { text: '自定义ref', link: '/javascript/vue/自定义ref' },
            { text: '组合式api和选项式api', link: '/javascript/vue/组合式api和选项式api' },
            { text: '组件传参', link: '/javascript/vue/组件传参' },
            { text: '组件异步引入', link: '/javascript/vue/组件异步引入' },
            { text: 'computed', link: '/javascript/vue/computed' },
            { text: 'css', link: '/javascript/vue/css' },
            { text: 'defineExpose', link: '/javascript/vue/defineExpose' },
            { text: 'ref和reactive原理', link: '/javascript/vue/ref和reactive原理' },
            { text: 'teleport', link: '/javascript/vue/teleport' },
            { text: 'v-model', link: '/javascript/vue/v-model' },
            { text: 'watch数据监听', link: '/javascript/vue/watch数据监听' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
