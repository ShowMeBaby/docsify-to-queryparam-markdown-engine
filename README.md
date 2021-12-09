# docsify-to-queryparam-markdown-engine

Use docsify as markdown engine, get markdown link from queryparam and render

## Install
1. Configure docsify-to-queryparam-markdown-engine (optional):

    ```html
    <script>
    window.$docsify = {
      queryParamMarkdownEngine: {
        hideClassName: ['cover','sidebar','sidebar-toggle','github-corner'], // default ['cover','sidebar','sidebar-toggle','github-corner']
      },
    }
    </script>
    ```

2. Insert script into docsify document:

    ```html
    <script src="//cdn.jsdelivr.net/npm/docsify-to-queryparam-markdown-engine/dist/docsify-to-queryparam-markdown-engine.min.js"></script>
    ```

## Usage
Write your remote-markdown code like this:

> https://retrocode.io/#/?custom=1&mdurl=https://cdn.jsdelivr.net/gh/docsifyjs/docs-zh@master/README.md


It will be replaced by the raw text of the **mdurl** above into your doc file content.

If queryparam has 'custom=1' then will set all 'hideClassName' elements style to 'display:none'

## Options

### hideClassName

By default, we set the hideClassName as `['cover','sidebar','sidebar-toggle','github-corner']` for you.    
However, you can change this options as you like:

```javascript
window.$docsify = {
  queryParamMarkdownEngine: {
    hideClassName: ['classname'],
  },
}
```

## Example

- [index.html](example/index.html)
- [README.md](example/README.md)

# License

This project is licensed under the [MIT license](LICENSE).    
Copyright (c) ShowMeBaby (retrocode@qq.com)