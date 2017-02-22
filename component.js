define('ui/components/machine/driver-profitbricks/component',
    [
        'exports',
        'ember',
        'ui/mixins/driver'
    ],
    function(exports, _ember, _uiMixinsDriver) {

        const locations = [
            {
                id: 'us/las',
                name: 'Las Vegas, United States'
            },
            {
                id: 'de/fkb',
                name: 'Karlsruhe, Germany'
            },
            {
                id: 'de/fra', 
                name: 'Frankfurt, Germany'
            }
        ];
        const cpu_families = [
            {
                name: 'AMD Opteron',
                value: 'AMD_OPTERON'
            },
            {
                name: 'Intel XEON',
                value: 'INTEL_XEON'
            }
        ];
        const rams = [
            {
                name: '1GB',
                value: 1024
            },
            {
                name: '2GB',
                value: 2048
            },
            {
                name: '3GB',
                value: 3072
            },
            {
                name: '4GB',
                value: 4096
            }
        ];
        const cores = ['1', '2', '3', '4'];
        const disk_types = ['SSD', 'HDD'];

        exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {

            driverName              : 'profitbricks',
            model                   : null,
            'profitbricksConfig'    : Ember.computed.alias('model.profitbricksConfig'),
            locations               : locations,
            cpu_families            : cpu_families,
            rams                    : rams,
            cores                   : cores,
            disk_types              : disk_types,      

            bootstrap () {
				let config = this.get('store').createRecord({
                    type: 'profitbricksConfig'
                });
				
				let type = 'host';

				  if (!this.get('useHost')) {
					type = 'machine';
				  }

                this.set('model', this.get('store').createRecord({
                    type: type,
                    'profitbricksConfig': config
                }));
				this.set('editing', false);
            },

             

            validate () {
                this._super();

                let errors      = this.get('errors') || [],
                    model       = this.get('model.profitbricksConfig'), 
                    error_keys  = {
                        cores: '"Cores" is required',
                        cpuFamily: '"CPU family" is required',
                        diskSize: '"Volume size" is required',
                        diskType: '"Disk type" is required',
                        image: '"Image" is required',
                        location: '"Location" is required',
                        password: '"Password" is required',
                        ram: '"RAM" is required',
                        username: '"Username" is required'
                    },
                    valid = true;

                Object.keys(error_keys).forEach((error_key) => {
                    if(model[error_key] == null || model[error_key] === '') {
                        errors.push(error_keys[error_key])
                        valid = false;
                    }
                });

                if(!valid) this.set('errors', errors);

                return valid;

            },

            willDestroyElement () {
                this.set('errors', null);
            },

            actions: {
                selectLocation (loc) {
                    this.set('model.profitbricksConfig.location', loc);
                },
                selectCpuFamily (cpu_family) {
                    this.set('model.profitbricksConfig.cpuFamily', cpu_family);
                },
                selectCores (cores) {
                    this.set('model.profitbricksConfig.cores', cores)
                },
                selectRam (ram) {
                    this.set('model.profitbricksConfig.ram', ram);
                },
                selectDiskType (type) {
                    this.set('model.profitbricksConfig.diskType', type);
                },
                create () {
                    // console.log(this.get('model.profitbricksConfig'));
                },
                cancel () {
                    // console.log('actions:cancel');
                }
            },
			
		    init () {
			  this._super(...arguments);
			  console.log('called init()');
            }
        });
    }
);
;
define("ui/components/machine/driver-profitbricks/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 46,
            "column": 12
          },
          "end": {
            "line": 50,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element4, 'value');
        morphs[1] = dom.createAttrMorph(element4, 'selected');
        morphs[2] = dom.createMorphAt(element4,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","location.id",["loc",[null,[47,31],[47,42]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","location.id",["loc",[null,[47,60],[47,71]]],0,0,0,0],["get","model.profitbricksConfig.location",["loc",[null,[47,72],[47,105]]],0,0,0,0]],[],["loc",[null,[null,null],[47,107]]],0,0],0,0,0,0],
        ["content","location.name",["loc",[null,[48,16],[48,33]]],0,0,0,0]
      ],
      locals: ["location"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 71,
            "column": 12
          },
          "end": {
            "line": 75,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element3, 'value');
        morphs[1] = dom.createAttrMorph(element3, 'selected');
        morphs[2] = dom.createMorphAt(element3,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","cpu_family.value",["loc",[null,[72,31],[72,47]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","cpu_family.value",["loc",[null,[72,65],[72,81]]],0,0,0,0],["get","model.profitbricksConfig.value",["loc",[null,[72,82],[72,112]]],0,0,0,0]],[],["loc",[null,[null,null],[72,114]]],0,0],0,0,0,0],
        ["content","cpu_family.name",["loc",[null,[73,16],[73,35]]],0,0,0,0]
      ],
      locals: ["cpu_family"],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 85,
            "column": 12
          },
          "end": {
            "line": 89,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element2, 'value');
        morphs[1] = dom.createAttrMorph(element2, 'selected');
        morphs[2] = dom.createMorphAt(element2,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","core",["loc",[null,[86,31],[86,35]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","core",["loc",[null,[86,53],[86,57]]],0,0,0,0],["get","model.profitbricksConfig.cores",["loc",[null,[86,58],[86,88]]],0,0,0,0]],[],["loc",[null,[null,null],[86,90]]],0,0],0,0,0,0],
        ["content","core",["loc",[null,[87,16],[87,24]]],0,0,0,0]
      ],
      locals: ["core"],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 103,
            "column": 12
          },
          "end": {
            "line": 107,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'value');
        morphs[1] = dom.createAttrMorph(element1, 'selected');
        morphs[2] = dom.createMorphAt(element1,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","ram.value",["loc",[null,[104,31],[104,40]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","ram.value",["loc",[null,[104,58],[104,67]]],0,0,0,0],["get","model.profitbricksConfig.ram",["loc",[null,[104,68],[104,96]]],0,0,0,0]],[],["loc",[null,[null,null],[104,98]]],0,0],0,0,0,0],
        ["content","ram.name",["loc",[null,[105,16],[105,28]]],0,0,0,0]
      ],
      locals: ["ram"],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 117,
            "column": 12
          },
          "end": {
            "line": 121,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n              ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'selected');
        morphs[2] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","disk_type",["loc",[null,[118,31],[118,40]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","disk_type",["loc",[null,[118,58],[118,67]]],0,0,0,0],["get","model.profitbricksConfig.diskType",["loc",[null,[118,68],[118,101]]],0,0,0,0]],[],["loc",[null,[null,null],[118,103]]],0,0],0,0,0,0],
        ["content","disk_type",["loc",[null,[119,16],[119,29]]],0,0,0,0]
      ],
      locals: ["disk_type"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 165,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("section");
      dom.setAttribute(el2,"class","horizontal-form");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","container-fluid");
      var el4 = dom.createTextNode("\n      \n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","over-hr r-mb20");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      var el6 = dom.createTextNode("\n          ProfitBricks Authentication\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Username\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Passsword\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      \n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","over-hr r-mb20");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      var el6 = dom.createTextNode("\n          Choose a location\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Location\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" \n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-8");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","over-hr r-mb20");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      var el6 = dom.createTextNode("\n          Instance configuration\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            CPU family \n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Cores\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            RAM\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Disk type\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n");
      dom.appendChild(el6, el7);
      var el7 = dom.createComment("");
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row form-group");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Image\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("select");
      dom.setAttribute(el6,"class","form-control");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("option");
      var el8 = dom.createTextNode("\n              ");
      dom.appendChild(el7, el8);
      var el8 = dom.createComment("");
      dom.appendChild(el7, el8);
      var el8 = dom.createTextNode("\n            ");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode("\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("span");
      dom.setAttribute(el6,"class","help-block");
      var el7 = dom.createTextNode("\n            ");
      dom.appendChild(el6, el7);
      var el7 = dom.createElement("strong");
      var el8 = dom.createTextNode("Note:");
      dom.appendChild(el7, el8);
      dom.appendChild(el6, el7);
      var el7 = dom.createTextNode(" Ubuntu 16.04 requires Docker v1.12 or greater. You will need to change the Docker Install URL under the Advanced Options tab.\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-2 form-label");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","form-control-static");
      var el7 = dom.createTextNode("\n            Volume size (GB)\n          ");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","col-md-4");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","footer-actions");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","row");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element5 = dom.childAt(fragment, [0, 1]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element6, [6]);
      var element8 = dom.childAt(element6, [11, 3, 1]);
      var element9 = dom.childAt(element6, [17]);
      var element10 = dom.childAt(element9, [3, 1]);
      var element11 = dom.childAt(element9, [7, 1]);
      var element12 = dom.childAt(element6, [20]);
      var element13 = dom.childAt(element12, [3, 1]);
      var element14 = dom.childAt(element12, [7, 1]);
      var element15 = dom.childAt(element6, [23]);
      var element16 = dom.childAt(element15, [3, 1, 1]);
      var element17 = dom.childAt(element5, [6]);
      var morphs = new Array(19);
      morphs[0] = dom.createMorphAt(element6,1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element7, [7]),1,1);
      morphs[3] = dom.createAttrMorph(element8, 'onchange');
      morphs[4] = dom.createMorphAt(element8,1,1);
      morphs[5] = dom.createAttrMorph(element10, 'onchange');
      morphs[6] = dom.createMorphAt(element10,1,1);
      morphs[7] = dom.createAttrMorph(element11, 'onchange');
      morphs[8] = dom.createMorphAt(element11,1,1);
      morphs[9] = dom.createAttrMorph(element13, 'onchange');
      morphs[10] = dom.createMorphAt(element13,1,1);
      morphs[11] = dom.createAttrMorph(element14, 'onchange');
      morphs[12] = dom.createMorphAt(element14,1,1);
      morphs[13] = dom.createAttrMorph(element16, 'value');
      morphs[14] = dom.createMorphAt(element16,1,1);
      morphs[15] = dom.createMorphAt(dom.childAt(element15, [7]),1,1);
      morphs[16] = dom.createMorphAt(element5,3,3);
      morphs[17] = dom.createMorphAt(dom.childAt(element17, [1]),1,1);
      morphs[18] = dom.createMorphAt(element17,3,3);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[5,6],[5,35]]],0,0],
      ["inline","input",[],["type","text","name","username","classNames","form-control","placeholder","Your ProfitBricks username","value",["subexpr","@mut",[["get","model.profitbricksConfig.username",["loc",[null,[20,119],[20,152]]],0,0,0,0]],[],[],0,0]],["loc",[null,[20,10],[20,154]]],0,0],
      ["inline","input",[],["type","password","name","password","classNames","form-control","placeholder","Your ProfitBricks password","value",["subexpr","@mut",[["get","model.profitbricksConfig.password",["loc",[null,[28,123],[28,156]]],0,0,0,0]],[],[],0,0]],["loc",[null,[28,10],[28,158]]],0,0],
      ["attribute","onchange",["subexpr","action",["selectLocation"],["value","target.value"],["loc",[null,[null,null],[45,96]]],0,0],0,0,0,0],
      ["block","each",[["get","locations",["loc",[null,[46,20],[46,29]]],0,0,0,0]],[],0,null,["loc",[null,[46,12],[50,21]]]],
      ["attribute","onchange",["subexpr","action",["selectCpuFamily"],["value","target.value"],["loc",[null,[null,null],[70,97]]],0,0],0,0,0,0],
      ["block","each",[["get","cpu_families",["loc",[null,[71,20],[71,32]]],0,0,0,0]],[],1,null,["loc",[null,[71,12],[75,21]]]],
      ["attribute","onchange",["subexpr","action",["selectCores"],["value","target.value"],["loc",[null,[null,null],[84,93]]],0,0],0,0,0,0],
      ["block","each",[["get","cores",["loc",[null,[85,20],[85,25]]],0,0,0,0]],[],2,null,["loc",[null,[85,12],[89,21]]]],
      ["attribute","onchange",["subexpr","action",["selectRam"],["value","target.value"],["loc",[null,[null,null],[102,91]]],0,0],0,0,0,0],
      ["block","each",[["get","rams",["loc",[null,[103,20],[103,24]]],0,0,0,0]],[],3,null,["loc",[null,[103,12],[107,21]]]],
      ["attribute","onchange",["subexpr","action",["selectDiskType"],["value","target.value"],["loc",[null,[null,null],[116,96]]],0,0],0,0,0,0],
      ["block","each",[["get","disk_types",["loc",[null,[117,20],[117,30]]],0,0,0,0]],[],4,null,["loc",[null,[117,12],[121,21]]]],
      ["attribute","value",["concat",[["get","model.profitbricksConfig.image",["loc",[null,[135,29],[135,59]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["content","model.profitbricksConfig.image",["loc",[null,[136,14],[136,48]]],0,0,0,0],
      ["inline","input",[],["type","text","name","diskSize","classNames","form-control","placeholder","Volume size in GB","value",["subexpr","@mut",[["get","model.profitbricksConfig.diskSize",["loc",[null,[149,110],[149,143]]],0,0,0,0]],[],[],0,0]],["loc",[null,[149,10],[149,145]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[154,4],[154,34]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[159,28],[159,34]]],0,0,0,0]],[],[],0,0]],["loc",[null,[159,8],[159,36]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[161,6],[161,49]]],0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4]
  };
}()));;

});
