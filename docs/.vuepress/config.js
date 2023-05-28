import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png`,}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png`,}],
    ],
    lang: 'ru_RU',
    title: 'Distortion Craft Wiki',
    description: 'Distortion Craft Wiki',
    port: '8080', //Порт на котором запускается VuePress
    theme: defaultTheme({
        repo: 'BCBAdrian/DistortionCraft-Wiki',
        docsRepo: 'https://github.com/BCBAdrian/DistortionCraft-Wiki',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                editLinkText: 'Измените эту страницу на GitHub',
                lastUpdatedText: "Последнее обновление",
                notFound: [
                    "Здесь ничего нет.",
                    "Как мы тут оказались?",
                    "Похоже, у нас есть несколько неработающих ссылок."
                ],
                backToHome: "Вернуться на главную",
                openInNewWindow: "открыть в новом окне",
                toggleDarkMode: "переключить темный режим",
                toggleSidebar: "переключить боковую панель",
                contributors: false,
                contributorsText: "Спонсоры",
            },
        },
        logo: 'images/hero.png',
        navbar: [
            {
                text: 'Руководство',
                children: [
                    '/general/README.md',
                    '/clans/README.md',
                ],
            },
            {
                text: 'Веб карта',
                link: 'http://mc.distortioncraft.ru:8123/#world;surface;76,64,70;0',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/QPRhmXMZp4',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'Руководство',
                    collapsible: false,
                    children: [
                        '/general/README.md',
                        '/clans/README.md',
                    ],
                },
            ],
        },
    }),
    plugins: [
        [
        ],
    ]
})