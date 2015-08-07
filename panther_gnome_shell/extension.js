/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

/***************************************************
 *           SlingShot for Gnome Shell             *
 *                                                 *
 * Allows to launch SlingShot launcher from        *
 * ElementaryOS under Gnome Shell                  *
 *                                                 *
 * Created by rastersoft, and distributed under    *
 * GPLv2 or later license.                         *
 *                                                 *
 ***************************************************/

/* Versions:

     1: First public version
     2: Cleaned the code
     3: Vertical align of the Applications text (thanks to Ov3rlo4d)

*/
const Clutter = imports.gi.Clutter;

const Lang = imports.lang;
const St = imports.gi.St;

const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const Util = imports.misc.util;

const LauncherButton = new Lang.Class({
    Name: 'SlingShot_Gnome.LauncherButton',
    Extends: PanelMenu.Button,

    _init: function() {

        this.parent(0.0,'SlingShot_Gnome');
        this.actor.add_style_class_name('panel-status-button');
        this._box = new St.BoxLayout({ style_class: 'panel-status-button-box' });
        this.actor.add_actor(this._box);

        /*this.buttonIcon = new St.Icon({ gicon: null, style_class: 'system-status-icon' });
        this.buttonIcon.icon_name='start-here';
        this._box.add_actor(this.buttonIcon);*/
        this.buttonLabel = new St.Label({ text: _("Applications"),
                                              y_expand: true,
                                              y_align: Clutter.ActorAlign.CENTER });

        this._box.add_actor(this.buttonLabel);

        this._setActivitiesNoVisible(true);

        // When the user clicks in the Application button, launch slingshot-launcher
        // to show it
        this.actor.connect('button-release-event', function(element,event) {
            Util.spawn(['panther_launcher'])
        });
        // At startup, prelaunch slingshot to make it faster the first time the
        // user wants it (slingshot will remain in background, and the new
        // launches will just instruct it to show, instead of being reloaded
        Util.spawn(['panther_launcher', '-s'])
    },

    destroy: function() {
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

});

let SlingShotButton;

function enable() {
    SlingShotButton = new LauncherButton();
    Main.panel.addToStatusArea('slingshot-menu', SlingShotButton, 0, 'left');
}

function disable() {
    SlingShotButton.destroy();
}

function init(extensionMeta) {

}

