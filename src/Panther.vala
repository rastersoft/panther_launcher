// -*- Mode: vala; indent-tabs-mode: nil; tab-width: 4 -*-
//
//  Copyright (C) 2011-2012 Giulio Collura
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

using Gtk;

public class Panther.Panther : Gtk.Application {

    private PantherView view = null;
    public static bool silent = false;
    public static bool command_mode = false;

    public static Settings settings { get; private set; default = null; }
    //public static CssProvider style_provider { get; private set; default = null; }
    public static Gtk.IconTheme icon_theme { get; set; default = null; }
    private DBusService? dbus_service = null;

    construct {
        application_id = "org.rastersoft.panther";
    }

    public Panther () {
        settings = new Settings ();
    }

    protected override void activate () {
        if (this.get_windows () == null) {
            this.view = new PantherView ();
            this.view.set_application (this);

            if (dbus_service == null)
                this.dbus_service = new DBusService (view);

            if (!Panther.silent) {
                this.view.show_panther ();
            }
        } else {
            if (this.view.visible && !Panther.silent) {
                this.view.hide ();
            } else {
                this.view.show_panther ();
            }
        }
        Panther.silent = false;
    }

    static const OptionEntry[] entries = {
        { "silent", 's', 0, OptionArg.NONE, ref silent, "Launch Panther as a background process without it appearing visually.", null },
        { "command-mode", 'c', 0, OptionArg.NONE, ref command_mode, "This feature is not implemented yet. When it is, description will be changed.", null },
        { null }
    };

    public static int main (string[] args) {
        if (args.length > 1) {
            var context = new OptionContext ("");
            context.add_main_entries (entries, "panther");
            context.add_group (Gtk.get_option_group (true));
            
            try {
                context.parse (ref args);
            } catch (Error e) {
                print (e.message + "\n");
            }
        }
        
        var app = new Panther ();

        return app.run (args);
    }

}
