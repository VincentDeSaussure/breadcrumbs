import {
    BreadCrumbRoute,
    CategoryRoute,
    FamilyRoute,
    RouteHome,
    SearchRoute,
    SupplierBreadCrumbRoute
} from './BreadCrumbRoute'
import { ALL_PRODUCTS, HOME } from '../anOtherModuleFarAway/constants'

export class BreadCrumb {
  constructor(readonly name: string, readonly route: BreadCrumbRoute) {}
}

export class HomeItem extends BreadCrumb {
  constructor() {
      super(HOME, new RouteHome())
  }
}

export class AllProductsItem extends BreadCrumb {
  constructor() {
    super(ALL_PRODUCTS, new SearchRoute())
  }
}

export class SupplierBreadCrumb extends BreadCrumb {
  constructor(name: string) {
    super(name, new SupplierBreadCrumbRoute(name))
  }
}

export class FamilyBreadCrumb extends BreadCrumb {
  constructor(name: string) {
    super(name, new FamilyRoute(name))
  }
}

export class CategoryBreadCrumb extends BreadCrumb {
  constructor(name: string, familyName: string) {
    super(name, new CategoryRoute(name, familyName))
  }
}
