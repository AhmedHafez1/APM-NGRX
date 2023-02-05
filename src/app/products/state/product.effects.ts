import { ProductService } from './../product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductAPIActions, ProductPageActions } from '../state/actions';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProducts),
      mergeMap((action) =>
        this.productService.getProducts().pipe(
          map((products) =>
            ProductAPIActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(ProductAPIActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.updateProduct),
      concatMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((product) => ProductAPIActions.updateProductSuccess({ product })),
          catchError((error) =>
            of(ProductAPIActions.updateProductFailure({ error }))
          )
        )
      )
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.createProduct),
      mergeMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => ProductAPIActions.createProductSuccess({ product })),
          catchError((error) =>
            of(ProductAPIActions.createProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.deleteProduct),
      mergeMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map((product) =>
            ProductAPIActions.deleteProductSuccess({
              productId: action.productId,
            })
          ),
          catchError((error) =>
            of(ProductAPIActions.deleteProductFailure({ error }))
          )
        )
      )
    );
  });
}
