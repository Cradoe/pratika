import { joinURL } from 'ufo'
// import {} from '~image'

export function getImage ( src, { _modifiers, baseURL } = {}, { _options, _nuxtContext, _$img } ) {
    // const { width, height, format, fit, ...providerModifiers } = modifiers
    const operations = []
    // process modifiers
    const operationsString = operations.join( ',' )
    return {
        url: joinURL( baseURL, operationsString, src )
    }
}