import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "editable-console",
    description: "editable-console is a runtime-agnostic logging utility that allows you to create and modify console output dynamically.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/pages/README.md' }
        ],

        sidebar: [
            {
                text: 'Get Started',
                link: '/pages/README.md'
            },
            {
                text: 'Classes',
                items: [
                    { text: 'EditableConsole', link: '/pages/classes/EditableConsole' },
                    { text: 'EditableLog', link: '/pages/classes/EditableLog' },
                    { text: 'EditableMessage', link: '/pages/classes/EditableMessage' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/im-nassinger/editable-console' }
        ]
    }
})
