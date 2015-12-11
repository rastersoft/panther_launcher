/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

/***************************************************
 *       Panther-launcher for Gnome Shell          *
 *                                                 *
 * Allows to use Panther launcher (an slingshot    *
 * fork from ElementaryOS) under Gnome Shell       *
 *                                                 *
 * Created by rastersoft, and distributed under    *
 * GPLv2 or later license.                         *
 *                                                 *
 ***************************************************/

/* Versions:

     1: First public version
     2: Cleaned the code
     3: Vertical align of the Applications text (thanks to Ov3rlo4d)
     4: Changed for Panther-launcher

*/
const Clutter = imports.gi.Clutter;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Meta = imports.gi.Meta;
const Shell = imports.gi.Shell;

const Lang = imports.lang;
const St = imports.gi.St;

const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const Util = imports.misc.util;

const MyIface = '<node>\
<interface name="com.rastersoft.panther.remotecontrol">\
  <method name="DoShow" />\
  <method name="DoPing" >\
    <arg name="n" direction="in" type="i"/>\
    <arg name="response" direction="out" type="i"/>\
  </method>\
</interface>\
</node>';

const MyProxy = Gio.DBusProxy.makeProxyWrapper(MyIface);

const LauncherButton = new Lang.Class({
    Name: 'Panther_Gnome.LauncherButton',
    Extends: PanelMenu.Button,

    _init: function() {

        this.parent(0.0,'Panther_Gnome');
        this.actor.add_style_class_name('panel-status-button');
        this._box = new St.BoxLayout({ style_class: 'panel-status-button-box' });
        this.actor.add_actor(this._box);

        this.buttonLabel = new St.Label({ text: _("Applications"),
                                              y_expand: true,
                                              y_align: Clutter.ActorAlign.CENTER });

        this._box.add_actor(this.buttonLabel);

        this._setActivitiesNoVisible(true);

        // When the user clicks in the Application button, launch panther-launcher
        // to show it
        this.actor.connect('button-release-event', Lang.bind(this,this.launch_function));

        // At startup, prelaunch panther to make it faster the first time the
        // user wants it (panther will remain in background, and the new
        // launches will just instruct it to show, instead of being reloaded
        // Util.spawn(['panther_launcher', '-s']); // now just use a call using DBus, which will activate it automagically
        let instance = new MyProxy(Gio.DBus.session, 'com.rastersoft.panther.remotecontrol','/com/rastersoft/panther/remotecontrol');
        instance.DoPingSync(0);

        let mode = Shell.ActionMode ? Shell.ActionMode.NORMAL : Shell.KeyBindingMode.ALL;
        let flags = Meta.KeyBindingFlags.NONE;
        Main.wm.addKeybinding("show-keybinding", new Gio.Settings({schema: 'org.rastersoft.panther'}),flags,mode, Lang.bind(this, this.launch_function));
    },

    destroy: function() {
        Main.wm.removeKeybinding("show-keybinding");
        this._setActivitiesNoVisible(false);
        this.parent();
    },

    _setActivitiesNoVisible: function(mode) {
        this._activitiesNoVisible=mode;
        if (mode) {
            let indicator = Main.panel.statusArea['activities'];
            if(indicator != null)
                indicator.container.hide();
        } else {
            let indicator = Main.panel.statusArea['activities'];
            if(indicator != null)
                indicator.container.show();
        }
    },

    launch_function: function () {
        let instance = new MyProxy(Gio.DBus.session, 'com.rastersoft.panther.remotecontrol','/com/rastersoft/panther/remotecontrol');
        instance.DoShowSync();
    },
});

let PantherButton;

function enable() {
    PantherButton = new LauncherButton();
    Main.panel.addToStatusArea('panther-menu', PantherButton, 0, 'left');
}

function disable() {
    PantherButton.destroy();
}

function init(extensionMeta) {

}

