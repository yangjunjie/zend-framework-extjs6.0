Ext.define('admin.store.menu.Distribute', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'ajax',
				url : '../admin/distribute',
				noCache : false,
				actionMethods : {
					read : 'GET'
				}
			}
		})