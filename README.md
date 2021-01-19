# Panther Launcher

**IMPORTANT: Panther Launcher has been migrated to Gitlab**

https://gitlab.com/rastersoft/panther_launcher

A fork from Slingshot Launcher. Its main change is that it doesn't depend on
Gala, Granite or other libraries not available in regular linux distros. It also
has been ported to Autovala, allowing an easier build. Finally, it also has an
applet for Gnome Flashback and an extension for Gnome Shell, allowing to use
it from these desktops.

## Installing Panther Launcher

Just type from a command line:

    mkdir install
    cd install
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr
    make
    sudo make install

By default, both gnome shell extension and gnome-panel and mate-panel applets
will be installed system-wide. If your system doesn't have gnome flashback
available, you can disable building the gnome-panel applet by adding to the
cmake command:

    -DDISABLE_FLASHBACK=ON

Also you can disable the mate-panel applet by adding:

    -DDISABLE_MATE=ON

(be careful: they have two 'D's)

It is important to install it in /usr instead of use /usr/local, to ensure that
DBus activation works fine.

Some extra packages are needed to compile it. Some are quite hard to know which,
like the one with the "missing-icon" (in debian it is *gnome-icon-theme*).

## Installing Panther Launcher on the Raspberry Pi 4

Grab the following dependencies:

    sudo apt install libjson-glib-dev libsoup2.4-dev libpanel-applet-dev


Just type from a command line:

    mkdir install
    cd install
    cmake ../ -DCMAKE_INSTALL_PREFIX=/usr -DDISABLE_MATE=1 -DDISABLE_FLASHBACK=1
    make
    sudo make install

## Changing the location of the launcher's window

It is possible to move the window to the bottom part of the screen. To do so,
just use *dconf* to set *org.rastersoft.panther.show-at-top* to *false*.

## Contacting the author

Created by Raster Software Vigo (rastersoft) 
http://www.rastersoft.com 
https://github.com/rastersoft/slingshot_gnome 
