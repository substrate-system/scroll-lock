import { lockBodyScrolling, unlockBodyScrolling } from '../src/index.js'
import './index.css'
import '../src/index.css'
import Debug from '@substrate-system/debug'
const debug = Debug()

document.getElementById('lock')?.addEventListener('click', ev => {
    ev.preventDefault()
    lockBodyScrolling(document.body)
    debug('lock')
})

document.getElementById('unlock')?.addEventListener('click', ev => {
    ev.preventDefault()
    unlockBodyScrolling(document.body)
    debug('unlocked')
})
