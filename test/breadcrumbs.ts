import { CATEGORY_LEVEL_0, CATEGORY_LEVEL_1 } from '../src/constants'
import { buildBreadCrumb } from '../src/buildBreadCrumb'

const initialState = [
    {
        name: 'Accueil',
        route: { name: 'home' },
    },
    {
        name: 'Tous les produits',
        route: { name: 'search' },
    },
]

const familyName = 'Foo'
const categoryName = 'Bar'
describe('#breadcrumbs', () => {
    it('should return breadcrumbs with home and all products when no family selected', () => {
        expect(buildBreadCrumb(null, null, null)).toEqual(initialState)
    })
    it('should return breadcrumbs with home and family when only family selected', () => {
        expect(buildBreadCrumb(null, familyName, null)).toEqual([
            ...initialState,
            {
                name: familyName,
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: familyName },
                },
            },
        ])
    })
    it('should return breadcrumbs with home, family, and category when category selected', () => {
        expect(buildBreadCrumb(null ,familyName, categoryName)).toEqual([
            ...initialState,
            {
                name: familyName,
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: familyName },
                },
            },
            {
                name: categoryName,
                route: {
                    name: 'search',
                    query: {
                        [CATEGORY_LEVEL_0]: familyName,
                        [CATEGORY_LEVEL_1]: categoryName,
                    },
                },
            },
        ])
    })
    it('should return breadcrumbs with home, family when all-product category selected', () => {
        expect(buildBreadCrumb(null, familyName, null)).toEqual([
            ...initialState,
            {
                name: familyName,
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: familyName },
                },
            },
        ])
    })
    it('should return breadcrumbs with home and supplier when supplier is selected', () => {
        expect(buildBreadCrumb(null, null, 'Fertiberia')).toEqual([
            ...initialState,
            {
                name: 'Fertiberia',
                route: {
                    name: 'search',
                    query: { 'menu[supplier]': 'Fertiberia' },
                },
            },
        ])
    })
})
