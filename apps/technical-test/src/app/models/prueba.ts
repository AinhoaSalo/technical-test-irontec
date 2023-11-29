import {writeFileSync} from 'fs'
import {compileFromFile} from 'json-schema-to-typescript'

async function generate() {
    writeFileSync('issues.d.ts', await compileFromFile('issues.json'))
}

generate()