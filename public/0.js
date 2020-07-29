(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateCar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateCar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
      timeout: ''
    };
  },
  mounted: function mounted() {
    this.getTypeCar();
    this.getBrandCar();
    this.getModelCar();
  },
  methods: {
    goToBack: function goToBack() {
      this.$router.push('/');
    },
    CreateCar: function CreateCar() {
      if (!this.client) {
        this.notification = true;
        this.message = 'No has introcido el nombre del cliente';
        this.color = 'error';
      } else if (!this.document) {
        this.notification = true;
        this.message = 'No has introcido el documento';
        this.color = 'error';
      } else if (!this.license_plate) {
        this.notification = true;
        this.message = 'No has introcido la placa';
        this.color = 'error';
      } else if (!this.type_car_id) {
        this.notification = true;
        this.message = 'No has introcido el tipo de vehiculo';
        this.color = 'error';
      } else if (!this.brand_car_id) {
        this.notification = true;
        this.message = 'No has introcido la marca';
        this.color = 'error';
      } else if (!this.model_car_id) {
        this.notification = true;
        this.message = 'No has selecionado el nodelo';
        this.color = 'error';
      } else {
        var data = {
          client: this.client,
          document: this.document,
          license_plate: this.license_plate,
          type_car: this.type_car_id,
          brand_car: this.brand_car_id,
          model_car: this.model_car_id
        };
        axios.post('/api/car/CreateCar', data).then(function (response) {
          // if(response.transaction.status == true){
          //     this.notification = true;
          //     this.message = response.message;
          //     this.color = 'success';
          window.location = '/'; // }else {
          //     this.notification = true;
          //     this.message = 'No se proceso exitosamente el registro';
          //     this.color = 'error'
          // }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    getTypeCar: function getTypeCar() {
      var _this = this;

      axios.get('/api/car/getTypeCar').then(function (res) {
        _this.typeCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getBrandCar: function getBrandCar() {
      var _this2 = this;

      axios.get('/api/car/getBrandCar').then(function (res) {
        _this2.brandCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getModelCar: function getModelCar() {
      var _this3 = this;

      axios.get('/api/car/getModelCar').then(function (res) {
        _this3.modelCar = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946& ***!
  \************************************************************************************************************************************************************************************************************/
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
                  value: _vm.client,
                  callback: function($$v) {
                    _vm.client = $$v
                  },
                  expression: "client"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Documento", type: "number" },
                model: {
                  value: _vm.document,
                  callback: function($$v) {
                    _vm.document = $$v
                  },
                  expression: "document"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Placa" },
                model: {
                  value: _vm.license_plate,
                  callback: function($$v) {
                    _vm.license_plate = $$v
                  },
                  expression: "license_plate"
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
                  value: _vm.type_car_id,
                  callback: function($$v) {
                    _vm.type_car_id = $$v
                  },
                  expression: "type_car_id"
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
                  value: _vm.brand_car_id,
                  callback: function($$v) {
                    _vm.brand_car_id = $$v
                  },
                  expression: "brand_car_id"
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
                  value: _vm.model_car_id,
                  callback: function($$v) {
                    _vm.model_car_id = $$v
                  },
                  expression: "model_car_id"
                }
              }),
              _vm._v(" "),
              _c("v-btn", { on: { click: _vm.goToBack } }, [_vm._v("Volver")]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.CreateCar } },
                [_vm._v("Crear")]
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

/***/ "./resources/js/components/CreateCar.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/CreateCar.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCar.vue?vue&type=template&id=56c17946& */ "./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946&");
/* harmony import */ var _CreateCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCar.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateCar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateCar.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/CreateCar.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateCar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCar.vue?vue&type=template&id=56c17946& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CreateCar.vue?vue&type=template&id=56c17946&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCar_vue_vue_type_template_id_56c17946___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);