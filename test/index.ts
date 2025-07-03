import { test } from '@substrate-system/tapzero'
import { lockBodyScrolling } from '../src/index.js'

test("Doesn't explode", async t => {
    t.plan(1)
    lockBodyScrolling(document.body)
    t.ok('ok', "Doesn't throw")
})
