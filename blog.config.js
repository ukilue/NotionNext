// 注: process.env.XX是Vercel的環境變量，配置方式見：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'medium', // 當前主題，在themes文件夾下可找到所有支持的主題；主題名稱就是文件夾名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-TW', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 偽靜態路徑，開啟後所有文章URL都以 .html 結尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新緩存間隔 單位(秒)；即每個頁面有60秒的純靜態期、此期間無論多少次訪問都不會抓取notion數據；調大該值有助於節省Vercel資源、同時提升訪問速率，但也會使文章更新有延遲。
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日間模式 ， dark夜間模式， auto根據時間和主題自動夜間模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜間模式起至時間，false時關閉根據時間自動切換夜間模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'ClaireGUO', // 您的昵稱 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '發現新事物', // 作者簡介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://richnote.vercel.app/', // 網站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'AI,推薦,省錢,理財,優惠', // 網站關鍵詞 英文逗號隔開
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默認使用 /public/favicon.ico，支持在線圖片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 備案號 閩ICP備XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || '', // 備案查詢鏈接，如果用了萌備等備案請在這里填寫
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', // 公安備案號，例如 '浙公網安備3xxxxxxxx8號'

  // RSS訂閱
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否開啟RSS訂閱功能

  // 其它覆雜配置
  // 原配置文件過長，且並非所有人都會用到，故此將配置拆分到/conf/目錄下, 按需找到對應文件並修改即可
  ...require('./conf/comment.config'), // 評論插件
  ...require('./conf/contact.config'), // 作者聯系方式配置
  ...require('./conf/post.config'), // 文章與列表配置
  ...require('./conf/analytics.config'), // 站點訪問統計
  ...require('./conf/image.config'), // 網站圖片相關配置
  ...require('./conf/font.config'), // 網站字體
  ...require('./conf/right-click-menu'), // 自定義右鍵菜單相關配置
  ...require('./conf/code.config'), // 網站代碼塊樣式
  ...require('./conf/animation.config'), // 動效美化效果
  ...require('./conf/widget.config'), // 懸浮在網頁上的掛件，聊天客服、寵物掛件、音樂播放器等
  ...require('./conf/ad.config'), // 廣告營收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引
  ...require('./conf/performance.config'), // 性能優化配置

  // 高級用法
  ...require('./conf/layout-map.config'), // 路由與布局映射自定義，例如自定義特定路由的頁面布局
  ...require('./conf/notion.config'), // 讀取notion數據庫相關的擴展配置，例如自定義表頭
  ...require('./conf/dev.config'), // 開發、調試時需要關注的配置

  // 自定義外部腳本，外部樣式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 自定義菜單
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu類型的菜單，替代了3.12版本前的Page類型

  // 文章列表相關設置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允許覆制頁面內容 默認允許，如果設置為false、則全棧禁止覆制內容。

  // 側欄布局 是否反轉(左變右,右變左) 已支持主題: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 歡迎語打字效果,Hexo,Matery主題支持, 英文逗號隔開多個歡迎語。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一個程序員, Hi，我是一個打工人,Hi，我是一個幹飯人,歡迎來到我的博客🎉',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
