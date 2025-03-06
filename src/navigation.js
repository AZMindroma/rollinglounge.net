import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      {
        text: 'Guides',
        links: [
          {
            text: 'Chinese TapTap Verification',
            href: getPermalink('/guides/chinesetaptap'),
          },
        ],
      },
      {
        text: 'FAQ',
        links: [
          {
            text: 'Rolling Lounge',
            href: getPermalink('/faq/rollinglounge'),
          },
          {
            text: 'Rolling Sky Android',
            href: getPermalink('/faq/rsandroid'),
          },
          {
            text: 'Rolling Sky Fanmades',
            href: getPermalink('/faq/rsfanmade'),
          },
        ],
      },
  ],
  actions: [{ text: 'Rolling Lounge Wiki', href: 'https://rollinglounge.miraheze.org/', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/bEZRMZQ' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@rollinglounge' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AZMindroma/rollinglounge.net' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://persistent.rollinglounge.net/assets/images/RLLogoNew.png" alt="RL logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://azmindroma.de/"> AZMindroma</a> · 
  `,
};
