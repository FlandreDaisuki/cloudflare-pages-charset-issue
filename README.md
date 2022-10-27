# cloudflare-pages-charset-issue

All source code under [`/dist`](/dist) are saved with UTF-8 encoding.

The [en.html](https://cloudflare-pages-charset-issue.pages.dev/en.html) will work all fine.
The [ja.html](https://cloudflare-pages-charset-issue.pages.dev/ja.html) load the script without charset will show wrong content.

## commands

publish

```shell
npx wrangler pages publish ./dist --project-name cloudflare-pages-charset-issue
```
