import {
    AllProductsItem,
    BreadCrumb,
    CategoryBreadCrumb,
    FamilyBreadCrumb,
    HomeItem,
    SupplierBreadCrumb
} from './breadcrumb/BreadCrumb'

export function buildBreadCrumb(
  supplierName: string | null,
  familyName: string | null,
  categoryName: string | null
): BreadCrumb[] {
  const breadcrumbs: BreadCrumb[] = [new HomeItem(), new AllProductsItem()]
  if (supplierName) {
    breadcrumbs.push(new SupplierBreadCrumb(supplierName))
  }
  if (familyName) {
    breadcrumbs.push(new FamilyBreadCrumb(familyName))
    if (categoryName) {
      breadcrumbs.push(new CategoryBreadCrumb(categoryName, familyName))
    }
  }
  return breadcrumbs
}
