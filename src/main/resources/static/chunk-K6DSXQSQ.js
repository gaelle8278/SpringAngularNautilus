import {
  AuthGuard,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-42QF7WIO.js";

// src/app/book-management/components/new-book/new-book.component.ts
var _NewBookComponent = class _NewBookComponent {
  constructor(router) {
    this.router = router;
  }
};
_NewBookComponent.\u0275fac = function NewBookComponent_Factory(t) {
  return new (t || _NewBookComponent)(\u0275\u0275directiveInject(Router));
};
_NewBookComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewBookComponent, selectors: [["app-new-book"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function NewBookComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "new-book works!");
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NewBookComponent = _NewBookComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewBookComponent, { className: "NewBookComponent", filePath: "src\\app\\book-management\\components\\new-book\\new-book.component.ts", lineNumber: 11 });
})();

// src/app/book-management/book-management.routes.ts
var bookManagementRoutes = [
  { path: "create", component: NewBookComponent, canActivate: [AuthGuard] }
];
export {
  bookManagementRoutes
};
//# sourceMappingURL=chunk-K6DSXQSQ.js.map
