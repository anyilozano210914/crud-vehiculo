(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditCar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      typeCar: [],
      brandCar: [],
      modelCar: [],
      client: '',
      document: '',
      license_plate: '',
      type_car_id: '',
      brand_car_id: '',
      model_car_id: '',
      notification: false,
      message: '',
      color: '',
      timeout: 6000,
      car: []
    };
  },
  mounted: function mounted() {
    this.getCar();
    this.param = this.$route.params.id;
    this.getTypeCar();
    this.getBrandCar();
    this.getModelCar();
  },
  computed: {
    carEdit: function carEdit() {
      var _this = this;

      var car = {};
      this.car.map(function (item) {
        if (item.id == _this.param) {
          car = item;
        }
      });
      return car;
    }
  },
  methods: {
    getCar: function getCar() {
      var _this2 = this;

      axios.get('/api/car/getCar').then(function (res) {
        _this2.car = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    goToBack: function goToBack() {
      this.$router.push('/');
    },
    getTypeCar: function getTypeCar() {
      var _this3 = this;

      axios.get('/api/car/getTypeCar').then(function (res) {
        _this3.typeCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getBrandCar: function getBrandCar() {
      var _this4 = this;

      axios.get('/api/car/getBrandCar').then(function (res) {
        _this4.brandCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getModelCar: function getModelCar() {
      var _this5 = this;

      axios.get('/api/car/getModelCar').then(function (res) {
        _this5.modelCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    EditCar: function EditCar() {
      var _this6 = this;

      if (!this.carEdit.client) {
        this.notification = true;
        this.message = 'No has introcido el nombre del cliente';
        this.color = 'error';
      } else if (!this.carEdit.document) {
        this.notification = true;
        this.message = 'No has introcido el documento';
        this.color = 'error';
      } else if (!this.carEdit.license_plate) {
        this.notification = true;
        this.message = 'No has introcido la placa';
        this.color = 'error';
      } else if (!this.carEdit.type_car_id) {
        this.notification = true;
        this.message = 'No has introcido el minimo pedido';
        this.color = 'error';
      } else if (!this.carEdit.brand_car_id) {
        this.notification = true;
        this.message = 'No has introcido la direccion';
        this.color = 'error';
      } else if (!this.carEdit.model_car_id) {
        this.notification = true;
        this.message = 'No has selecionado la ciudad';
        this.color = 'error';
      } else {
        var data = {
          id: parseInt(this.param),
          client: this.carEdit.client,
          document: this.carEdit.document,
          license_plate: this.carEdit.license_plate,
          type_car: this.carEdit.type_car_id,
          brand_car: this.carEdit.brand_car_id,
          model_car: this.carEdit.model_car_id
        };
        axios.post('/api/car/EditCar', data).then(function (response) {
          _this6.notification = true;
          _this6.message = response.message;
          _this6.color = 'success';
          window.location = '/';
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": true },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-text-field", {
                attrs: { label: "Cliente" },
                model: {
                  value: _vm.carEdit.client,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "client", $$v)
                  },
                  expression: "carEdit.client"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Documento", type: "number" },
                model: {
                  value: _vm.carEdit.document,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "document", $$v)
                  },
                  expression: "carEdit.document"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Placa" },
                model: {
                  value: _vm.carEdit.license_plate,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "license_plate", $$v)
                  },
                  expression: "carEdit.license_plate"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.typeCar,
                  "item-text": "name",
                  "item-value": "id",
                  label: "Tipo de carro"
                },
                model: {
                  value: _vm.carEdit.type_car_id,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "type_car_id", $$v)
                  },
                  expression: "carEdit.type_car_id"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.brandCar,
                  "item-text": "name",
                  "item-value": "id",
                  label: "Tipo de marca"
                },
                model: {
                  value: _vm.carEdit.brand_car_id,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "brand_car_id", $$v)
                  },
                  expression: "carEdit.brand_car_id"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.modelCar,
                  "item-text": "name",
                  "item-value": "id",
                  label: "Tipo de modelo"
                },
                model: {
                  value: _vm.carEdit.model_car_id,
                  callback: function($$v) {
                    _vm.$set(_vm.carEdit, "model_car_id", $$v)
                  },
                  expression: "carEdit.model_car_id"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.goToBack } }, [_vm._v("Volver")]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.EditCar } },
                [_vm._v("Editar")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { timeout: _vm.timeout, top: true, right: true },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function($event) {
                                _vm.notification = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n                x\n            ")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.notification,
                callback: function($$v) {
                  _vm.notification = $$v
                },
                expression: "notification"
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.message) + "\n\n            "
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/EditCar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/EditCar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCar.vue?vue&type=template&id=68b7c9cf& */ "./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf&");
/* harmony import */ var _EditCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCar.vue?vue&type=script&lang=js& */ "./resources/js/components/EditCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditCar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditCar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/EditCar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditCar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditCar.vue?vue&type=template&id=68b7c9cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditCar.vue?vue&type=template&id=68b7c9cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCar_vue_vue_type_template_id_68b7c9cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);