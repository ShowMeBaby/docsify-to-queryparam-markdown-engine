function getMdFile(target) {
  return Promise.resolve()
    .then(() => fetch(target))
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status)
      }
      return response.text()
    })
}

function getElementsByClassName(classname) {
  return Array.from(document.getElementsByClassName(classname))
}

function getElementById(id) {
  return document.getElementById(id)
}

function getUrlFileName(url) {
  const urlArr = url.split('?')[0].split('/')
  return urlArr[urlArr.length - 1]
}

function toCustom(config, vm) {
  if (vm.route.query.custom) {
    let hideSidebar = false
    config.hideClassName.forEach(function (classname) {
      getElementsByClassName(classname).forEach(function (el) {
        if (classname != 'content') {
          el.style.display = 'none'
          if (classname === 'sidebar') {
            hideSidebar = true
          }
        }
      })
    })
    if (hideSidebar) {
      getElementsByClassName(['content']).forEach(function (el) {
        el.style.left = '0px'
      })
    }
  }
}

export function install(hook, vm) {
  const config = Object.assign(
    {},
    {
      hideClassName: [
        'cover',
        'sidebar',
        'sidebar-toggle',
        'github-corner'
      ]
    },
    vm.config.queryParamMarkdownEngine
  )

  hook.mounted(() => toCustom(config, vm))
  hook.beforeEach((content, next) => {
    const mdurl = vm.route.query.mdurl
    if (mdurl) {
      getMdFile(mdurl)
        .then(data => next(data))
        .catch(err => console.error(err))
    } else {
      next(content)
    }
  })
  hook.doneEach(() => {
    const mdurl = vm.route.query.mdurl
    let oldtitle = document.title
    oldtitle = oldtitle.endsWith('.md')
      ? oldtitle.substring(0, oldtitle.length - 3)
      : oldtitle

    if (mdurl) {
      const newtitle = getUrlFileName(mdurl)
      // 若远程md链接存在则修改title名
      document.title = newtitle
      if (vm.config.autoHeader) {
        // 若autoHeader为true,则修改对应标题为远程文件名
        const el = getElementById(oldtitle + 'md')
        if (el && el.children) {
          const childrenTagA = el.children[0]
          childrenTagA.setAttribute('data-id', newtitle)
          childrenTagA.setAttribute('href', 'javascript:void(0);')
          childrenTagA.innerHTML = `<span>${newtitle}</span>`
          el.id = newtitle
        }
      }
    }
    // 执行隐藏页面元素操作
    toCustom(config, vm)
  })
}
