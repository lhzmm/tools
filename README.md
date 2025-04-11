# 工具集

## Ajax

```javascript
import { Ajax } from '@lhzmm/tools'

const instance = new Ajax()
const createdApi = instance.createAjax('request/url', 'POST')

createdApi({ x: 1 }, { headers: { token: 'xxx' } }).then((message) => console.log(message))
```

## Loop
```javascript
import { Loop } from '@lhzmm/tools'

const timer = new Loop(fn, {interval: 1000, leading: true})

```

## getAxisMaxAndMins
