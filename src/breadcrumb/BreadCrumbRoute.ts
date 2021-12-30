import { CATEGORY_LEVEL_0, CATEGORY_LEVEL_1, SUPPLIER_REFINEMENT } from '../anOtherModuleFarAway/constants'

export class BreadCrumbRoute {
  constructor(readonly name: string, readonly query?: any) {}
}

export class RouteHome extends BreadCrumbRoute {
  constructor() {
    super('home')
  }
}

const SEARCH = 'search'

export class SearchRoute extends BreadCrumbRoute {
  constructor() {
    super(SEARCH)
  }
}

export class SupplierBreadCrumbRoute extends BreadCrumbRoute {
  constructor(name: string) {
    super(SEARCH, { [SUPPLIER_REFINEMENT]: name })
  }
}

export class FamilyRoute extends BreadCrumbRoute {
  constructor(name: string) {
    super(SEARCH, { [CATEGORY_LEVEL_0]: name })
  }
}

export class CategoryRoute extends BreadCrumbRoute {
  constructor(name: string, familyName: string) {
    super(SEARCH, { [CATEGORY_LEVEL_0]: familyName, [CATEGORY_LEVEL_1]: name })
  }
}
