import { ALL_PRODUCTS, CATEGORY_LEVEL_0, CATEGORY_LEVEL_1, SUPPLIER_REFINEMENT } from './constants'

export const buildBreadCrumb = (supplierName: any = this.selectedSupplierName, familyName: any = this.selectedFamilyName, categoryName: any = this.selectedCategoryName) => {
    const breadcrumbs = []
    breadcrumbs.push({
        name: 'Accueil',
        route: { name: 'home' },
    })
    breadcrumbs.push({
        name: ALL_PRODUCTS,
        route: { name: 'search' },
    })
    const routeQuery = {}
    if (supplierName) {
        // @ts-ignore
        routeQuery[SUPPLIER_REFINEMENT] = supplierName
        breadcrumbs.push({
            name: this.selectedSupplierName,
            route: {
                name: 'search',
                query: { ...routeQuery },
            },
        })
    }
    if (familyName) {
        // @ts-ignore
        routeQuery[CATEGORY_LEVEL_0] = familyName
        breadcrumbs.push({
            name: this.selectedFamilyName,
            route: {
                name: 'search',
                query: { ...routeQuery },
            },
        })
        if (categoryName) {
            breadcrumbs.push({
                name: this.selectedCategoryName,
                route: {
                    name: 'search',
                    query: {
                        ...routeQuery,
                        [CATEGORY_LEVEL_1]: categoryName,
                    },
                },
            })
        }
    }
    return breadcrumbs
}
