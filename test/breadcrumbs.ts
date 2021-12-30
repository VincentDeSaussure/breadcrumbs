import { CATEGORY_LEVEL_0, CATEGORY_LEVEL_1 } from '../src/constants'
import { buildBreadCrumb } from '../src/buildBreadCrumb'

describe('#breadcrumbs', () => {
    it('should return breadcrumbs with home and all products when no family selected', () => {
        expect(buildBreadCrumb(null, null, null)).toEqual([
            {
                name: 'Accueil',
                route: { name: 'home' },
            },
            {
                name: 'Tous les produits',
                route: { name: 'search' },
            },
        ])
    })
    it('should return breadcrumbs with home and family when only family selected', () => {
        expect(buildBreadCrumb(null, 'Foo', null)).toEqual([
            {
                name: 'Accueil',
                route: { name: 'home' },
            },
            {
                name: 'Tous les produits',
                route: { name: 'search' },
            },
            {
                name: 'Foo',
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: 'Foo' },
                },
            },
        ])
    })
    it('should return breadcrumbs with home, family, and category when category selected', () => {
        expect(buildBreadCrumb(null ,'Foo', 'Bar')).toEqual([
            {
                name: 'Accueil',
                route: { name: 'home' },
            },
            {
                name: 'Tous les produits',
                route: { name: 'search' },
            },
            {
                name: 'Foo',
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: 'Foo' },
                },
            },
            {
                name: 'Bar',
                route: {
                    name: 'search',
                    query: {
                        [CATEGORY_LEVEL_0]: 'Foo',
                        [CATEGORY_LEVEL_1]: 'Bar',
                    },
                },
            },
        ])
    })
    it('should return breadcrumbs with home, family when all-product category selected', () => {
        expect(buildBreadCrumb(null, 'Foo', null)).toEqual([
            {
                name: 'Accueil',
                route: { name: 'home' },
            },
            {
                name: 'Tous les produits',
                route: { name: 'search' },
            },
            {
                name: 'Foo',
                route: {
                    name: 'search',
                    query: { [CATEGORY_LEVEL_0]: 'Foo' },
                },
            },
        ])
    })
    it('should return breadcrumbs with home and supplier when supplier is selected', () => {
        expect(buildBreadCrumb(null, null, 'Fertiberia')).toEqual([
            {
                name: 'Accueil',
                route: { name: 'home' },
            },
            {
                name: 'Tous les produits',
                route: { name: 'search' },
            },
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
