if(widget && widget.properties && widget.properties.permissions && widget.properties.permissions.indexOf('contextMenus')!=-1){

global.MenuItem = MenuItem;
global.MenuContext = MenuContext;

OEC.menu = OEC.menu || new MenuContext(Opera);

}
