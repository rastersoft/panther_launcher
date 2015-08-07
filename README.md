# Panther Launcher

A fork from Slingshot Launcher. Its main change is that it doesn't depend on
Gala, Granite or other libraries not available in regular linux distros. It also
has been ported to Autovala, allowing an easier build. Finally, it also has an
applet for Gnome Flashback and an extension for Gnome Shell, allowing to use
it from these desktops.

## Installing Panther Launcher

Just type from a command line:

	mkdir install
	cd install
	cmake ..
	make
	sudo make install

If you want to install the Gnome Flashback applet, just enter the *panther_applet*
folder and type:

	make
	sudo make install

If you want to install the Gnome Shell extension, just enter the *panther_gnome_shell*
folder and type:

	./install

## Contacting the author

Created by Raster Software Vigo (rastersoft) 
http://www.rastersoft.com 
https://github.com/rastersoft/slingshot_gnome 
